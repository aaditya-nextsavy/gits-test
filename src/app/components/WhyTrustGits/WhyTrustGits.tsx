// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';

// const WhyTrustGits = () => {
//   return (
//     <section className="trust-section-wrapper background-primary relative">

//       {/* Background shapes */}
//       <img
//         alt="Background shapes"
//         className="contact-bg-image absolute left-0 top-0 bottom-0 z-0 h-full"
//         src="/assets/images/why-trust-us-left-bg.svg"
//       />

//       <img
//         alt="Background shapes"
//         className="contact-bg-image absolute right-0 top-0 bottom-0 z-0 h-full"
//         src="/assets/images/why-trust-us-right-bg.svg"
//       />

//       <div className="trust-section relative z-1">
//         <h2 className="trust-section-title">

//           Why Thousands of Professionals Trust <br />
//           Global IT Success for Their Certifications
//         </h2>

//         <div className="container mx-auto">
//           <Splide
//             options={{
//               type: 'slide',
//               perPage: 5,
//               gap: '20px',
//               arrows: false,
//               pagination: false,
//               drag: true,
//               breakpoints: {
//                 1280: {
//                   perPage: 5,
//                 },
//                 1024: {
//                   perPage: 3,
//                 },
//                 768: {
//                   perPage: 2,
//                 },
//                 480: {
//                   perPage: 1.2,
//                   gap: '16px',
//                 },
//               },
//             }}
//             className="trust-cards-wrapper"
//           >
//             {/* Card 1 */}
//             <SplideSlide>
//               <div className="trust-card ">
//                 <div className="trust-card-icon-wrapper">
//                   <img src="/assets/images/why-trust-us-card-1.svg" alt="Authorized Provider" />
//                 </div>
//                 <h3 className="trust-card-title">Authorized Cisco Provider</h3>
//                 <p className="trust-card-text">
//                   Authorized IT services, using official Cisco resources and certifications.
//                 </p>
//               </div>
//             </SplideSlide>

//             {/* Card 2 */}
//             <SplideSlide>
//               <div className="trust-card">
//                 <div className="trust-card-icon-wrapper">
//                   <img src="/assets/images/why-trust-us-card-1.svg" alt="Lowest Price" />
//                 </div>
//                 <h3 className="trust-card-title">Lowest Price Guaranteed</h3>
//                 <p className="trust-card-text">
//                   Competitive pricing with the best discounts available.
//                 </p>
//               </div>
//             </SplideSlide>

//             {/* Card 3 */}
//             <SplideSlide>
//               <div className="trust-card">
//                 <div className="trust-card-icon-wrapper">
//                   <img src="/assets/images/why-trust-us-card-1.svg" alt="Support" />
//                 </div>
//                 <h3 className="trust-card-title">24/7 Support & Assistance</h3>
//                 <p className="trust-card-text">
//                   Dedicated support throughout your certification journey.
//                 </p>
//               </div>
//             </SplideSlide>

//             {/* Card 4 */}
//             <SplideSlide>
//               <div className="trust-card">
//                 <div className="trust-card-icon-wrapper">
//                   <img src="/assets/images/why-trust-us-card-1.svg" alt="Cashback" />
//                 </div>
//                 <h3 className="trust-card-title">Corporate Employee Cashback</h3>
//                 <p className="trust-card-text">
//                   Exclusive corporate cashback and partner benefits.
//                 </p>
//               </div>
//             </SplideSlide>

//             {/* Card 5 */}
//             <SplideSlide>
//               <div className="trust-card">
//                 <div className="trust-card-icon-wrapper">
//                   <img src="/assets/images/why-trust-us-card-1.svg" alt="Fast Delivery" />
//                 </div>
//                 <h3 className="trust-card-title">Fast & Secure Delivery</h3>
//                 <p className="trust-card-text">
//                   Secure and fast certification delivery within minutes.
//                 </p>
//               </div>
//             </SplideSlide>
//           </Splide>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyTrustGits;


'use client';

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const trustCards = [
  {
    title: 'Authorized Cisco Provider',
    text: 'At Global IT Success, we offer trusted, authentic discounted CISCO exam vouchers delivering secure certification access with professional support.',
    icon: '/assets/images/why-trust-us-card-1.svg',
  },
  {
    title: 'Lowest Price Guaranteed',
    text: 'At Global IT Success, we offer trusted, authentic discounted CISCO exam vouchers delivering secure certification access with professional support.',
    icon: '/assets/images/why-trust-us-card-1.svg',
  },
  {
    title: '24/7 Support & Assistance',
    text: 'At Global IT Success, we offer trusted, authentic discounted CISCO exam vouchers delivering secure certification access with professional support.',
    icon: '/assets/images/why-trust-us-card-1.svg',
  },
  {
    title: 'Corporate Employee Cashback',
    text: 'At Global IT Success, we offer trusted, authentic discounted CISCO exam vouchers delivering secure certification access with professional support.',
    icon: '/assets/images/why-trust-us-card-1.svg',
  },
  {
    title: 'Fast & Secure Delivery',
    text: 'At Global IT Success, we offer trusted, authentic discounted CISCO exam vouchers delivering secure certification access with professional support.',
    icon: '/assets/images/why-trust-us-card-1.svg',
  },
];


const WhyTrustGits = () => {
  return (
    <section className="trust-v2 relative">

      <img
        alt="Background shapes"
        className="contact-bg-image absolute left-0 top-0 bottom-0 z-0 h-full"
        src="/assets/images/why-trust-us-left-bg.svg"
      />
      <img
        alt="Background shapes"
        className="contact-bg-image absolute right-0 top-0 bottom-0 z-0 h-full"
        src="/assets/images/why-trust-us-right-bg.svg"
      />

      <div className='container mx-auto'>


        <h2 className="trust-v2__title">
          Why Thousands of Professionals Trust <br />
          Global IT Success for Their Certifications
        </h2>

        <Splide
          options={{
            perPage: 5,
            gap: '20px',
            arrows: false,
            pagination: false,
            drag: true,
            breakpoints: {
              1200: { perPage: 4 },
              992: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1.2 },
            },
          }}
          className="trust-v2__slider"
        >
          {trustCards.map((card, index) => (
            <SplideSlide key={index}>
              <div className="trust-v2__card">
                <div className="trust-v2__icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default WhyTrustGits;
