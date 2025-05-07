import { z } from "zod"

export const ShowAllStateSchema = z.boolean()

export type ShowAllState = z.infer<typeof ShowAllStateSchema>
