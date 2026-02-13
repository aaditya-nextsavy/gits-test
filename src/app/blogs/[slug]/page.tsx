import BlogDetailsLayout from '@/app/components/Blogs/BlogDetailsLayout'
import BlogImageBanner from '@/app/components/Blogs/BlogImageBanner'
import GetInTouch from '@/app/components/GetInTouch/GetInTouch'
import BlogsDetailHeroBanner from '@/app/components/HeroBanner/BlogsDetailHeroBanner'
import React from 'react'
import RelatedBlogs from '../RelatedBlogs'
import BlogsDetails from '@/app/components/Blogs/BlogsDetails'

const page = () => {
    return (
        <>
            <BlogsDetailHeroBanner extendedBG />
            <BlogImageBanner />
            <BlogsDetails/>

            {/* <BlogDetailsLayout/> */}

            {/* <BlogDetailsLayout >

                <section id="section-1">
                    <h3>What is a Salesforce Certification Exam Voucher?</h3>
                    <p>Content here...</p>
                </section>

                <section id="section-2">
                    <h3>How Do Discounted Salesforce Vouchers Work</h3>
                    <p>Content here...</p>
                </section>

            </BlogDetailsLayout> */}
            <RelatedBlogs />
            <GetInTouch />


        </>
    )
}

export default page