import * as z from "zod";

export const usernamevalidation = z
  .string()
  .min(2,"Username must be at least 2 characters long")
  .max(20,"Username must be at most 20 characters only")
  .regex(/^[a-zA-Z0-9_-]+$/, 'Username must not contain special characters')

export const signUpSchema = z.object({
  username:usernamevalidation,
  email: z.string().email({message:"Please enter a valid email address"}),
  password:z.string().min(6,{message:"Password must be at least 6 characters long"}).max(20,{message:"Password must be at most 20 characters only"}),
})