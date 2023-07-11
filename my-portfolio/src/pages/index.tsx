import Email from '@/components/email';
import SocialIcons from '@/components/socialIcons';
import About from '@/sections/about';
import Contact from '@/sections/contact';
import Experience from '@/sections/experience';
import Hero from '@/sections/hero';
import Navbar from '@/sections/navbar';
import Projects from '@/sections/projects';
import React from 'react';

function Index() {
  return (
    <div className='app'>
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default Index;
