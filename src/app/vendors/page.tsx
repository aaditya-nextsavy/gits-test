import React from 'react'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import HeroTextBanner1 from '../components/HeroBanner/HeroTextBanner1'
import CompanyCertifications from '../components/CompanyCertifications/CompanyCertifications'

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