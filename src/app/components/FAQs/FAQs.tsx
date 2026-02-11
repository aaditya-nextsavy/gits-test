'use client';

import React, { useState } from 'react';

type FaqItem = {
    id: number;
    question: string;
    answer: string;
    category: 'general' | 'refund' | 'policies';
};

export const faqData: FaqItem[] = [
    {
        id: 1,
        question: 'What are exam vouchers?',
        answer:
            'An exam voucher is an alphanumeric prepaid code which allows you to schedule an IT certification exam. Each voucher comes with an expiration date.',
        category: 'general',
    },
    {
        id: 2,
        question: 'How soon can I expect my exam voucher to be delivered?',
        answer:
            'Most exam vouchers are delivered within a few hours after purchase. In rare cases, it may take up to 24 hours.',
        category: 'general',
    },
    {
        id: 3,
        question: 'How can I purchase an exam voucher?',
        answer:
            'You can purchase exam vouchers directly through our website by selecting your desired certification and completing checkout.',
        category: 'refund',
    },
    {
        id: 4,
        question: 'Are the exam vouchers transferable?',
        answer:
            'Transferability depends on the vendor’s policy. Some vouchers are non-transferable once issued.',
        category: 'refund',
    },
    {
        id: 5,
        question: 'Are the exam vouchers transferable?',
        answer:
            'Transferability depends on the vendor’s policy. Some vouchers are non-transferable once issued.',
        category: 'general',
    },

    {
        id: 6,
        question: 'Are the exam vouchers transferable?',
        answer:
            'Transferability depends on the vendor’s policy. Some vouchers are non-transferable once issued.',
        category: 'policies',
    },

     {
        id: 7,
        question: 'Why are exam vouchers?',
        answer:
            'An exam voucher is an alphanumeric prepaid code which allows you to schedule an IT certification exam. Each voucher comes with an expiration date.',
        category: 'general',
    },


];



const FaqSection = () => {
    const [showAll, setShowAll] = useState(false);


    const [activeTab, setActiveTab] = useState<'general' | 'refund' | 'policies'>(
        'general'
    );
    const [openId, setOpenId] = useState<number | null>(1);

    const filteredFaqs = faqData.filter(
        (faq) => faq.category === activeTab
    );

    
    return (
        <section className="faq-section-wrapper">

            <div className="container mx-auto overflow-x-hidden">
                <div className="faq-wrapper">
                    <div className="faq-header">
                        <div className="faq-header-left">
                            <h2>Frequently<br />Asked Questions</h2>

                        </div>

                        <div className="faq-header-right">
                            <p>
                                Find quick answers to the most common questions about exam vouchers,
                                validity, usage, return, refunds and support, so you can move
                                forward with confidence.
                            </p>
                        </div>
                    </div>
                    <div className='faq-tabs-wrapper'>

                        <div className="faq-tabs">
                            <button
                                className={`faq-tab ${activeTab === 'general' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab('general');
                                    setShowAll(false);
                                    setOpenId(null);
                                }}
                            >
                                General
                            </button>
                            <button
                                className={`faq-tab ${activeTab === 'refund' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab('refund');
                                    setShowAll(false);
                                    setOpenId(null);
                                }}
                            >
                                Return & Refund
                            </button>
                            <button
                                className={`faq-tab ${activeTab === 'policies' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab('policies');
                                    setShowAll(false);
                                    setOpenId(null);
                                }}
                            >
                                Policies
                            </button>
                        </div>
                    </div>


                    <div className="faq-list">
                        {(showAll ? filteredFaqs : filteredFaqs.slice(0, 3)).map((faq) => {

                            const isOpen = openId === faq.id;

                            return (
                                <div

                                    key={faq.id}
                                    className={`faq-item ${isOpen ? 'open' : ''}`}
                                >

                                    <div className="faq-divider">
                                        <img alt="divider icon" className="faq-divider-question" src="/assets/images/faq-dashed-line.svg" />
                                    </div>


                                    <button
                                        className="faq-question"
                                        onClick={() =>
                                            setOpenId(isOpen ? null : faq.id)
                                        }
                                    >
                                        <span>{faq.question}</span>
                                        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
                                            +
                                        </span>
                                    </button>

                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>




                                </div>
                            );
                        })}
                        <div className="faq-divider">
                            <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                        </div>

                        <div className="faq-view-more">
                            {filteredFaqs.length > 3 && (
                                <button
                                    className="faq-view-more-button"
                                    onClick={() => setShowAll((prev) => !prev)}
                                >
                                    {showAll ? '− View Less Questions −' : '+ View More Questions +'}
                                </button>
                            )}

                        </div>

                    </div>





                </div>
            </div>

        </section>

    );
};

export default FaqSection;
