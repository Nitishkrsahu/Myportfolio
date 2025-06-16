import { Header } from './component/header/header'
import { Routes, Route } from 'react-router'
import './App.css'
import { Landing } from './component/portfolio/landing'

function App() {

  return (
    <>
    <div>
      <Header />
      <Landing></Landing>
    </div>

    </>
  )
}

export default App
