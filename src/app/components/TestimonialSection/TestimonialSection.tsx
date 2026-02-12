'use client';

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { GoStarFill } from "react-icons/go";
import { BsQuote } from "react-icons/bs";


type Testimonial = {
  id: number;
  name: string;
  initial: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Patel',
    initial: 'R',
    rating: 5,
    text:
      'I recently booked my CompTIA Security+ exam through Global IT Success and had an amazing experience. The listed price was $405, but I got the voucher for only ₹16,000, which was a great deal. Special thanks to Vaishali, who guided me through the process and ensured everything was smooth and hassle-free.',
  },
  {
    id: 2,
    name: 'Gayatri Pathak',
    initial: 'G',
    rating: 5,
    text:
      'I purchased an AWS exam voucher from Global IT Success, and the lady who assisted me was incredibly helpful and professional. She guided me smoothly through the process and made everything easy. Highly recommend!',
  },
  {
    id: 3,
    name: 'Chetan Patel',
    initial: 'C',
    rating: 5,
    text:
      'I booked my CompTIA Security+ exams through them. Great discount when buying from them. A great thanks to Vaishali also for helping me out. At first when I saw the website it kind of felt sketchy but it’s 100% legit.',
  },
  {
    id: 4,
    name: 'Jyotika K',
    initial: 'J',
    rating: 5,
    text:
      'Have applied for CompTIA A+ using Global IT Success vouchers an got discounted and its a trustworthy website. I highly recommend this Indian re-seller for all your IT certifications.',
  },
  {
    id: 5,
    name: 'Jyotika K',
    initial: 'J',
    rating: 5,
    text:
      'Have applied for CompTIA A+ using Global IT Success vouchers an got discounted and its a trustworthy website. I highly recommend this Indian re-seller for all your IT certifications.',
  },
  {
    id: 6,
    name: 'Jyotika K',
    initial: 'J',
    rating: 5,
    text:
      'Have applied for CompTIA A+ using Global IT Success vouchers an got discounted and its a trustworthy website. I highly recommend this Indian re-seller for all your IT certifications.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section-wrapper">
      <div className="container mx-auto">

        {/* HEADER */}
        <div className="testimonials__header">
          <div className="testimonials__title">
            <h2>See How We’ve Helped Professionals Get Certified</h2>
            <p>
              Find quick answers to the most common questions about exam
              vouchers, validity, usage, return, refunds and support, so you
              can move forward with confidence.
            </p>
          </div>

          <div className="testimonials__rating">
            <div className="rating-score">
              <span className="google-logo"><img width={92} height={92} src='/assets/images/testimonials-google-icon.svg' alt="google" /></span>
              <strong >4.9</strong>
              <span className="star"><GoStarFill /></span>
            </div>

            <span className="rating-count">240+ Google Customer Ratings</span>
            <a href="#" className="rating-link">
              Read more Google reviews →
            </a>
          </div>
        </div>


        <div className="faq-divider">
          <img alt="divider icon" className="faq-divider-question" src="/assets/images/faq-dashed-line.svg" />
        </div>


      </div>


      {/* SLIDER */}
      <Splide
        options={{
          perPage: 4,
          loop: true,
          gap: '24px',
          arrows: true,
          center: false,
          pagination: true,
          drag: true,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },

        }}
        className="testimonials__slider marquee-edge-shadow"
      >


        {testimonials.map((item) => (
          <SplideSlide key={item.id}>
            <div className="testimonial-card">
              <span className="quote"><BsQuote /></span>
              <span className="quote-inner"><BsQuote /></span>

              <p className="testimonial-text">
                {item.text}
              </p>

              <div className="testimonial-footer">
                <div className="avatar">{item.initial}</div>
                <div>
                  <strong>{item.name}</strong>
                  <div className="stars"> 
                    {'★'.repeat(item.rating)}

                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

    </section>
  );
};

export default TestimonialsSection;

