import React from 'react';
import profile from '../assets/profile-placeholder.jpg';

export default function About() {
  return (
    <section id="about" className="py-16 bg-light text-dark">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <img src={profile} alt="Profile" className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-8 object-cover" />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">Passionate front-end developer with a focus on performance and accessibility.</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Expertise: HTML5, CSS3, JavaScript (ES6+), React, Vue, Tailwind, Next.js</li>
            <li>Performance, accessibility (WCAG AA/AAA), mobile-first design</li>
            <li>3–5 years freelance/agency experience, smart UI components and design systems</li>
          </ul>
          <a href="/resume.pdf" target="_blank" className="bg-secondary text-dark py-2 px-4 rounded-xl shadow hover:bg-accent transition">Download Résumé</a>
        </div>
      </div>
    </section>
  );
}
