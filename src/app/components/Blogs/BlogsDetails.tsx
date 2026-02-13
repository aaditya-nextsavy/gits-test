"use client";

import { useState, useEffect } from "react";


import { CgChevronRight } from 'react-icons/cg';
import { FaChevronDown } from "react-icons/fa";
import { BsShare } from "react-icons/bs";

const BlogsDetails = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeSection, setActiveSection] = useState<string>("section-1");


    useEffect(() => {
        const sections = document.querySelectorAll(".blog-details-content-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);


    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <section className='blog-details-wrapper'>

            <div className="container mx-auto">
                <div className='blog-details-cta-content-wrapper'>
                    <div className='blog-details-nav-cta-wrapper'>
                        <div className='blog-details-nav-cta'>


                            <div className={`blog-content-progressbar ${isOpen?"open":""}`}>
                                {/* <button className='blog-progress-accordian'>
                                    Table of Content
                                    <span><FaChevronDown /></span>
                                </button> */}
                                <button
                                    className='blog-progress-accordian'
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    Table of Content
                                    <span className={`flex items-center chevron-icon ${isOpen ? "rotate" : ""}`}><FaChevronDown /></span>
                                </button>

                                {/* <div className="faq-divider">
                                    <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line-gray.svg" />
                                </div> */}

                                {/* 
                                {isOpen && (
                                    <>
                                        <div className="faq-divider">
                                            <img
                                                alt="divider icon"
                                                className="faq-divider-line"
                                                src="/assets/images/faq-dashed-line-gray.svg"
                                            />
                                        </div>



                                        <ul className='blog-progress-section-list'>

                                            <li
                                                className={`bullet-point ${activeSection === "section-1"
                                                    ? "white-bullet"
                                                    : "waiting"
                                                    }`}
                                                onClick={() =>
                                                    document.getElementById("section-1")?.scrollIntoView({ behavior: "smooth" })
                                                }
                                            >
                                                section 1
                                            </li>

                                            <li
                                                className={`bullet-point ${activeSection === "section-2"
                                                    ? "white-bullet"
                                                    : "waiting"
                                                    }`}
                                                onClick={() =>
                                                    document.getElementById("section-2")?.scrollIntoView({ behavior: "smooth" })
                                                }
                                            >
                                                section 2
                                            </li>

                                            <li
                                                className={`bullet-point ${activeSection === "section-3"
                                                    ? "white-bullet"
                                                    : "waiting"
                                                    }`}
                                                onClick={() =>
                                                    document.getElementById("section-3")?.scrollIntoView({ behavior: "smooth" })
                                                }
                                            >
                                                section 3
                                            </li>

                                        </ul>
                                    </>

                                )} */}



                                <div className={`accordion-body relative ${isOpen ? "open" : ""}`}>
                                    <div className="faq-divider"> <img
                                        alt="divider icon"
                                        className="faq-divider-line"
                                        src="/assets/images/faq-dashed-line-gray.svg"
                                    /></div>
                                    <ul className='blog-progress-section-list'>
                                        <li
                                            className={`bullet-point ${activeSection === "section-1"
                                                ? "white-bullet"
                                                : "waiting"
                                                }`}
                                            onClick={() =>
                                                document.getElementById("section-1")?.scrollIntoView({ behavior: "smooth" })
                                            }
                                        >
                                            section 1
                                        </li>

                                        <li
                                            className={`bullet-point ${activeSection === "section-2"
                                                ? "white-bullet"
                                                : "waiting"
                                                }`}
                                            onClick={() =>
                                                document.getElementById("section-2")?.scrollIntoView({ behavior: "smooth" })
                                            }
                                        >
                                            section 2
                                        </li>

                                        <li
                                            className={`bullet-point ${activeSection === "section-3"
                                                ? "white-bullet"
                                                : "waiting"
                                                }`}
                                            onClick={() =>
                                                document.getElementById("section-3")?.scrollIntoView({ behavior: "smooth" })
                                            }
                                        >
                                            section 3
                                        </li>
                                    </ul>
                                </div>



                            </div>

                            <div className='blog-cta-banner'>


                                <img
                                    alt="Background shapes"
                                    className="contact-bg-image absolute right-0 top-0 bottom-0 z-0 h-full opacity-50"
                                    src="/assets/images/cta-voucher-right.svg"
                                />

                                <h3>Found the article insightful ?</h3>
                                <p>Get in touch with us or share it with those who may benefit.</p>
                                <div className='cta-button-wrap'>
                                    <a href="https://wa.me/XXXXXXXXX" className="btn-primary whitespace-nowrap">
                                        Connect via WhatsApp <span className='inline-button-arrow'> <CgChevronRight className='primary-btn-first-arrow' /> <CgChevronRight className='primary-btn-second-arrow' />  </span>

                                    </a>

                                    <button className='cta-copy-btn' onClick={handleShare}>
                                        <BsShare />
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <main className='blog-details-content-wrapper'>
                        <section id="section-1" className='blog-details-content-section'>
                            <p>
                                Are you tired of watching your career opportunities slip by because of the high exam fees? Salesforce certification serves as a testament to one’s mastery of IT and cloud computing. Whether you are climbing a corporate ladder or starting a new career path, Salesforce certification offers access to higher-paying jobs, greater job security, and exciting career advancements. However, the exorbitant Salesforce exam fee has stopped many people from validating their skills and achieving career goals.

                                Here’s the Good News! You can ace the Salesforce certification exam without stretching your wallet. This blog will take you through the best strategies to cut costs and save more while you invest in your career advancement, so you can focus on your preparation without having to worry about the exorbitant exam fees.
                            </p>

                            <h3>
                                What is a Salesforce Certification Exam Voucher?
                            </h3>

                            <p>
                                A discounted Salesforce exam voucher lets you book the same exam at a reduced price with smarter budgeting. You buy these vouchers ahead of time at a lower cost than the standard fee to book your exam. Salesforce offers a range of certifications, including administrator, developer, and in areas such as marketing and data architecture. Salesforce exam vouchers are a unique code sent to your registered email after successful payment. Voucher validity is limited. Therefore, you must use it within the valid period.

                                Booking your Salesforce exam with a discount code can save you time and make your registration seamless because you don’t have to go through the unnecessary hassle of different payment options.
                            </p>
                        </section>

                        <div className="faq-divider">
                            <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                        </div>


                        <section id="section-2" className='blog-details-content-section'>
                            <h3>
                                How Do Discounted Salesforce Vouchers Work
                            </h3>

                            <p>
                                Discounted Salesforce vouchers offer a cost-effective way to validate your expertise. Offered at a lower price than the standard fee, discounted Salesforce exam vouchers can be purchased from authorized voucher resellers or partner-led promotions.

                                Here’s how discounted Salesforce vouchers generally work:
                            </p>

                        </section>


                        <div className="faq-divider">
                            <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                        </div>

                        <section id="section-3" className='blog-details-content-section'>
                            <h3>
                                How Do Discounted Salesforce Vouchers Work
                            </h3>

                            <p>
                                Discounted Salesforce vouchers offer a cost-effective way to validate your expertise. Offered at a lower price than the standard fee, discounted Salesforce exam vouchers can be purchased from authorized voucher resellers or partner-led promotions.

                                Here’s how discounted Salesforce vouchers generally work:
                            </p>

                        </section>

                        <div className="faq-divider">
                            <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                        </div>




                    </main>
                </div>
            </div>

        </section>
    )
}


export default BlogsDetails