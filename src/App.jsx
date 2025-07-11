import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import LandingSlideShow from './Components/LandingSlideShow';
import AboutUs from './Components/AboutUs';
import StaffMember from './Components/StaffMember';
import Outcomes from './Components/Outcomes';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
    <LandingSlideShow />
    <AboutUs />
    <Outcomes />
    </>
  )
}

export default App
