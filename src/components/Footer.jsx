import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 bg-dark text-light text-center">
      <p className="mb-2">&copy; {new Date().getFullYear()} Daniel Fijma</p>
      <div className="space-x-4 text-2xl">
        <a href="#" aria-label="GitHub" className="hover:text-secondary"><FaGithub /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-secondary"><FaLinkedin /></a>
        <a href="#" aria-label="Twitter" className="hover:text-secondary"><FaTwitter /></a>
      </div>
    </footer>
  );
}
