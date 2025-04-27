export const AuthSchema = {
  register: {
    type: "object",
    properties: {
      name: { type: "string", nullable: false },
      surname: { type: "string", nullable: false },
      email: { type: "string", nullable: false, format: "email" },
      password: { type: "string", nullable: false },
    },
    required: ["name", "surname", "email", "password"],
    additionalProperties: false,
  },

  login: {
    type: "object",
    properties: {
      email: { type: "string", format: "email" },
      password: { type: "string" },
    },
    required: ["email", "password"],
    additionalProperties: false,
  },
}
