import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Articles from './components/Articles/Articles';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
