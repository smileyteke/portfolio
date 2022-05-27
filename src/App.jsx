import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
// import Portfolio from "./components/portfolio/Portfolio";
import Certification from "./components/Education/Certification";
import Projects from "./components/work/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="section">
     
       <Intro/>       
       <Projects/>
       <Certification/>
       <Testimonials/>
       <Contact/>
       
     </div>
    </div>
  );
}

export default App;
