import { CgChevronRight } from "react-icons/cg";

const CTABulkVouchers = () => {
    return (
        <section className='bulk-voucher-cta-wrapper relative'>

            <img
                alt="Background shapes"
                className="contact-bg-image absolute left-0 top-0 bottom-0 z-0 h-full"
                src="/assets/images/bulk-exam-voucher-cta-left.svg"
            />


            {/* Decorative blocks – right */}


            <img
                alt="Background shapes"
                className="contact-bg-image absolute right-0 top-0 bottom-0 z-0 h-full"
                src="/assets/images/bulk-exam-voucher-cta-right.svg"
            />

            {/* Decorative blocks – phone */}

            <img
                alt="Background shapes"
                className="contact-bg-image phone-bg absolute left-0 top-0 bottom-0 z-0 h-full"
                src="/assets/images/cta-voucher-phone.svg"
            />


            <div className="container mx-auto">
                <div className='bulk-voucher-cta flex flex-col md:flex-row gap-6 md:justify-between items-center'>
                    <div className='bulk-voucher-cta-title  items-center justify-center flex flex-col md:flex-row gap-6 md:gap-4' >
                        <div className="icon-wrapper">
                            <img alt="divider icon" width={54} height={54} className="rounded-full faq-divider-line" src="/assets/images/icon-vouchers.webp" />
                        </div>
                        <h3>
                            Get <b> additional discount </b> on buying <b>bulk exam vouchers </b> at Global IT Success!
                        </h3>
                    </div>
                    <div className="flex justify-center ">
                        <a href="#" className="btn-primary whitespace-nowrap">
                            Inquire Now <span className='inline-button-arrow'> <CgChevronRight className='primary-btn-first-arrow' /> <CgChevronRight className='primary-btn-second-arrow' />  </span>

                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTABulkVouchers