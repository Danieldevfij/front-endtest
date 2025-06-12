import React from 'react';
import { FaPenNib, FaCubes, FaTachometerAlt, FaChalkboardTeacher } from 'react-icons/fa';

const items = [
  { icon: FaPenNib, title: 'UI/UX Design', desc: 'Pixel perfect designs and user flows.' },
  { icon: FaCubes, title: 'Component Development', desc: 'Reusable and maintainable code.' },
  { icon: FaTachometerAlt, title: 'Performance Audits', desc: 'Speed up your applications.' },
  { icon: FaChalkboardTeacher, title: 'Consulting & Workshops', desc: 'Guidance and training for your team.' },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-muted text-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-light p-6 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition">
              <Icon className="text-3xl mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-700 mb-2">{desc}</p>
              <a href="#contact" className="text-secondary hover:text-accent">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
