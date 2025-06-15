import React from 'react';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';


function App() {
  return (
    <>
      <Navbar />
      <main className = "main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
