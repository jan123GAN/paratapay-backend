import { Request, response, Response } from "express";

interface AuthenticatedRequest extends Request {
  user?: { userId: string; email: string; displayName: string };
}
import { successResponse, errorResponse } from "../../utils/response.js";
import { createGroupSchema, updateGroupSchema } from "../../validators/group.validator.js";
import { balanceSchema, updateBalanceSchema } from "../../validators/balance.validator.js";
import { PrismaClient } from "@prisma/client";
import { uploadImageToCloudinary } from "../../utils/upload.js";

const prisma = new PrismaClient();

export const createGroup = async (req: AuthenticatedRequest, res: Response) => {
  
  const validGroup = createGroupSchema.safeParse(req.body);

  if (!validGroup.success) {
    return res.status(400).json(errorResponse("validation error", validGroup.error.issues));
  }

  const { name, description, groupType } = validGroup.data;
  const createdBy = req.user?.userId ?? validGroup.data.createdBy;

  if (!createdBy) {
    return res.status(400).json(errorResponse("User ID is required to create group"));
  }

  console.log("userId", createdBy);

  try {
    const existingGroup = await prisma.groups.findUnique({
      where: { name: name },
    });

    if (existingGroup) {
      return res
        .status(400)
        .json(errorResponse("Group already exists with this name", existingGroup));
    }

    const isImage = req.file?.buffer;

    if (!isImage) {
      return res.status(400).json(errorResponse("Group image is required"));
    }

    const imageUrl = await uploadImageToCloudinary(isImage, `groupImage_${name}`);

   const newGroup = await prisma.groups.create({
  data: {
    name: name,
    description: description,
    groupType: groupType,
    avatarUrl: imageUrl,
    createdBy: createdBy,
    member: {
      create: {
        user_id: createdBy,
        role: 'ADMIN', // Ya 'admin' jo bhi aapke enum mein ho
        joined_at: new Date(),
        isInGroup: true
      }
    }
  },
});

    return res.status(201).json(successResponse("Group created successfully", newGroup));
  } catch (error: any) {
  console.error(error.message);
  console.error(error.stack);
  console.error(error);

  return res.status(500).json({
    message: error.message,
    error,
  });
}
};
export const getAllGroups = async (req: Request, res: Response) => {
  try {
    const groups = await prisma.groups.findMany({
      where: { isDeleted: false },
      include: {
        member: {
          where: { isInGroup: true },
          include: {
            user: {
              select: {
                id: true,
                displayName: true,
                avatarUrl: true,
                email: true,
                mobileNumber: true,
              },
            },
          },
        },
      },
    });

    return res
      .status(200)
      .json(successResponse("Group fetched successfully", groups));
  } catch (error) {
    return res
      .status(500)
      .json(errorResponse("Internal server error", error));
  }
};
export const deleteGroup = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  try {
    const group = await prisma.groups.findUnique({
      where: { id },
      include: { expenses: true, groupBalances: true },
    });

    if (!group || group.isDeleted) {
      return res.status(400).json("Group not found");
    }

    if (group.createdBy !== req.user?.userId) {
      return res.status(403).json(errorResponse("You are not authorized to delete this group"));
    }

    if (group.expenses.length || group.groupBalances.length) {
      return res.status(400).json(errorResponse("Cannot delete a group that has expense or balance data"));
    }

    const response = await prisma.groups.update({
      where: { id },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
      },
    });

    return res.status(200).json(successResponse("Group deleted sucussfully", response));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal Server error ", error));
  }
};

export const updateGroup = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  const validGroup = updateGroupSchema.safeParse(req.body);

  if (!validGroup.success) {
    return res.status(400).json(errorResponse("Validation error", validGroup.error.issues));
  }
  const { name, groupType, description } = validGroup.data;

  try {
    const group = await prisma.groups.findUnique({
      where: { id },
    });

    if (!group || group.isDeleted) {
      return res.status(404).json(errorResponse("Group not found"));
    }

    if (group.createdBy !== req.user?.userId) {
      return res.status(403).json(errorResponse("You are not authorized to update this group"));
    }

    if (name) {
      const existGroupName = await prisma.groups.findFirst({
        where: {
          name,
          id: { not: id },
        },
      });

      if (existGroupName) {
        return res.status(400).json(errorResponse("Group name already exists"));
      }
    }

    const isImage = req.file?.buffer;
    let imageUrl;
    if (isImage) {
      imageUrl = await uploadImageToCloudinary(isImage, `avatar_${name}`);
    }

    const updatedUser = await prisma.groups.update({
      where: { id },
      data: {
        name: name,
        groupType: groupType,
        description: description,
        avatarUrl: imageUrl,
      },
    });
    return res.status(200).json(successResponse("Group updated successfully", updatedUser));
  } catch (error) {
    return res.status(500).json(errorResponse("Internaml server error ", error));
  }
};

//  Group Member

