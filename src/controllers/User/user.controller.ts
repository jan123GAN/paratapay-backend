import { Request, Response } from "express";
import { successResponse, errorResponse } from "../../utils/response.js";
import { createUserSchema, updateUserSchema } from "../../validators/userValidator.js";
import { comparePassword, hashPassword } from "../../utils/hash.js";
import { PrismaClient } from "@prisma/client";
import { uploadImageToCloudinary } from "../../utils/upload.js";
import { generateToken } from "../../utils/jwt.js";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  if (typeof req.body.contact_list === "string") {
    try {
      req.body.contact_list = JSON.parse(req.body.contact_list);
    } catch {
      return res.status(400).json(errorResponse("Invalid JSON in contact_list"));
    }
  }

  const validUser = createUserSchema.safeParse(req.body);

  if (!validUser.success) {
    return res.status(400).json(errorResponse("Validation error", validUser.error.issues));
  }

  const { email, password, displayName, social_login_provider, contact_list, mobileNumber } =
    validUser.data;

  try {
    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [{ email }, { displayName }],
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json(errorResponse("user already exists with email or displayName", existingUser));
    }

    const isImage = req.file?.buffer;
    if (!isImage) {
      return res.status(400).json(errorResponse("Avatar image is required"));
    }

    const imageUrl = await uploadImageToCloudinary(isImage, `avatar_${displayName}`);

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.users.create({
      data: {
        email,
        mobileNumber,
        password: hashedPassword,
        displayName,
        avatarUrl: imageUrl,
        social_login_provider,
        contact_list,
      },
    });

    const token = generateToken({
      userId: newUser.id,
      email: newUser.email,
      displayName: newUser.displayName,
    });

    res.status(201).json(successResponse("User created successfully", { user: newUser, token }));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const condition = req.query.search
      ? {
          OR: [
            {
              displayName: { contains: req.query.search.toString(), mode: "insensitive" as const },
            },
            { email: { contains: req.query.search.toString(), mode: "insensitive" as const } },
            {
              mobileNumber: { contains: req.query.search.toString(), mode: "insensitive" as const },
            },
            {
              id: { contains: req.query.search.toString(), mode: "insensitive" as const },
            },
          ],
        }
      : {};

    console.log(condition);
    const users = await prisma.users.findMany({
      where: {
        isDeleted: false,
        ...condition,
      },
    });
    res.status(200).json(
      successResponse("Users fetched successfully", {
        user: users,
      }),
    );
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.users.findUnique({
      where: { id },
    });

    if (!user || user.isDeleted) {
      return res.status(404).json(errorResponse("User not found"));
    }

    await prisma.users.update({
      where: { id },
      data: { isDeleted: true, deletedAt: new Date() },
    });

    res.status(200).json(successResponse("User deleted successfully"));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};

export const updateUser = async (req: Request, res: Response) => {
  if (typeof req.body.contact_list === "string") {
    try {
      req.body.contact_list = JSON.parse(req.body.contact_list);
    } catch {
      return res.status(400).json(errorResponse("Invalid JSON in contact_list"));
    }
  }

  const { id } = req.params;
  const { email, displayName, contact_list } = req.body;

  const validUser = updateUserSchema.safeParse({
    email,
    displayName,
    contact_list,
  });
  if (!validUser.success) {
    return res.status(400).json(errorResponse("Validation error", validUser.error.issues));
  }

  try {
    const user = await prisma.users.findUnique({
      where: { id },
    });

    if (!user || user.isDeleted) {
      return res.status(404).json(errorResponse("User not found"));
    }

    if (email) {
      const existingUser = await prisma.users.findFirst({
        where: {
          email,
          id: { not: id },
        },
      });
      if (existingUser) {
        return res.status(400).json(errorResponse("Email already exists"));
      }
    }

    const isImage = req.file?.buffer;
    let imageUrl;
    if (isImage) {
      imageUrl = await uploadImageToCloudinary(isImage, `avatar_${displayName}`);
    }

    const updatedUser = await prisma.users.update({
      where: { id },
      data: {
        email,
        displayName,
        contact_list: contact_list,
        avatarUrl: isImage ? imageUrl : undefined,
      },
    });

    res.status(200).json(
      successResponse("User updated successfully", {
        user: updatedUser,
      }),
    );
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.users.findFirst({
      where: { OR: [{ email: email }, { mobileNumber: email }], isDeleted: false },
    });

    if (!user || user.isDeleted) {
      return res.status(404).json(errorResponse("User not found"));
    }

    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json(errorResponse("Invalid credentials"));
    }

    const token = generateToken({
      userId: user.id,
      email: user.email,
      displayName: user.displayName,
    });

    const formatUser = {
      id: user.id,
      email: user.email,
      displayName: user.displayName,
      avatarUrl: user.avatarUrl,
      mobileNumber: user.mobileNumber,
      contact_list: user.contact_list,
    };

    return res.status(200).json(
      successResponse("Login successful", {
        user: formatUser,
        token,
      }),
    );
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};
