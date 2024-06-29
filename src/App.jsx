import React, { useState } from 'react';
import Hero from './components/Hero';
import Technologies from './components/Tech';
import Footer from './components/Footer';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Experience from './components/Experience';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'text-neutral-300' : 'text-black'} overflow-x-hidden antialiased selection:bg-cyan-100 selection:text-cyan-900`}>
      <div className='fixed top-0 -z-10 h-full w-full'>
        {darkMode ? (
          <div className="relative h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        )}
      </div>
      <div className='flex flex-col items-center'>
        <div className='container mx-auto px-8'>
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
          <Hero />
          <section id="about">
            <AboutMe />
          </section>
          <section id='tech'>
            <Technologies />
          </section>
          <section id="experience">
          <Experience /> 
          </section>
          <section id="projects">
            <Projects />
          </section>
        </div>
        <div className='bottom-0 w-[100%]'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
