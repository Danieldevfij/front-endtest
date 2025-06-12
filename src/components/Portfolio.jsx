import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  { id: 1, title: 'Project 1', image: 'https://via.placeholder.com/400x300', description: 'Beschrijving van project 1', demo: '#', code: '#' },
  { id: 2, title: 'Project 2', image: 'https://via.placeholder.com/400x300', description: 'Beschrijving van project 2', demo: '#', code: '#' },
  { id: 3, title: 'Project 3', image: 'https://via.placeholder.com/400x300', description: 'Beschrijving van project 3', demo: '#', code: '#' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
