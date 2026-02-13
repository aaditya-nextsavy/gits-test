import Link from "next/link";
import { CgChevronRight } from 'react-icons/cg';

export type BlogProvider = {
    name: string;
    logo: string;
};

export type BlogItem = {
    id: string;
    title: string;
    date: string;
    image: string;
    provider: BlogProvider;
    slug: string;
};

export const blogsData: BlogItem[] = [
    {
        id: "1",
        title:
            "How to Save Money on Salesforce Certification Exam Vouchers: The Complete Guide",
        date: "31 May, 2025",
        image: "/assets/images/common-blogs-1.webp",
        slug: "/blogs/save-money-salesforce-vouchers",
        provider: {
            name: "Salesforce",
            logo: "/assets/images/company-certifications.svg",
        },
    },
    {
        id: "2",
        title:
            "Where to Purchase Authorized Discounted EC-Council Vouchers Without Falling for Scams",
        date: "31 March, 2025",
        image: "/assets/images/common-blogs-1.webp",
        slug: "/blogs/ec-council-vouchers-guide",
        provider: {
            name: "EC-Council",
            logo: "/assets/images/company-certifications.svg",

        },
    },
    {
        id: "3",
        title:
            "Where to Purchase Authorized Discounted EC-Council Vouchers Without Falling for Scams",
        date: "31 March, 2025",
        image: "/assets/images/common-blogs-1.webp",
        slug: "/blogs/ec-council-vouchers-guide-2",
        provider: {
            name: "EC-Council",
            logo: "/assets/images/company-certifications.svg",

        },
    },

];

const RelatedBlogs = () => {
    return (
        <section className='related-blogs-wrapper'>
            <div className="container mx-auto">
                <div className='related-blogs-content flex flex-col gap-7'>
                    <div className="related-blogs-title flex justify-center">
                        <h2 >Insights You May Find Useful</h2>
                    </div>

                    <div className='related-blogs-cards'>
                        <div className="common__blogs__grid">
                            {blogsData.map((blog) => (
                                <Link href="#" key={blog.id} className="common__blog-card">
                                    <div className="common__blog-card__image">
                                        <img src={blog.image} alt={blog.title} />


                                        <div className="common__blog-card__content">
                                            <div className='common__blog-card__provider__wrapper' >
                                                <div className='common__blog-card-date'> <time>{blog.date}</time></div>
                                                <div className="common__blog-card__provider">

                                                    <img

                                                        src={blog.provider.logo}
                                                        alt={blog.provider.name}
                                                    />

                                                </div>
                                            </div>
                                            <h3>{blog.title}</h3>

                                            {/* <a href={blog.slug}>READ FULL BLOG →</a> */}
                                        </div >


                                    </div>
                                    <div className='common__blog-card__link'>
                                        <div className="secondary-btn-link inline-flex  justify-center items-center ">
                                            Call our experts <span className='secondary-link-arrow'> <CgChevronRight /></span>
                                        </div>
                                    </div>


                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedBlogs