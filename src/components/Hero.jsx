import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-primary to-secondary text-white">
      <motion.h1 className="text-5xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Jouw Naam
      </motion.h1>
      <p className="text-xl mb-8">Creative Front-end Developer</p>
      <button onClick={scrollToPortfolio} className="bg-accent hover:bg-secondary text-white font-semibold py-2 px-4 rounded-lg shadow transition">
        Bekijk mijn werk
      </button>
    </section>
  );
}
