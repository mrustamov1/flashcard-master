import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../modules/home-page/home-page.component"
import { SignUp } from "../../modules/sign-up/sign-up.component"
import { SignIn } from "../../modules/sign-in/sign-in.component"
import { Test } from "../../modules/test/test.component"
import { Topics } from "../../modules/test/topics/topic.component"
import { TestSection } from "../../modules/test-section/test-section.component"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/test" element={<Test />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/test-section" element={<TestSection />} />
    </Routes>
  )
}
