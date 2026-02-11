import React from 'react'
import HeroTextBannerImage from '../components/HeroBanner/HeroTextBannerImage'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import PoliciesContent from '../components/PrivacyPolicy/PoliciesContent'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: " Terms and Conditions | Global IT Success",
  description: "Learn more about Global IT Success and our certification programs.",
  keywords: ["IT Certification", "Exam Vouchers", "Cisco", "Microsoft"],
};

const page = () => {
    return (
        <>
            <HeroTextBannerImage />
            <PoliciesContent />
            <GetInTouch />
        </>
    )
}

export default page