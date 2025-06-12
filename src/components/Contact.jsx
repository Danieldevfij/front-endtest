import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name required';
    if (!form.email) errs.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message) errs.message = 'Message required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      console.log(form);
      alert('Message sent! (mock)');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Hire Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-2 rounded border" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          {errors.name && <p className="text-sm text-accent">{errors.name}</p>}
          <input className="w-full p-2 rounded border" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          {errors.email && <p className="text-sm text-accent">{errors.email}</p>}
          <input className="w-full p-2 rounded border" name="phone" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} />
          <select className="w-full p-2 rounded border" name="service" value={form.service} onChange={handleChange}>
            <option value="">Service type</option>
            <option value="design">UI/UX Design</option>
            <option value="components">Component Development</option>
            <option value="audit">Performance Audit</option>
            <option value="consulting">Consulting</option>
          </select>
          <textarea className="w-full p-2 rounded border" rows="4" name="message" placeholder="Message" value={form.message} onChange={handleChange} />
          {errors.message && <p className="text-sm text-accent">{errors.message}</p>}
          <button className="bg-primary text-light font-semibold py-2 px-4 rounded-xl hover:bg-secondary transition" type="submit">Send</button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-secondary hover:text-accent">Or schedule a call</a>
        </div>
      </div>
    </section>
  );
}
