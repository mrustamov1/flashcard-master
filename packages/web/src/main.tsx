// import { StrictMode } from 'react'
import "./styles/global.module.css"
import "./styles/font-awesome.css"
import { createRoot } from "react-dom/client"
import { App } from "./app/app.component.tsx"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </StrictMode>,
)
