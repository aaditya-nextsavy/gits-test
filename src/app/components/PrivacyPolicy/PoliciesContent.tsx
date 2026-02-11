type PolicySection = {
  id: string
  title: string
  description?: string
  points?: string[]
}

export default function PoliciesContent() {
  const sections: PolicySection[] = [
    {
      id: 'ownership',
      title: 'Ownership',
      description:
        'The components of this website (www.globalitsuccess.com) are fully operational and owned by Succed Learners Pvt Ltd. Users are bound to strictly follow the above-acknowledged regulations laid down by Succed Learners Pvt Ltd. Please look through the instructions carefully before using this website.',
    },
    {
      id: 'account-security',
      title: 'While Signing Up for Your Account or Profile',
      description:
        'You are required to provide precise information while creating an account on our portal. Keep the privacy of the credentials that you have entered while creating an account and that are not meant to be shared with anyone. You undertake that any information is being disclosed that you have accessed by an unauthorized body without your consent, you need to notify us at once.',
    },
    {
      id: 'browser-info',
      title: 'Information retained from the Browser',
      description:
        'When you visit our website to seek our service, we collect data for legitimate use. Information refers to the IP address of your internet, the current version of your set-up, the date and time of your visiting our site. We also take account of the real-time spent by users on our website and other qualitative facts at the time of your browsing our website.',
    },
    {
      id: 'third-party',
      title: 'Use of Third-Party Services',
      points: [
        'For uniform website functionality and easy navigation.',
        'To make necessary changes whenever required by our software professionals team.',
        'Periodically alter products and services.',
        'Sign up for Salesforce’s Partner Program.',
      ],
      description:
        'However, we make sure that they do not utilize or disclose any data other than legitimate reasons. We make them commit not to utilize data unofficially other than website purposes.',
    },
    {
      id: 'copyrights',
      title: 'Copyrights',
      description:
        'The entire content includes but is not restricted to design, interfaces, text, logos, and the selection and arrangements are protected by copyright and other trademark laws and is the property of this platform.',
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      description:
        'You agree to indemnify and hold us and our officers, staff & employees free from any claims, actions, or investigations, liabilities, and expenses of any kind arising out of your use of this website.',
    },
    {
      id: 'invoice',
      title: 'Invoice',
      description:
        'Being a GST-registered dealer, we provide GST invoices to clients on every purchase as well.',
    },
  ]

  return (
    <section className="policy-content-wrapper">
      <div className="container mx-auto">
        {sections.map((section) => (
          <div  key={section.id} >
            <div className="policy-block">
              <h2>{section.title}</h2>

              {section.description && <p>{section.description}</p>}

              {section.points && (
                <ol>

                  {section.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ol>
              )}
            </div>

            <div className="faq-divider">
              <img alt="divider icon" className="faq-divider-question" src="/assets/images/faq-dashed-line.svg" />
            </div>
          </div>




        ))}
      </div>
    </section>
  )
}
