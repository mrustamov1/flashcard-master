export type UserRegisterType = {
  id: string
  name: string
  surname: string
  email: string
  password: string
  confirmPassword: string
}

export type UserLoginType = {
  email: string
  password: string
}
