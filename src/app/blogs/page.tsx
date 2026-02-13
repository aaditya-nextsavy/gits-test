import React from 'react'
import TopContactBar from '../components/TopContactBar/TopContactBar'
import HeroTextBanner1 from '../components/HeroBanner/HeroTextBanner1'
import BlogList from '../components/BlogList/BlogList'
import GetInTouch from '../components/GetInTouch/GetInTouch'

const page = () => {
    return (
        <>
            <TopContactBar />
            <HeroTextBanner1
                title="Resources for Smarter Certification Decisions"
                description="Read practical content to help you understand certifications, prepare for exams, and make informed choices. Discover insights, tips, and timely updates designed to help IT professionals plan certifications, prepare effectively, and advance their careers with confidence."
                extendedBG
            />
            <BlogList />
            <GetInTouch />

        </>
    )
}

export default page