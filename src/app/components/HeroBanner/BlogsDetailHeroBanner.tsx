type BlogsDetailHeroBannerProps = {
    title?: string;
    description?: string;
    companyName?: string;
    authorName?: string;
    date?: string;
    extendedBG?: boolean;
};

const defaultHeroData = {
    title:
        "How to Save Money on Salesforce Certification Exam Vouchers: The Complete Guide",
    description:
        "At Global IT Success, your certification goals matter to us. Reach out for support related to exam vouchers, certifications, or order inquiries. Our team is dedicated to making your experience smooth and stress-free.",
    companyName: "Salesforce",
    authorName: "Team GITS",
    date: "31 May, 2025",
};

export default function BlogsDetailHeroBanner({
    title,
    description,
    companyName,
    authorName,
    date,
    extendedBG = false,
}: BlogsDetailHeroBannerProps) {
    const heroTitle = title ?? defaultHeroData.title;
    const heroDescription = description ?? defaultHeroData.description;
    const blogCompany = companyName ?? defaultHeroData.companyName;
    const blogAuthor = authorName ?? defaultHeroData.authorName;
    const blogDate = date ?? defaultHeroData.date;

    return (
        <section
            className={`text-hero-banner-wrapper-type-2${extendedBG ? " large-btm-padding" : ""
                }`}
        >
            {extendedBG && <div className="section-extended-background" />}

            <div className="container mx-auto">
                <div className="blogs-text-hero-banner-content flex flex-col justify-center text-center gap-8">
                    <h1>{heroTitle}</h1>

                    {/* Optional description */}
                    {/* {heroDescription && <p>{heroDescription}</p>} */}

                    <div className="blog-banner-details flex flex-row gap-6 justify-center items-center">

                        <div className="blog-deatils-banner-item-company">
                            {blogCompany}
                        </div>

                        <img
                            src="/assets/images/gray-vertical-dashed-line.svg"
                            alt="divider"
                        />

                        <div className="blog-deatils-banner-item flex items-center gap-2">
                            <img
                                height={16}
                                width={16}
                                src="/assets/images/solar_pen-2-bold.svg"
                                alt="author icon"
                            />
                            By {blogAuthor}
                        </div>

                        <img
                            src="/assets/images/gray-vertical-dashed-line.svg"
                            alt="divider"
                        />

                        <div className="blog-deatils-banner-item flex items-center gap-2">
                            <img
                                height={16}
                                width={16}
                                src="/assets/images/date-icon.svg"
                                alt="date icon"
                            />
                            {blogDate}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
