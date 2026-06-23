import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  displayName: z.string().min(3),
  mobileNumber: z.string().min(10),
  social_login_provider: z.string(),
  contact_list: z.array(
    z.object({
      name: z.string(),
      number: z.string(),
    }),
  ),
});

export const updateUserSchema = z.object({
  email: z.string().email().optional(),
  displayName: z.string().min(3).optional(),
  contact_list: z.array(
    z.object({
      name: z.string(),
      number: z.string(),
    }),
  ).optional(),
}).refine(
  (data) =>
    data.email !== undefined ||
    data.displayName !== undefined ||
    data.contact_list !== undefined,
  {
    message: "At least one field must be provided",
    path: [],
  }
);
export type createUserSchema = z.infer<typeof createUserSchema>;
