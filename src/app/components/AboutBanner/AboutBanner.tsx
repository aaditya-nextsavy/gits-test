import React from 'react'

const heroData = {
    title: 'At Global IT Success, we simplify the journey toward professional IT certifications.',
    description:
        'Global IT Success, a trusted subsidiary of D Succeed Learners Pvt Ltd is committed to nurturing IT professionals with top-notch IT training and providing authenticated discounted IT certification exam vouchers at unbeatable prices.  With a proven record of delivering top-notch IT training and discounted exam vouchers for top-tier IT certifications, we have the trust of customers worldwide.',
}

const AboutBannerSection = () => {
    return (
        <>

            <section className="about-banner-wrapper relative">


                <img
                    alt="Background shapes"
                    className="about-bg-gradient absolute left-0 top-0 bottom-0 right-0 z-0 w-full h-full"
                    src="/assets/images/about-hero-gradient.svg"
                />


                <img
                    alt="Background shapes"
                    className="about-hero-img absolute left-0 bottom-0 right-0  w-full h-full"
                    src="/assets/images/hero-images.webp"
                />
                <img
                    alt="Background shapes"
                    className="about-hero-person  absolute left-0 bottom-0 right-0  object-fit"
                    src="/assets/images/about-hero.svg"
                />
                
                <div className="about-hero-content-wrapper">
                    <div className="container mx-auto">
                        <div className="about-hero-content">
                            <h1>{heroData.title}</h1>
                            <p>{heroData.description}</p>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}

export default AboutBannerSection;  