import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-16 bg-neutralLight text-neutralDark">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-32 h-32 bg-neutralDark rounded-full mx-auto md:mx-0 mb-6 md:mb-0" />
        <div className="md:ml-8">
          <h2 className="text-3xl font-bold mb-4">Over mij</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind</li>
          </ul>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn" className="text-2xl hover:text-accent"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub" className="text-2xl hover:text-accent"><FaGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
