import Image from 'next/image'
import React from 'react'
import { CgChevronRight } from "react-icons/cg";


const CTABannerContactUs = () => {
    return (
        <section className="cta-banner section-margin">
            <div className='container mx-auto'>
                <div className="cta-inner">

                    {/* Left avatars */}
                    <div className="cta-avatars w-2/5">

                        <Image
                            src={`/assets/images/cta-1.webp`}
                            width={150}
                            height={120}
                            alt="Avatars-Expert"
                            className="cta-avatar"
                        />

                    </div>

                    {/* Right content */}
                    <div className="cta-content flex-1">
                        <p>
                            Global IT Success is an authorized reseller of discounted IT
                            certification exam vouchers, trusted by professionals, enterprises,
                            training institutes, test centers and trainers across the globe.
                        </p>

                        <div className="cta-actions">
                            <a href="https://wa.me/XXXXXXXXX" className="btn-primary whitespace-nowrap">
                                Connect via WhatsApp <span className='inline-button-arrow'> <CgChevronRight className='primary-btn-first-arrow' /> <CgChevronRight className='primary-btn-second-arrow' />  </span>

                            </a>

                            <a href="tel:+91XXXXXXXXXX" className="secondary-btn-link inline-flex  justify-center items-center ">
                                Call our experts <span className='secondary-link-arrow'> <CgChevronRight /></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default CTABannerContactUs