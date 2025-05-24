import { z } from "zod"

export const ShowAllStateSchema = z.object({
    id: z.number(),
    name: z.string()
})

export type ShowAllState = z.infer<typeof ShowAllStateSchema>
