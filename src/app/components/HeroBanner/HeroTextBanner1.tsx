type HeroTextBannerProps = {
  title?: string
  description?: string
  extendedBG?: boolean
}

const defaultHeroData = {
  title: 'Connect With Our Support Team With Ease',
  description:
    'At Global IT Success, your certification goals matter to us. Reach out for support related to exam vouchers, certifications, or order inquiries. Our team is dedicated to making your experience smooth and stress-free.',
}

export default function HeroTextBanner1({
  title,
  description,
  extendedBG = false,
}: HeroTextBannerProps) {
  const heroTitle = title || defaultHeroData.title
  const heroDescription = description || defaultHeroData.description

  return (
    <section className={`text-hero-banner-wrapper ${extendedBG?"large-btm-padding":""}`}>

      {extendedBG && <div className="section-extended-background"></div>}

      <div className="container mx-auto">
        <div className="text-hero-banner-content">
          <h1>{heroTitle}</h1>

          <div className="space-y-4">
            {heroDescription
              ?.split('\n')
              .filter((line) => line.trim() !== '')
              .map((line, index) => (
                <p key={index}>{line}</p>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}