export const addGroupMember = async (req: AuthenticatedRequest, res: Response) => {
  const { userId, groupId } = req.body;

  try {
    const group = await prisma.groups.findUnique({
      where: { id: groupId },
    });

    if (!group || group.isDeleted) {
      return res.status(404).json(errorResponse("Group not found"));
    }

    if (group.createdBy !== req.user?.userId) {
      return res.status(403).json(errorResponse("You are not authorized to add members"));
    }

    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user || user.isDeleted) {
      return res.status(404).json(errorResponse("User not found"));
    }

    const groupMember = await prisma.group_members.create({
      data: {
        group_id: groupId,
        user_id: userId,
        joined_at: new Date(),
      },
    });

    return res.status(200).json(successResponse("Group member added successfully", groupMember));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};

// group member by gorup id
export const getGroupMembers = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const groupMembers = await prisma.group_members.findMany({
      where: { group_id: id, isInGroup: true },
      include: { user: true },
    });

    const filteredGroupMembers = groupMembers.map(member => ({
      id: member.id,
      role: member.role,
      joined_at: member.joined_at,
      user: {
        id: member.user.id,
        name: member.user.displayName,
        avatarUrl: member.user.avatarUrl,
        email: member.user.email,
        mobileNumber: member.user.mobileNumber,
      },
    }));

    return res
      .status(200)
      .json(successResponse("Group members fatched successfully", filteredGroupMembers));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};

export const removeGroupMember = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  try {
    const groupMember = await prisma.group_members.findUnique({
      where: { id },
      include: { group: true },
    });

    if (!groupMember) {
      return res.status(404).json(errorResponse("Group member not found"));
    }

    if (groupMember.group.createdBy !== req.user?.userId) {
      return res.status(403).json(errorResponse("You are not authorized to remove this member"));
    }

    const hasLedgerData = await prisma.expenses.findFirst({ where: { group_id: groupMember.group_id } });
    const hasBalanceData = await prisma.balances.findFirst({ where: { group_id: groupMember.group_id } });
    if (hasLedgerData || hasBalanceData) {
      return res.status(400).json(errorResponse("Cannot remove this member while the group has expense or balance data"));
    }

    const updatedMember = await prisma.group_members.update({
      where: { id },
      data: {
        isInGroup: false,
        left_at: new Date(),
      },
    });

    return res.status(200).json(successResponse("Group member removed successfully", updatedMember));
  } catch (error) {
    // console.log(error);

    return res.status(500).json(errorResponse("Internal server error", error));
  }
};

// Balances

export const createBalance = async (req: Request, res: Response) => {
  const validBalance = balanceSchema.safeParse(req.body);

  if (!validBalance.success) {
    return res.status(400).json(errorResponse("validation error", validBalance.error.issues));
  }

  const { balance, group_id, user_id, currency_code } = validBalance.data;
  try {
    const isExist = await prisma.balances.findFirst({
      where: { group_id: group_id },
    });

    if (isExist) {
      return res.status(400).json("Balance already exists for this group");
    }

    const response = await prisma.balances.create({
      data: {
        balance: balance,
        group_id: group_id,
        user_id: user_id,
        currency_code: currency_code,
        last_update: new Date(),
      },
    });

    return res.status(200).json(successResponse("Balance created successfully", response));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server Error", error));
  }
};

export const getBalance = async (req: Request, res: Response) => {
  const { balance_id } = req.params;

  try {
    if (!balance_id) {
      return res.status(400).json(errorResponse("Balence id is required"));
    }
    const response = await prisma.balances.findFirst({
      where: {
        id: balance_id,
      },
    });

    return res.status(200).json(successResponse("Balance is fetched sucessfully", response));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};

export const getAllBalance = async (req: Request, res: Response) => {
  try {
    const response = await prisma.balances.findMany();

    return res.status(200).json(successResponse("Balance is fetched sucessfully", response));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};

export const updateBalance = async (req: Request, res: Response) => {
  const { balance_id } = req.params;

  const validBalance = updateBalanceSchema.safeParse(req.body);

  if (!validBalance.success) {
    return res.status(400).json(errorResponse("Validation error", validBalance.error?.issues));
  }

  const { balance, currency_code } = validBalance.data;

  try {
    const isCurrencyCodeExist = await prisma.currencies.findFirst({
      where: { code: currency_code },
    });

    if (!isCurrencyCodeExist) {
      return res.status(400).json(errorResponse("Currency code not exist"));
    }

    const updatedBalance = await prisma.balances.update({
      where: { id: balance_id },
      data: {
        balance: balance,
        currency_code: currency_code,
        last_update: new Date(),
      },
    });
    return res.status(200).json(successResponse("Balance updated successfully", updatedBalance));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};

export const getGroupByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const groups = await prisma.groups.findMany({
      where: {
        isDeleted: false,
        OR: [
          {
            // Case 1: User ne khud group banaya hai (Admin/Creator)
            createdBy: userId, 
          },
          {
            // Case 2: User us group ka member hai
            member: {
              some: {
                user_id: userId,
                isInGroup: true,
              },
            },
          },
        ],
      },
      include: {
        member: {
          where: { isInGroup: true },
          include: {
            user: {
              select: {
                id: true,
                displayName: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
    });

    if (groups.length === 0) {
      return res.status(200).json({ groups: [], message: "No groups found." }); 
      // 404 ki jagah 200 bhej rahe hain empty array ke saath taki frontend crash na ho
    }

    return res.status(200).json({ groups });
  } catch (error) {
    console.error("Error fetching groups:", error);
    return res.status(500).json({ message: "Internal Server Error." });
  }
};


