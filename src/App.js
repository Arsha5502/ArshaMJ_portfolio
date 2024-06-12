import React from 'react';
import Navbar from "./components/navbar/Navbar";
// import Parallax from './components/parallax/Parallax';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="font-bodyFont w-full h-auto bg-bodyColor text-lightText px-2">
      <Navbar/>
      <div className="max-w-screen-xl mx-auto">
       
       {/* <Parallax/> */}
       <Banner/>
       <About/>
       <Projects/>
       <Resume/>
       <Contact/>
      </div> 
  
    </div>
  );
}

export default App;
