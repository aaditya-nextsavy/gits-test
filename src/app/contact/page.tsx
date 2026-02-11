import React from 'react'
import HeroTextBanner1 from '../components/HeroBanner/HeroTextBanner1'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import LocationMap from '../components/LocationMaps/LocationMaps'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: " Contact Us | Global IT Success",
  description: "Learn more about Global IT Success and our certification programs.",
  keywords: ["IT Certification", "Exam Vouchers", "Cisco", "Microsoft"],
};

const page = () => {
    return (
        <>
            <HeroTextBanner1 />
            <GetInTouch />
            <LocationMap/>

        </>
    )
}

export default page