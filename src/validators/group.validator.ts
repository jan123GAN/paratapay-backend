import { z } from "zod";

export enum GroupType {
  EQUAL_SPLIT = "EQUAL_SPLIT",
  CUSTOM_SPLIT = "CUSTOM_SPLIT",
}

export const createGroupSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10).optional(),
 createdBy: z.string().optional(),
  groupType: z.nativeEnum(GroupType),
});

export const updateGroupSchema = z.object({
  name: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  groupType: z.nativeEnum(GroupType).optional(),
});

export type createGroupSchemaSchema = z.infer<typeof createGroupSchema>;
export type updateGroupSchemaSchema = z.infer<typeof updateGroupSchema>;
