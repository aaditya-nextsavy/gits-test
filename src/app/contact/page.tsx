import React from 'react'
import HeroTextBanner1 from '../components/HeroBanner/HeroTextBanner1'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import LocationMap from '../components/LocationMaps/LocationMaps'

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