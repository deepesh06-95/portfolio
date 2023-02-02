import react from "react";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import {About} from "./components/About";
import { Footer } from "./components/Footer";
import { TechSkill } from "./components/TechSkills";
import { ContactMe } from "./components/Contact";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { PartcleBackground } from "./components/ParticleBackground";
function App() {
  {
    useEffect(() => {
      Aos.init({
        once:true,
      })
      })
    }
  
  return (
    <>
   
    <div></div>
    <div data-aos="fade-down" data-aos-duration="800">
    <Navbar/>
    </div>
    
    <div className="min-h-screen px-3 py-10 bg-blue-900 sm:px-5" id="tech">
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
      <Card/>
      </div>
     
      <About/>
      
      <TechSkill/>
      <Skill/>
      <Project/>
      <ContactMe/>
      <Footer/>
    </div>
    <PartcleBackground/>
    </>
    
  );
}

export default App;
