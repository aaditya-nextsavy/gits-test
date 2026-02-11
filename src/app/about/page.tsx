import GetInTouch from '../components/GetInTouch/GetInTouch'
import CompanyMarquee from '../components/BrandsMarquee/BrandsMarquee'
import CTABannerVoucher from '../components/CTABanner/CTABannerVoucher'
import MissionVision from '../components/MissionVision/MissionVision'
import WhyChooseUsType2 from '../components/WhyChooseUs/WhyChooseUs'
import ImageContentSection from '../components/ImageContentSection/ImageContentSection'
import TrustedPartner from '../components/TrustedPartner/TrustedPartner '
import AboutBannerSection from '../components/AboutBanner/AboutBanner'
import DiscoverCertificates from '../components/DiscoverCertificates/DiscoverCertificates'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: " About Us | Global IT Success",
  description: "Learn more about Global IT Success and our certification programs.",
  keywords: ["IT Certification", "Exam Vouchers", "Cisco", "Microsoft"],
};

const page = () => {
    return (
        <>

            <AboutBannerSection/>
            <CompanyMarquee />
            <MissionVision />
            <CTABannerVoucher />
            <WhyChooseUsType2 />

            <DiscoverCertificates/>
            


            {/* <ImageContentSection
                title="Why Choose Global IT Success for your vouchers?"
                description="As an authorized IT exam voucher reseller and an ISACA and VMware training provider..."
                imageSrc="/assets/images/whychooseusbg.webp"
                imageAlt="people working"
                imageDesktopPosition="left"
            /> */}
            <TrustedPartner/>
            <GetInTouch />


        </>
    )
}

export default page