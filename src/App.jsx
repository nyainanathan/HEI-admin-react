import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import LandingSlideShow from './Components/LandingSlideShow';
import AboutUs from './Components/AboutUs';
import StaffMember from './Components/StaffMember';
import Outcomes from './Components/Outcomes';
import Fields from './Components/Fields';
import Admission from './Components/Admission';
import ProgrammOverview from './Components/ProgrameOverview';
import TechStack from './Components/TechSection';
import Footer from './Components/Footer';
import Partners from './Components/Partners';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
    <LandingSlideShow />
    <AboutUs />
    <StaffMember />
    <Outcomes />
    <Fields/>
    <Admission/>
    <ProgrammOverview/>
    <TechStack/>
    <Partners/>
    <Footer/>
    </>
  )
}

export default App
