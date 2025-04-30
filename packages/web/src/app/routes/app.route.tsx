import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../modules/home-page/home-page.component"
import { SignUp } from "../../modules/sign-up/sign-up.component"
import { SignIn } from "../../modules/sign-in/sign-in.component"
import { Test } from "../../modules/test/test.component"
import { Topics } from "../../modules/test/topics/topic.component"
import { TestSection } from "../../modules/test-section/test-section.component"
import { ProtectedRoute } from "./protected.route"
import { UserProfile } from "../../modules/user-profile/user-profile.component"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/test" element={<Test />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/test-section/:id" element={<TestSection />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}
