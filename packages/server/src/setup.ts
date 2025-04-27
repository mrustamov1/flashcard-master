import { DataSource } from "typeorm"
import { Config } from "./config.js"
import { UserEntity } from "./entities/user.entity.js"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: Config.postgres.host,
  port: Config.postgres.port,
  database: Config.postgres.database,
  username: Config.postgres.username,
  password: Config.postgres.password,
  synchronize: true,
  entities: [UserEntity],
})
