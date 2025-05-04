import { z } from "zod"

export const UserRegisterSchema = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    surname: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not matched",
    path: ["confirmPassword"],
  })

export type UserRegisterType = z.infer<typeof UserRegisterSchema>

export const UserLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type UserLoginType = z.infer<typeof UserLoginSchema>
