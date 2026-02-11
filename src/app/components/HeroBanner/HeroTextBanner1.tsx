const heroData = {
  title: 'Connect With Our Support Team With Ease',
  description:
    'At Global IT Success, your certification goals matter to us. Reach out for support related to exam vouchers, certifications, or order inquiries. Our team is dedicated to making your experience smooth and stress-free.',
}

export default function HeroTextBanner1() {
  return (
    <section className="text-hero-banner-wrapper">
      <div className="container mx-auto">
        <div className="text-hero-banner-content">
          <h1>{heroData.title}</h1>
          <p>{heroData.description}</p>
        </div>
      </div>
    </section>
  )
}
