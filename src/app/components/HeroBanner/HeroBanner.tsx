"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { CgChevronRight } from "react-icons/cg";
import Image from "next/image";

type HeroStat = {
    label: string;
};

type HeroSlide = {
    id: string;
    title: string;
    highlight: string;
    subtitle: string;
    stats: HeroStat[];
    actualPrice: string;
    offerPrice: string;
    image: string;
    ctaText: string;
    ctaLink: string;
};

const heroSlides: HeroSlide[] = [
    {
        id: "1",
        title: "Become A Certified CISCO IT Professional At A Discounted Rate",
        highlight: "CISCO ",
        subtitle: "IT Professional At A Discounted Rate",
        stats: [
            { label: "10+ Years Leading in Business" },
            { label: "Trusted by 5000+ Customers" },
            { label: "75+ Top Companies As Partners" },
        ],
        actualPrice: "₹42,480",
        offerPrice: "₹36,108",
        image: "/assets/images/herobanner-1.webp",
        ctaText: "Explore CISCO Vouchers",
        ctaLink: "/cisco",
    },
    {
        id: "2",
        title: "Advance Your Career With",
        highlight: "AWS",
        subtitle: "Certification At Best Prices",
        stats: [
            { label: "Authorized Partner" },
            { label: "Instant Voucher Delivery" },
            { label: "24/7 Support" },
        ],
        actualPrice: "₹38,000",
        offerPrice: "₹31,500",
        image: "/assets/images/herobanner-1.webp",
        ctaText: "Explore AWS Vouchers",
        ctaLink: "/aws",
    },
];


const HeroBanner = () => {
    return (
        <section className="hero_banner_wrapper">




            <Splide
                className="hero-bannner-slider"
                options={{
                    type: "loop",
                    autoplay: false,
                    interval: 5000,
                    pauseOnHover: true,
                    arrows: true,
                    pagination: true,
                }}
            >


                {heroSlides.map((slide) => (

                    <SplideSlide key={slide.id}>

                        <img

                            className="contact-bg-image absolute right-0 top-0 bottom-0 z-0 h-full w-2/5 object-cover "
                            src={slide.image} alt={slide.highlight}
                        />
                        <div className="hero-banner-bg-gradient-image"></div>

                        <Image
                            height={100}
                            width={500}
                            className="hero-banner-bg-gradient absolute right-0 top-0 bottom-0 z-0 h-full w-2/5 object-cover "
                            src="/assets/images/hero-bg-gradient.svg" alt={"hero-gradient"}
                        />

                        {/* <div className="hero-banner-bg-gradient">

    </div> */}



                        <div className="container mx-auto">
                            <div className="hero__slide">
                                <div className="hero__content">
                                    <h1>
                                        {slide.title}
                                        {/* <strong>{slide.highlight}</strong>
                                        <br />
                                        {slide.subtitle} */}
                                    </h1>

                                    <ul className="cta-trust-points mt-8 ">
                                        {slide.stats.map((stat, idx) => (
                                            <li key={idx}>{stat.label}</li>
                                        ))}
                                    </ul>


                                    <div className="hero__explore">

                                        <div className="hero__pricing relative ">

                                            
                                               

                                            <div className="hero__actual__price">
                                                <h3>Actual Price</h3>
                                                <p >{slide.actualPrice}</p>
                                                <span>*Including GST</span>
                                            </div>
                                            <div className="hero__pricing-divider">
                                                <Image
                                                    fill
                                                    className="contact-bg-image absolute right-0 top-0 bottom-0 z-0 h-full w-2/5 object-cover "
                                                    src="/assets/images/hero-price-banner-divider.svg" alt={slide.highlight}
                                                />
                                            </div>
                                            <div className="hero__offer__price">
                                                <h3>Offer Price</h3>
                                                <p>{slide.offerPrice}</p>
                                                <span>*Including GST</span>
                                            </div>
                                        </div>



                                        <a href={slide.ctaLink} className="btn-primary whitespace-nowrap">
                                            {slide.ctaText} <span className='inline-button-arrow'> <CgChevronRight className='primary-btn-first-arrow' /> <CgChevronRight className='primary-btn-second-arrow' />  </span>

                                        </a>

                                    </div>



                                </div>

                                <div className="hero__image">
                                    {/* <img src={slide.image} alt={slide.highlight} /> */}
                                </div>
                            </div>
                        </div>

                    </SplideSlide>
                ))}
            </Splide>
        </section>
    );
};

export default HeroBanner;
