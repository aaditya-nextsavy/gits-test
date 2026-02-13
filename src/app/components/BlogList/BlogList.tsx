import Link from "next/link";
import React from "react";
import { CgChevronRight } from "react-icons/cg";

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

type BlogListSectionProps = {
    blogs?: BlogItem[]; // optional (for future API)
};

export default function BlogListSection({ blogs }: BlogListSectionProps) {

    const defaultBlogs: BlogItem[] = [
        {
            id: "1",
            title:
                "How to Save Money on Salesforce Certification Exam Vouchers",
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
                "How to Save Money on Salesforce Certification Exam Vouchers",
            date: "31 May, 2025",
            image: "/assets/images/common-blogs-1.webp",
            slug: "/blogs/save-money-salesforce-vouchers",
            provider: {
                name: "Salesforce",
                logo: "/assets/images/company-certifications.svg",
            },
        },
        {
            id: "3",
            title:
                "How to Save Money on Salesforce Certification Exam Vouchers",
            date: "31 May, 2025",
            image: "/assets/images/common-blogs-1.webp",
            slug: "/blogs/save-money-salesforce-vouchers",
            provider: {
                name: "Salesforce",
                logo: "/assets/images/company-certifications.svg",
            },
        },
         {
            id: "4",
            title:
                "How to Save Money on Salesforce Certification Exam Vouchers",
            date: "31 May, 2025",
            image: "/assets/images/common-blogs-1.webp",
            slug: "/blogs/save-money-salesforce-vouchers",
            provider: {
                name: "Salesforce",
                logo: "/assets/images/company-certifications.svg",
            },
        },
         {
            id: "5",
            title:
                "How to Save Money on Salesforce Certification Exam Vouchers",
            date: "31 May, 2025",
            image: "/assets/images/common-blogs-1.webp",
            slug: "/blogs/save-money-salesforce-vouchers",
            provider: {
                name: "Salesforce",
                logo: "/assets/images/company-certifications.svg",
            },
        },
         {
            id: "6",
            title:
                "How to Save Money on Salesforce Certification Exam Vouchers",
            date: "31 May, 2025",
            image: "/assets/images/common-blogs-1.webp",
            slug: "/blogs/save-money-salesforce-vouchers",
            provider: {
                name: "Salesforce",
                logo: "/assets/images/company-certifications.svg",
            },
        },
         {
            id: "7",
            title:
                "How to Save Money on Salesforce Certification Exam Vouchers",
            date: "31 May, 2025",
            image: "/assets/images/common-blogs-1.webp",
            slug: "/blogs/save-money-salesforce-vouchers",
            provider: {
                name: "Salesforce",
                logo: "/assets/images/company-certifications.svg",
            },
        },
         {
            id: "8",
            title:
                "How to Save Money on Salesforce Certification Exam Vouchers",
            date: "31 May, 2025",
            image: "/assets/images/common-blogs-1.webp",
            slug: "/blogs/save-money-salesforce-vouchers",
            provider: {
                name: "Salesforce",
                logo: "/assets/images/company-certifications.svg",
            },
        },
         {
            id: "9",
            title:
                "How to Save Money on Salesforce Certification Exam Vouchers",
            date: "31 May, 2025",
            image: "/assets/images/common-blogs-1.webp",
            slug: "/blogs/save-money-salesforce-vouchers",
            provider: {
                name: "Salesforce",
                logo: "/assets/images/company-certifications.svg",
            },
        },

    ];

    const blogList = blogs || defaultBlogs; 

    return (
        <section className="blog-list-section-wrapper">
            <div className="container mx-auto">
                <div className="common__blogs__grid">
                    {blogList.map((blog) => (
                        <Link href={blog.slug} key={blog.id} className="common__blog-card">
                            <div className="common__blog-card__image">
                                <img src={blog.image} alt={blog.title} />

                                <div className="common__blog-card__content">
                                    <div className="common__blog-card__provider__wrapper">
                                        <div className="common__blog-card-date">
                                            <time>{blog.date}</time>
                                        </div>

                                        <div className="common__blog-card__provider">
                                            <img
                                                src={blog.provider.logo}
                                                alt={blog.provider.name}
                                            />
                                        </div>
                                    </div>

                                    <h3>{blog.title}</h3>
                                </div>
                            </div>

                            <div className="common__blog-card__link">
                                <div
                                    // href={blog.slug}
                                    className="secondary-btn-link inline-flex justify-center items-center"
                                >
                                    Read Full Blog{" "}
                                    <span className="secondary-link-arrow">
                                        <CgChevronRight />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>



{/* 
                <div className="common__blogs__grid">
                    {blogsData.map((blog) => (
                        <article key={blog.id} className="common__blog-card">
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

                                 
                                </div >


                            </div>
                            <div className='common__blog-card__link'>
                                <a href="#" className="secondary-btn-link inline-flex  justify-center items-center ">
                                    Call our experts <span className='secondary-link-arrow'> <CgChevronRight /></span>
                                </a>
                            </div>


                        </article>
                    ))}
                </div> */}



            </div>
        </section>
    );
}
