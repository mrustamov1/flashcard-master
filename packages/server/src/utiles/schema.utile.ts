import Ajv, { Schema } from "ajv"
import addFormats from "ajv-formats"

export function SchemaUtiles<T>(schema: Schema, req: T) {
  try {
    const ajv = new Ajv()
    addFormats(ajv)
    const validate = ajv.compile(schema)
    validate(req)
  } catch (error) {
    throw new Error(String(error))
  }
}
