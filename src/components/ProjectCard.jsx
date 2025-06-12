import React, { useState } from 'react';
import Modal from './Modal';

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4 bg-neutralLight">
          <h3 className="font-semibold">{project.title}</h3>
        </div>
      </div>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          <div className="flex space-x-4">
            <a href={project.demo} className="text-secondary hover:text-accent">Live Demo</a>
            <a href={project.code} className="text-secondary hover:text-accent">Code</a>
          </div>
        </Modal>
      )}
    </>
  );
}
