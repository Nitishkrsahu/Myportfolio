import { BrowserRouter as Router, Routes, Route } from "react-router"
import { Header } from "../component/header/header"
import { Footer } from "../component/footer/footer"
export function Home() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<div>hii I am From Portfolio.</div>} />
                    <Route path="/skills" element={<div>My Skills</div>} />
                    <Route path="/resume" element={<div>React Resume</div>} />
                    <Route path="/service" element={<div>Services My Work</div>} />
                    <Route path="/contact" element={<div>Contact</div>} />
                </Routes>
            </Router>
            <Footer></Footer>
        </>
    )
}