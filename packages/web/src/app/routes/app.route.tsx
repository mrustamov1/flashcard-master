import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../modules/home-page/home-page.component"
import { SignUp } from "../../modules/sign-up/sign-up.component"
import { SignIn } from "../../modules/sign-in/sign-in.component"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}
