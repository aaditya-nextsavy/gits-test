import React from 'react'
import HeroTextBannerImage from '../components/HeroBanner/HeroTextBannerImage'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import PoliciesContent from '../components/PrivacyPolicy/PoliciesContent'

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