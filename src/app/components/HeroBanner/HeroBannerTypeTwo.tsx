
"use client"
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
    description: string;
    highlight: string;
    subtitle: string;
    stats: HeroStat[];
    actualPrice: string;
    offerPrice: string;
    image: string;
    cmp_img: string,
    ctaText: string;
    ctaLink: string;
};

const heroSlides: HeroSlide[] = [
    {
        id: "1",
        title: "Become A Certified CISCO IT Professional At A Discounted Rate",
        description: "Save on AWS certification with discounted vouchers compare actual and offer prices, boost your cloud career!",
        highlight: "CISCO ",
        subtitle: "IT Professional At A Discounted Rate",
        stats: [
            { label: "10+ Years Leading in Business" },
            { label: "Trusted by 5000+ Customers" },
            { label: "75+ Top Companies As Partners" },
        ],
        actualPrice: "₹42,480",
        offerPrice: "₹36,108",
        cmp_img: "/assets/images/hero-type2-aws.svg",
        image: "/assets/images/herobanner-1.webp",
        ctaText: "Explore CISCO Vouchers",
        ctaLink: "/cisco",
    },
    // {
    //     id: "2",
    //     title: "Advance Your Career With",
    //     description: "Save on AWS certification with discounted vouchers compare actual and offer prices, boost your cloud career!",
    //     highlight: "AWS",
    //     subtitle: "Certification At Best Prices",
    //     stats: [
    //         { label: "Authorized Partner" },
    //         { label: "Instant Voucher Delivery" },
    //         { label: "24/7 Support" },
    //     ],
    //     actualPrice: "₹38,000",
    //     offerPrice: "₹31,500",
    //     image: "/assets/images/herobanner-1.webp",
    //     cmp_img: "/assets/images/hero-type2-aws.svg",
    //     ctaText: "Explore AWS Vouchers",
    //     ctaLink: "/aws",
    // },
];


const HeroBannerTypeTwo = () => {
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
                            <div className="hero__slide international-page">
                                <div className="hero__content">
                                    <div className="icon-wrapper mb-5">
                                        <img alt="company icon" width={54} height={54} className=" faq-divider-line" src={slide.cmp_img} />
                                    </div>
                                    <h1>
                                        {slide.title}
                                    </h1>

                                    <p className="mt-3 md:mt-6 w-full lg:w-2/3 ">{slide.description}</p>

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
    )
}

export default HeroBannerTypeTwo