import { LoginModel, RegistrationModel } from "../models/user.model.js"
import { Request, Response } from "express"
import { SchemaUtiles } from "../utiles/schema.utile.js"
import { AuthSchema } from "../schema/auth.schema.js"
import { DataSourceUtils } from "../utiles/data-source.utile.js"
import { UserEntity } from "../entities/user.entity.js"
import bcrypt from "bcrypt"
import { UserType } from "../types/user.type.js"

export const AuthorizationController = {
  async register(
    req: Request<unknown, unknown, RegistrationModel>,
    res: Response,
  ) {
    try {
      SchemaUtiles<RegistrationModel>(AuthSchema.register, req.body)

      const hasUser = await DataSourceUtils.findOneBy(UserEntity, {
        email: req.body.email,
      })

      if (hasUser) {
        res.status(409).send("User already exist")
        return
      }

      const hashPassword = await bcrypt.hash(req.body.password, 3)
      const user = await DataSourceUtils.insert<UserType>(UserEntity, {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: hashPassword,
        created_at: Date.now(),
        updated_at: Date.now(),
      })
      res.status(200).send({ id: user.id })
    } catch (error) {
      res.status(501).send(error)
    }
  },

  async login(req: Request<LoginModel>, res: Response) {
    try {
      const user = await DataSourceUtils.findOne(UserEntity, {
        where: { email: req.body.email },
      })

      console.log("User found:", user)

      if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        res.status(401).send({ error: "Invalid email or password" })
        return
      } else {
        console.log(user)
      }
      res.status(200).send({ id: user.id })
    } catch (error) {
      console.log(error)
    }
  },
}
