import CompanyMarquee from "./components/BrandsMarquee/BrandsMarquee";
import CompanyCertifications from "./components/CompanyCertifications/CompanyCertifications";
import CompanyCertificationsWithSlider from "./components/CompanyCertifications/CompanyCertificationWithSlider";
import CTABannerContactUs from "./components/CTABanner/CTABannerContactUs";
import CTABannerVoucher from "./components/CTABanner/CTABannerVoucher";
import FAQs from "./components/FAQs/FAQs";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import TestimonialsSection from "./components/TestimonialSection/TestimonialSection";
import TopContactBar from "./components/TopContactBar/TopContactBar";
import UsefulBlogs from "./components/UsefulBlogs/UsefulBlogs";
import WhyTrustGits from "./components/WhyTrustGits/WhyTrustGits";

export default function Home() {
  return (

    <>



      <TopContactBar />
      <HeroBanner />
      <CompanyCertificationsWithSlider />



      <CompanyMarquee edgeShadow />
      <CTABannerContactUs />

      <WhyTrustGits />
      <TestimonialsSection />
      <FAQs />
      <GetInTouch />
      <UsefulBlogs />
      <CTABannerVoucher />

    </>
  );
}
