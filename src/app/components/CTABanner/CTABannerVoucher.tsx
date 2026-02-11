import { CgChevronRight } from "react-icons/cg";

const CTABannerVoucher = () => {
    return (
        <section className="cta-banner-voucher-wrapper relative overflow-hidden ">
            {/* Decorative blocks – left */}

            <img
                alt="Background shapes"
                className="contact-bg-image absolute left-0 top-0 bottom-0 z-0 h-full"
                src="/assets/images/cta-voucher-left.svg"
            />


            {/* Decorative blocks – right */}


            <img
                alt="Background shapes"
                className="contact-bg-image absolute right-0 top-0 bottom-0 z-0 h-full"
                src="/assets/images/cta-voucher-right.svg"
            />

            {/* Decorative blocks – phone */}


            <img
                alt="Background shapes"
                className="contact-bg-image phone-bg absolute left-0 top-0 bottom-0 z-0 h-full"
                src="/assets/images/cta-voucher-phone.svg"
            />


            <div className="cta-banner-voucher-info relative z-10 mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-medium text-[#243A8F]">
                    Not sure which exam voucher you need?
                    <br />
                    Talk to our experts.
                </h2>



                {/* Trust points */}
                <div className="mt-8">
                    <ul className="cta-trust-points">
                        <li><strong>10+ Years </strong> Leading in Business</li>
                        <li>Trusted by <strong> 5000+ Customers</strong> </li>
                        <li><strong> 75+ Top </strong> Companies as Partners</li>
                    </ul>


                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <a href="https://wa.me/XXXXXXXXX" className="btn-primary whitespace-nowrap">
                        Connect via WhatsApp <span className='inline-button-arrow'> <CgChevronRight className='primary-btn-first-arrow' /> <CgChevronRight className='primary-btn-second-arrow' />  </span>

                    </a>
                </div>
            </div>
        </section>

    )
}

export default CTABannerVoucher