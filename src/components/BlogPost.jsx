import React from 'react';
import { useParams, Link } from 'react-router-dom';

const posts = {
  introduction: {
    title: 'Introduction to my workflow',
    content: 'This is a placeholder for the post content.'
  },
  'tailwind-tricks': {
    title: 'Tailwind Tricks',
    content: 'Useful tricks for Tailwind.'
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = posts[id];
  if (!post) return <p>Post not found.</p>;
  return (
    <section className="py-16 container mx-auto px-4 max-w-2xl">
      <Link to="/" className="text-secondary hover:text-accent">← Back</Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </section>
  );
}
