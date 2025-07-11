import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import LandingSlideShow from './Components/LandingSlideShow';
import AboutUs from './Components/AboutUs';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
    <LandingSlideShow />
    <AboutUs />
    </>
  )
}

export default App
