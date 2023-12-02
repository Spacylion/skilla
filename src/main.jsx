import React from "react"
import {createRoot} from "react-dom/client"
import MainApp from "./app/App"
import "@/shared/styles/reset.css"
import "@/shared/styles/fonts.css"

createRoot(document.getElementById("root")).render(<MainApp/>)
