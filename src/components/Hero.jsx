import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary to-gray relative">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-light mb-4"
      >
        Daniel Fijma — Front-end Developer
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-light mb-8">
        I build delightful, accessible web experiences
      </motion.p>
      <div className="space-x-4 mb-8">
        <button onClick={() => scrollTo('portfolio')} className="bg-secondary text-dark font-semibold py-2 px-4 rounded-xl shadow hover:bg-accent transition">
          View My Work
        </button>
        <button onClick={() => scrollTo('contact')} className="bg-accent text-light font-semibold py-2 px-4 rounded-xl shadow hover:bg-secondary transition">
          Hire Me
        </button>
      </div>
      <div className="flex space-x-4 text-2xl text-light">
        <a href="https://github.com" aria-label="GitHub" className="hover:text-secondary"><FaGithub /></a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-secondary"><FaLinkedin /></a>
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-secondary"><FaTwitter /></a>
      </div>
    </section>
  );
}
