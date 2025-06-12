import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Product Owner',
    quote: 'Daniel delivered outstanding work on our web app.',
    avatar: 'https://via.placeholder.com/100'
  },
  {
    name: 'John Smith',
    role: 'CTO',
    quote: 'Great attention to detail and accessibility.',
    avatar: 'https://via.placeholder.com/100'
  },
  {
    name: 'Alice Johnson',
    role: 'Designer',
    quote: 'Collaborating with Daniel was smooth and efficient.',
    avatar: 'https://via.placeholder.com/100'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-light">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <Swiper
        className="max-w-2xl mx-auto"
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name} className="p-6 bg-muted rounded-xl shadow">
            <div className="flex flex-col items-center text-center">
              <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4" />
              <p className="italic mb-2">\"{t.quote}\"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-700">{t.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
