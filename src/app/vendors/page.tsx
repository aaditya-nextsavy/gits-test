import React from 'react'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import HeroTextBanner1 from '../components/HeroBanner/HeroTextBanner1'
import CompanyCertifications from '../components/CompanyCertifications/CompanyCertifications'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: " Vendors | Global IT Success",
  description: "Learn more about Global IT Success and our certification programs.",
  keywords: ["IT Certification", "Exam Vouchers", "Cisco", "Microsoft"],
};

const page = () => {
    return (
        <>  
            <HeroTextBanner1 />
            <CompanyCertifications/>
            <GetInTouch />
        </>
    )
}

export default page