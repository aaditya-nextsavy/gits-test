import React from 'react'

const TrustedPartner = () => {
    return (
      <section className="why-choose-us-wrapper">
      <div className="container mx-auto">
        <div className="why-choose-us-content flex flex-col  md:flex-row-reverse">
          
          <div className="why-choose-us-image relative w-full md:w-1/2">
            <img
              src="/assets/images/whychooseusbg.webp"
              alt="people working"
              width={350}
              height={150}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="why-choose-us-info-container w-full md:w-1/2 flex justify-start p-7">
            <div className="why-choose-us-info flex flex-col gap-12">
              <h2>A Trusted Partner in Your Certification Journey</h2>
              <p>
               Your certification is a milestone to leap toward career excellence. Therefore, we prioritize your certification goals. We redefine convenience with a secure, user-friendly platform and unwavering customer support. With years of experience in IT exam voucher delivery, we ensure you enjoy a secure shopping experience that is smooth, reliable, and hassle-free. Ordering discounted IT exam vouchers from us is fast, simple, and hassle-free. It is a place where convenience meets commitment. We are unwaveringly dedicated to fueling your professional growth and helping you achieve the career success you deserve with affordability.

              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    )
}

export default TrustedPartner 