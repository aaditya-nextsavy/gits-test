

import GetInTouch from '../components/GetInTouch/GetInTouch'
import HeroTextBanner1 from '../components/HeroBanner/HeroTextBanner1'
import LeftRightImgInfo from '../components/LeftRightImgInfo/LeftRightImgInfo'
import WhyTrustGits from '../components/WhyTrustGits/WhyTrustGits'

const page = () => {
    return (
        <>
            <HeroTextBanner1
                title="Recognized for Excellence and Trust Built Over Time"
                description="Global IT Success is proud to be recognized for delivering reliable certification solutions and exceptional learner support. Our achievements highlight our commitment to quality, credibility, and career-focused success."
            />
            <LeftRightImgInfo />
            <WhyTrustGits />
            <GetInTouch />

        </>
    )
}

export default page