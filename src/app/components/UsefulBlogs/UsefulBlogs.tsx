import Link from 'next/link';
import React from 'react'
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
  {
    id: "4",
    title:
      "How to Save Money on Salesforce Certification Exam Vouchers: The Complete Guide",
    date: "31 May, 2025",
    image: "/assets/images/common-blogs-1.webp",
    slug: "/blogs/save-money-salesforce-vouchers-2",
    provider: {
      name: "Salesforce",
      logo: "/assets/images/company-certifications.svg",

    },
  },
];


const UsefulBlogs = () => {
  return (
    <section className="common__blogs-wrapper">
      <div className="container mx-auto">
        <div className="common__home-blogs__layout">

          <div className="common__blogs__intro">
            <h2>Resources for Smarter Certification Planning</h2>
            <p>
              Stay informed with articles covering exam preparation,
              certification trends, and important updates from the IT
              certification space.
            </p>
            <Link href="#" className="btn-primary whitespace-nowrap">
              Explore More Blogs <span className='inline-button-arrow'> <CgChevronRight className='primary-btn-first-arrow' /> <CgChevronRight className='primary-btn-second-arrow' />  </span>

            </Link>
          </div>

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

                    {/* <a href={blog.slug}>READ FULL BLOG →</a> */}
                  </div >


                </div>
                <div className='common__blog-card__link'>
                  <a href="#" className="secondary-btn-link inline-flex  justify-center items-center ">
                    Call our experts <span className='secondary-link-arrow'> <CgChevronRight /></span>
                  </a>
                </div>


              </article>
            ))}
          </div>

        </div>
      </div>
    </section>

  )
}

export default UsefulBlogs