import React from 'react'
import CompanyCertificationsWithSlider from '../components/CompanyCertifications/CompanyCertificationWithSlider'
import FaqSection from '../components/FAQs/FAQs'
import CTABannerVoucher from '../components/CTABanner/CTABannerVoucher'
import WhyTrustGits from '../components/WhyTrustGits/WhyTrustGits'
import TestimonialsSection from '../components/TestimonialSection/TestimonialSection'
import CTABulkVouchers from '../components/CTABulkVouchers/CTABulkVouchers'
import HeroBannerTypeTwo from '../components/HeroBanner/HeroBannerTypeTwo'

const page = () => {
    return (
        <>
            <HeroBannerTypeTwo />
            <CompanyCertificationsWithSlider />
            <WhyTrustGits />
            <FaqSection />
            <CTABannerVoucher />
            <TestimonialsSection />
            <CTABulkVouchers/>


        </>
    )
}

export default page