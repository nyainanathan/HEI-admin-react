import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import LandingSlideShow from './Components/LandingSlideShow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <LandingSlideShow />
    </>
  )
}

export default App
