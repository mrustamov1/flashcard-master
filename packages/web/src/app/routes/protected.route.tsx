import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoute() {
  const user = localStorage.getItem("currentUser")
  if (!user) {
    return <Navigate to={"/sign-in"} replace={true} />;
  }

  return <Outlet />
}
