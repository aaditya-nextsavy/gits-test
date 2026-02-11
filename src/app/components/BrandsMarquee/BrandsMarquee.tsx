type Brands = {
  id: number;
  name: string;
  logo: string;
  url: string;
};

type BrandsMarqueeProps = {
  edgeShadow?: boolean;
};

const brands: Brands[] = [
  {
    id: 1,
    name: 'Cisco',
    logo: '/assets/images/brandMarquee/brand-marquee-sf.svg',
    url: 'https://www.cisco.com',
  },
  {
    id: 2,
    name: 'Microsoft',
    logo: '/assets/images/brandMarquee/brand-marquee-microsoft.svg',
    url: 'https://www.microsoft.com',
  },

  {
    id: 3,
    name: 'ISACA',
    logo: '/assets/images/brandMarquee/brand-marquee-isaca.svg',
    url: 'https://www.isaca.org',
  },

  {
    id: 4,
    name: 'CompTIA',
    logo: '/assets/images/brandMarquee/brand-marquee-comptia.svg',
    url: 'https://www.comptia.org',
  },

  {
    id: 5,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-isaca.svg',
    url: 'https://www.google.com',
  },

  {
    id: 6,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-comptia.svg',
    url: 'https://www.google.com',
  },

  {
    id: 7,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-microsoft.svg',
    url: 'https://www.google.com',
  },

  {
    id: 8,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-comptia.svg',
    url: 'https://www.google.com',
  },

  {
    id: 9,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-microsoft.svg',
    url: 'https://www.google.com',
  },

  {
    id: 10,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-isaca.svg',
    url: 'https://www.google.com',
  },

  {
    id: 11,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-comptia.svg',
    url: 'https://www.google.com',
  },

  {
    id: 12,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-isaca.svg',
    url: 'https://www.google.com',
  },

  {
    id: 13,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-microsoft.svg',
    url: 'https://www.google.com',
  },

  {
    id: 14,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-comptia.svg',
    url: 'https://www.google.com',
  },

  {
    id: 15,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-comptia.svg',
    url: 'https://www.google.com',
  },

  {
    id: 16,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-isaca.svg',
    url: 'https://www.google.com',
  },

  {
    id: 17,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-microsoft.svg',
    url: 'https://www.google.com',
  },

  {
    id: 18,
    name: 'Google',
    logo: '/assets/images/brandMarquee/brand-marquee-comptia.svg',
    url: 'https://www.google.com',
  },


];

export default function BrandsMarquee({ edgeShadow = false }: BrandsMarqueeProps) {


  const marqueeCompanies = [...brands, ...brands];

  return (
    <div
      className={`brands-marquee-wrapper background-primary ${edgeShadow ? "marquee-edge-shadow" : ""
        }`}
    >
      <div className="brands-marquee">
        <div className="brands-marquee-track">
          {marqueeCompanies.map((brand, index) => (
            <a
              key={`${brand.id}-${index}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brands-marquee-item"
            >
              <div className="brands-marquee-item-box">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="brands-marquee-item-image"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
