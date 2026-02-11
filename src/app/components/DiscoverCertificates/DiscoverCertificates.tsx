import { CgChevronRight } from "react-icons/cg";
import CertificateCard from "../CertificateCard/CertificateCard";
// import CertificateCard from ''
type CompanyCard = {
  id: number
  company: string
  logo: string
  link: string
  className: string
}

const certificateCards: CompanyCard[] = [
  {
    id: 1,
    company: 'AWS',
    logo: '/assets/images/c-card-aws.webp',
    link: '/aws-certifications',
    className: 'c-card-1',
  },
  {
    id: 2,
    company: 'Cisco',
    logo: '/assets/images/c-card-aws.webp',
    link: '/cisco-certifications',
    className: 'c-card-2',
  },
  {
    id: 3,
    company: 'CompTIA',
    logo: '/assets/images/c-card-aws.webp',
    link: '/comptia-certifications',
    className: 'c-card-3',
  },
]



const DiscoverCertificates = () => {
  return (
    <section className="discover-certificates-wrapper">

      <img
        alt="Background shapes"
        className="contact-bg-image absolute left-0 top-0 bottom-0 z-0 h-full"
        src="/assets/images/why-trust-us-left-bg.svg"
      />
      <img
        alt="Background shapes"
        className="contact-bg-image absolute right-0 top-0 bottom-0 z-0 h-full"
        src="/assets/images/why-trust-us-right-bg.svg"
      />

      <div className="container mx-auto">
        <div className="discover-content gap-8 xl:gap-0 flex flex-col xl:flex-row relative">
          <div className="discover-info  w-full xl:w-2/3 flex flex-col justify-center gap-8 md:gap-11">
            <ul className="cta-trust-points ">
              <li><strong>10+ Years </strong> Leading in Business</li>
              <li>Trusted by <strong> 5000+ Customers</strong> </li>
              <li><strong> 75+ Top </strong> Companies as Partners</li>
            </ul>



            <h2>
              Discover the most popular certification deals trusted by IT professionals worldwide. Save more on exam vouchers for the certifications shaping today’s IT careers.
            </h2>
          </div>
          <div className="discover-cards-wrapper w-full xl:w-1/3 flex justify-center xl:justify-end">
            {/* 
                    <div className="discover-cards-pocket">
                        <div className="pocket-blur-layer"></div>
                        <img className="pocket-certificate-cards c-card-1" src="/assets/images/pocket-cards-1.webp" alt="certificate-cards" width={208} height={244} />
                        <img className="pocket-certificate-cards c-card-2" src="/assets/images/pocket-cards-2.webp" alt="certificate-cards" width={208} height={244} />
                        <img className="pocket-certificate-cards c-card-3" src="/assets/images/pocket-cards-3.webp" alt="certificate-cards" width={208} height={244} />

                        <img className="pocket-certificate-cards-cover" src="/assets/images/pocket-cards-cover.svg" alt="certificate-cards"width={385} height={272} />

                        <div className="card-offers">
                            <h3 className="bullet-point-blue">Trending Offers</h3>
                            <p>Check out trending offers from our vendors. Get an additional discount on buying exam vouchers in bulk at Global IT Success.</p>
                        </div>


                            <a href="#" className="btn-primary whitespace-nowrap">
                               Explore Upto 50% Off Offers <span className='inline-button-arrow'> <CgChevronRight className='primary-btn-first-arrow' /> <CgChevronRight className='primary-btn-second-arrow' />  </span>
                            </a>
                        

                    </div> */}
            <div className="discover-cards-pocket">
              <div className="pocket-blur-layer" />

              {certificateCards.map((card) => (
                <CertificateCard
                  key={card.id}
                  logo={card.logo}
                  company={card.company}
                  link={card.link}
                  className={`${card.className}`}
                />
              ))}


              <img
                className="pocket-certificate-cards-cover"
                src="/assets/images/pocket-cards-cover.svg"
                alt="certificate cards cover"
                width={385}
                height={272}
              />

              <div className="card-offers">
                <h3 className="bullet-point-blue">Trending Offers</h3>
                <p>
                  Check out trending offers from our vendors. Get an additional discount on
                  buying exam vouchers in bulk at Global IT Success.
                </p>
              </div>
              

              <a href="#" className="btn-primary whitespace-nowrap">
                Explore Upto 50% Off Offers
                <span className="inline-button-arrow">
                  <CgChevronRight className="primary-btn-first-arrow" />
                  <CgChevronRight className="primary-btn-second-arrow" />
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscoverCertificates