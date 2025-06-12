import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Naam is verplicht';
    if (!form.email) {
      errs.email = 'E-mail is verplicht';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      errs.email = 'Ongeldig e-mail formaat';
    }
    if (!form.message) errs.message = 'Bericht is verplicht';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      console.log(form);
      alert('Bericht verzonden (mock)');
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-16 bg-neutralLight">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Naam" className="w-full p-2 border rounded-lg" />
            {errors.name && <p className="text-sm text-accent">{errors.name}</p>}
          </div>
          <div>
            <input name="email" value={form.email} onChange={handleChange} placeholder="E-mail" className="w-full p-2 border rounded-lg" />
            {errors.email && <p className="text-sm text-accent">{errors.email}</p>}
          </div>
          <div>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Bericht" className="w-full p-2 border rounded-lg" rows="4" />
            {errors.message && <p className="text-sm text-accent">{errors.message}</p>}
          </div>
          <button className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary transition">
            Verzend
          </button>
        </form>
      </div>
    </section>
  );
}
