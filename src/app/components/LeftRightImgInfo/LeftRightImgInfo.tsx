type LeftRightItem = {
    title: string
    subtitle: string
    description: string
    image: string
    imageAlt?: string
}

type LeftRightImgInfoProps = {
    items?: LeftRightItem[]
}

const defaultItems: LeftRightItem[] = [
    {
        title: 'ATC Best Newcomer – Global Awards 2024',
        subtitle: 'Excellence in Cybersecurity Education by EC-Council',
        description:
            'A prestigious global recognition honoring D Succeed Learners Private Limited (DSL) for its outstanding contribution to building a skilled cybersecurity workforce, reflecting institutional excellence, visionary leadership, and commitment to global education standards.',
        image: '/assets/images/achivements-ats01.webp',
        imageAlt: 'achievement-1',
    },
    {
        title: 'Best Certification Partner FY24',
        subtitle: 'Enterprise Technology Excellence by Oracle University',
        description:
            'A prestigious global recognition honoring D Succeed Learners Private Limited (DSL) for its outstanding contribution to building a skilled cybersecurity workforce, reflecting institutional excellence, visionary leadership, and commitment to global education standards',
        image: '/assets/images/achivements-02.webp',
        imageAlt: 'achievement-2',
    },
    {
        title: 'Elite+ Partner Recognition',
        subtitle: 'Global Standards & Governance by ISACA',
        description:
            'Elite+ Partner Recognition	ISACA	Global Standards & Governance	This recognition reflects global trust in DSL’s training quality, governance standards, and professional excellence, ensuring learners receive education aligned with the highest international benchmarks.',
        image: '/assets/images/achivements-03.webp',
        imageAlt: 'achievement-3',
    }
]


const LeftRightImgInfo = ({ items = defaultItems }: LeftRightImgInfoProps) => {
    return (
        <section className="left-right-img-info-section">
            <div className="container mx-auto">
                <div className="left-right-wrapper flex flex-col">

                    {items.map((item, index) => (
                        <div className="left-right-info-container-wrapper" key={index}>
                            <div className={`left-right-info-container flex flex-col gap-8 justify-center lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                            >

                                {/* Image */}
                                <div className="p-6 image-content flex-1 flex justify-center">
                                    <img src={item.image} alt={item.imageAlt || item.title} />
                                </div>

                                {/* Content */}
                                <div className="info-content w-full lg:w-1/2">
                                    <div className="content-title">
                                        <h2>{item.title}</h2>
                                    </div>

                                    <div className="content-description">
                                        <h3>{item.subtitle}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                            </div>

                            {/* Divider - except last item */}
                            {index !== items.length - 1 && (
                                <div className="faq-divider py-6 lg:py-8">
                                    <img
                                        alt="divider icon"
                                        className="faq-divider-line"
                                        src="/assets/images/faq-dashed-line.svg"
                                    />
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default LeftRightImgInfo

