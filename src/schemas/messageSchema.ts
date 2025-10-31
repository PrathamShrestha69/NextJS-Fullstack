import * as z from 'zod';

export const messageSchema = z.object({
  content: z
  .string()
  .min(10,{message:"Message must be at least of 10 characters "})
  .max(300,{message:"Message must be at most 300 characters only"})
})