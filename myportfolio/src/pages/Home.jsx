import { BrowserRouter as Router, Routes, Route } from "react-router"
import { Header } from "../component/header/header"
import { Footer } from "../component/footer/footer"
import { About } from "../component/About-section/about"
import { Skills } from "../component/skills-section/skills-section"
export function Home() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/resume" element={<div>React Resume</div>} />
                    <Route path="/service" element={<div>Services My Work</div>} />
                    <Route path="/contact" element={<div>Contact</div>} />
                </Routes>
            </Router>
            <Footer></Footer>
        </>
    )
}