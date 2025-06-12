import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 'introduction', title: 'Introduction to my workflow', date: '2024-05-01', excerpt: 'How I approach new projects...' },
  { id: 'tailwind-tricks', title: 'Tailwind Tricks', date: '2024-04-20', excerpt: 'Some helpful Tailwind utilities...' }
];

export default function BlogList() {
  return (
    <section className="py-16 container mx-auto px-4" id="blog">
      <h2 className="text-3xl font-bold text-center mb-8">Blog & Resources</h2>
      <div className="space-y-6 max-w-2xl mx-auto">
        {posts.map(p => (
          <div key={p.id} className="p-4 bg-light rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-1">{p.title}</h3>
            <p className="text-sm text-gray-700 mb-2">{p.date}</p>
            <p className="mb-2">{p.excerpt}</p>
            <Link to={`/blog/${p.id}`} className="text-secondary hover:text-accent">Read more</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
