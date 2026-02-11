type CertificateCardProps = {
  logo: string
  company: string
  link?: string
  className?: string
}

const CertificateCard = ({
  logo,
  company,
  link = '#',
  className = '',
}: CertificateCardProps) => {
  return (
    <a
      href={link}
      className={`pocket-certificate-card ${className}`}
      aria-label={`${company} certification`}
    >
      {/* STATIC CARD SHELL */}
      <img
        src="/assets/images/certificate-card-shell.webp"
        alt=""
        className="card-shell"
        aria-hidden
      />

      {/* 🔥 DYNAMIC LOGO ONLY */}
      <img
        src={logo}
        alt={`${company} logo`}
        className="card-logo"
      />
    </a>
  )
}

export default CertificateCard
