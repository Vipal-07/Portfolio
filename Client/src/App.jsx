import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import SkillPage from "./components/SkillPage"
import ProjectPage from "./components/ProjectPage"
import ContactPage from "./components/ContactPage"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App