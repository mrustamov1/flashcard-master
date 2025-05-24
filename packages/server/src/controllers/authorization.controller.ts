import bcrypt from "bcrypt"
import { Request, Response } from "express"
import { UserType } from "../types/user.type.js"
import { AuthSchema } from "../schema/auth.schema.js"
import { UserEntity } from "../entities/user.entity.js"
import { SchemaUtiles } from "../utils/schema.utile.js"
import { DataSourceUtils } from "../utils/data-source.utile.js"
import { LoginModel, RegistrationModel } from "../models/user.model.js"
import { TokenUtils } from "../utils/token.utiles.js"

export const AuthorizationController = {
  async register(
    req: Request<unknown, unknown, RegistrationModel>,
    res: Response
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
      res.status(200).send({
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
      })
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

      const tokens = TokenUtils.generate({ id: user.id })

      await DataSourceUtils.update<UserType>(UserEntity, {
        id: user.id,
        token: tokens.refresh,
        updated_at: Date.now(),
      })

      res.status(200).send({
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        photo: user.photo,
        tokens: JSON.stringify(tokens),
      })
    } catch (error) {
      res.status(500).send({ error: "Server error" })
      console.log(error)
    }
  },
}
