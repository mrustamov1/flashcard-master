import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { UserType } from "../types/user.type"

@Entity({ name: "users" })

export class UserEntity implements UserType {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "bigint", nullable: false, default: Date.now() })
  created_at!: number

  @Column({ type: "bigint", nullable: false, default: Date.now() })
  updated_at!: number

  @Column({ type: "varchar", nullable: false })
  name!: string

  @Column({ type: "varchar", nullable: true, default: null })
  photo!: string | null

  
  @Column({ type: "varchar", nullable: true, default: null })
  token!: string | null

  @Column({ type: "varchar", nullable: false })
  surname!: string

  @Column({ type: "varchar", nullable: false, unique: true })
  email!: string

  @Column({ type: "varchar", nullable: false })
  password!: string

  @Column({ type: "varchar", nullable: true, default: null })
  refreshToken!: string | null
}
