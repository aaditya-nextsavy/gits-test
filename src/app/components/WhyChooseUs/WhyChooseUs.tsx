import React from 'react';

const WhyChooseUsType2 = () => {
  return (
    <section className="why-choose-us-wrapper">
      <div className="container mx-auto">
        <div className="why-choose-us-content flex flex-col md:flex-row">
          
          <div className="why-choose-us-image relative w-full md:w-1/2">
            <img
              src="/assets/images/whychooseusbg.webp"
              alt="people working"
              width={350}
              height={150}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="why-choose-us-info-container w-full md:w-1/2 flex justify-end p-7">
            <div className="why-choose-us-info flex flex-col gap-12">
              <h2>Why Choose Global IT Success for your vouchers?</h2>
              <p>
               As an authorized IT exam voucher reseller and an ISACA and VMware training provider, we don’t stop at service delivery but continue to be your certification partner. We are the sole provider that combines personalized guidance with a voucher purchase. Our vouchers have a generous validity of 6 to 12 months and an Oracle voucher for 4 to 6 months, enabling you to prepare and schedule your IT Certification Exam at your convenience through an authorized exam center. Global IT Success is your trusted partner for a seamless, stress-free certification journey.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsType2;
