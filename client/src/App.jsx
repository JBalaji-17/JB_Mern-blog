import { BrowserRouter , Routes, Route } from "react-router-dom"
import home from './pages/home'
import about from "./pages/about"
import signin from "./pages/signin"
import signup from "./pages/signup"
import project from "./pages/project"
import dashboard from "./pages/dashboard"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<home/>} />
      <Route path="/about" element={<about />} />
      <Route path="/signin" element={<signin />} />
      <Route path="/signup" element={<signin />} />
      <Route path="/dashboard" element={<dashboard />} />
      <Route path="/project" element={<project />} />
    </Routes>
    </BrowserRouter>
  )
}
