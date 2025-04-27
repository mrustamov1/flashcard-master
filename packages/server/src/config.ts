import "dotenv/config"

export const Config = {
  port: Number(process.env.PORT) || 9090,
  postgres: {
    host: process.env.POSTGRES_HOST || "127.0.0.1",
    port: Number(process.env.POSTGRESS_PORT) || 5432,
    database: process.env.POSTGRES_DB || "flashcard_master",
    username: process.env.POSTGRES_USER || "flashcard_master",
    password: process.env.POSTGRES_PASSWORD || "flashcard_master!",
  },
}
