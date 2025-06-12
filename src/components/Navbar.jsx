import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-10 bg-dark text-light shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <Link to="/" className="font-bold text-xl">Daniel Fijma</Link>
        <div className="space-x-4 hidden md:block">
          <a href="#portfolio" className="hover:text-secondary">Portfolio</a>
          <a href="#services" className="hover:text-secondary">Services</a>
          <a href="#contact" className="hover:text-secondary">Contact</a>
        </div>
      </div>
    </nav>
  );
}
