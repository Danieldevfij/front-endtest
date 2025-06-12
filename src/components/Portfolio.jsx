import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'React Landing Page',
    screenshot: 'https://via.placeholder.com/600x400',
    description: 'A responsive landing page built with React.',
    tech: ['React', 'Tailwind'],
    demo: '#',
    code: '#',
    images: ['https://via.placeholder.com/800x500', 'https://via.placeholder.com/800x500']
  },
  {
    id: 2,
    title: 'Vue Dashboard',
    screenshot: 'https://via.placeholder.com/600x400',
    description: 'Admin dashboard in Vue.',
    tech: ['Vue'],
    demo: '#',
    code: '#',
    images: ['https://via.placeholder.com/800x500']
  },
];

const filters = ['All', 'React', 'Vue', 'Tailwind'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.tech.includes(active));

  return (
    <section id="portfolio" className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
      <div className="flex justify-center space-x-4 mb-8">
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)} className={`px-3 py-1 rounded-full ${active === f ? 'bg-primary text-light' : 'bg-muted'}`}>{f}</button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <motion.div key={p.id} whileHover={{ scale: 1.05 }} className="bg-light rounded-xl shadow-lg overflow-hidden cursor-pointer" onClick={() => setSelected(p)}>
            <img src={p.screenshot} alt={p.title} className="object-cover h-48 w-full" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-700">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={e => e.stopPropagation()} className="bg-light rounded-xl p-4 max-w-3xl w-full">
            <h3 className="text-xl font-bold mb-4">{selected.title}</h3>
            <Swiper className="mb-4">
              {selected.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt="slide" className="w-full h-60 object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
            <p className="mb-4">{selected.description}</p>
            <div className="flex space-x-4">
              <a href={selected.demo} className="flex items-center text-secondary hover:text-accent"><FaExternalLinkAlt className="mr-1" /> Demo</a>
              <a href={selected.code} className="flex items-center text-secondary hover:text-accent"><FaGithub className="mr-1" /> Code</a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
