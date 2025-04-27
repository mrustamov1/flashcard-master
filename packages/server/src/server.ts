import express from "express"
import { Config } from "./config.js"
import { AppDataSource } from "./setup.js"

const server = express()

server.use(express.json())

await AppDataSource.initialize()
server.listen({ host: "0.0.0.0", port: Config.port })
console.log(`Server running on localhost://0.0.0.0:${Config.port}}`)
