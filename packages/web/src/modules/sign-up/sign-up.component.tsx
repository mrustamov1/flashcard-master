import styles from "./sign-up.module.css"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../ui-components/input/input.component"
import { UserRegisterSchema, UserRegisterType } from "../../types/user.type"

export function SignUp() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterType>({
    resolver: zodResolver(UserRegisterSchema),
  })

  // ---------------------------------------------------------------------------
  // fetch
  // ---------------------------------------------------------------------------
  const onSubmit: SubmitHandler<UserRegisterType> = async (data) => {
    try {
      const response = await fetch("http://localhost:9090/user/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        console.log("Invalid email or password")
        return false
      }
      const userData = await response.json()
      localStorage.setItem(
        "userDetails",
        JSON.stringify({
          id: userData.id,
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
        }),
      )
      navigate("/test")
    } catch (error) {
      console.log(error)
    }
  }

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.content}>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Sign Up </h1>
        <div className={styles.starterInputs}>
          <Input
            label="Enter your name"
            {...register("name")}
            type="text"
            placeholder="Name..."
            error={errors.name?.message}
          />

          <Input
            label="Enter your surname"
            {...register("surname")}
            type="text"
            placeholder="Surname..."
            error={errors.surname?.message}
          />
        </div>
        <Input
          label="Enter your email address"
          {...register("email")}
          type="email"
          placeholder="Email address..."
          error={errors.email?.message}
        />
        <Input
          label="Enter your password"
          {...register("password")}
          type="password"
          placeholder="Password..."
          error={errors.password?.message}
        />
        <Input
          label="Confirm your password"
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm password..."
          error={errors.confirmPassword?.message}
        />
        <button type="submit" className={styles.singUpButton}>
          Sign Up
        </button>
        <p className={styles.signInText}>
          I already have an account{" "}
          <b
            className={styles.signInButton}
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </b>
        </p>
      </form>
    </section>
  )
}
