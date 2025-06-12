import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <ContactForm />
    </div>
  );
}
