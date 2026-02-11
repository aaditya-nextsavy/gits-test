'use client';

import React, { useState } from 'react';
import { HiMiniChevronRight } from "react-icons/hi2";


type FormState = {
    fullName: string;
    email: string;
    mobile: string;
    country: string;
    vendor: string;
    course: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
    fullName: '',
    email: '',
    mobile: '',
    country: '',
    vendor: '',
    course: '',
    message: '',
};

export default function GetInTouch() {
    const [form, setForm] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        // Auto-grow textarea
        if (e.target instanceof HTMLTextAreaElement) {
            e.target.style.height = 'auto';

            const newHeight = Math.min(e.target.scrollHeight, 350);
            e.target.style.height = `${newHeight}px`;
        }

        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!/^\S+@\S+\.\S+$/.test(form.email))
            newErrors.email = 'Enter a valid email address';
        if (!/^\d{8,15}$/.test(form.mobile))
            newErrors.mobile = 'Enter a valid mobile number';
        if (!form.country) newErrors.country = 'Country is required';
        if (!form.vendor) newErrors.vendor = 'Vendor is required';
        if (!form.course) newErrors.course = 'Course is required';
        if (!form.message.trim()) newErrors.message = 'Message cannot be empty';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        console.log('Form Submitted:', form);

        setTimeout(() => {
            setIsSubmitting(false);
            setForm(initialState);
            alert('Message sent successfully!');
        }, 1000);
    };

    return (
        <section className="contact-wrapper">

            <img
                alt="Background shapes"
                className="contact-bg-image absolute right-0 top-0 bottom-0 z-0"
                src="/assets/images/get-in-touch-bg.svg"
            />

            <div className="container mx-auto">
                <div className="contact-content-wrapper grid grid-cols-12 gap-6 items-start z-1 relative">

                    {/* Left */}
                    <div className="contact-info col-span-12 lg:col-span-4">
                        <div className="contact-into-title">
                            <h2>Get In Touch</h2>
                            <p>
                                Contact our team for assistance with exam voucher selection,
                                purchasing or certification-related queries.
                            </p>
                        </div>

                        <ul className="contact-info-list">
                            <li className='w-full '>
                                <a className="flex w-full flex-row items-center justify-between" href="https://wa.me/919311538385">
                                    <div className='flex flex-row gap-3'>
                                        <div>
                                            <img alt="divider icon" width={54} height={54} className="rounded-full faq-divider-line" src="/assets/images/getInTouch-whatsapp.webp" />
                                        </div>
                                        <div className='contact-social-links'>
                                            <h5 className='mb-2.5'>WhatsApp</h5>
                                            <p >Chat With Us</p>
                                        </div>

                                    </div>
                                    <div>
                                        <HiMiniChevronRight />
                                    </div>
                                </a>



                            </li>

                            <div className="faq-divider my-8">
                                <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                            </div>


                            <li className='w-full '>
                                <a className="flex w-full flex-row items-center justify-between" href="https://wa.me/919311538385">
                                    <div className='flex flex-row gap-3'>
                                        <div>
                                            <img alt="divider icon" width={54} height={54} className="rounded-full faq-divider-line" src="/assets/images/getInTouch-whatsapp.webp" />
                                        </div>
                                        <div className='contact-social-links'>
                                            <h5 className='mb-2.5'>WhatsApp</h5>
                                            <p >Chat With Us</p>
                                        </div>

                                    </div>
                                    <div>
                                        <HiMiniChevronRight />
                                    </div>
                                </a>



                            </li>

                            <div className="faq-divider my-8">
                                <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                            </div>

                            <li className='w-full '>
                                <a className="flex w-full flex-row items-center justify-between" href="https://wa.me/919311538385">
                                    <div className='flex flex-row gap-3'>
                                        <div>
                                            <img alt="divider icon" width={54} height={54} className="rounded-full faq-divider-line" src="/assets/images/getInTouch-whatsapp.webp" />
                                        </div>
                                        <div className='contact-social-links'>
                                            <h5 className='mb-2.5'>WhatsApp</h5>
                                            <p >Chat With Us</p>
                                        </div>

                                    </div>
                                    <div>
                                        <HiMiniChevronRight />
                                    </div>
                                </a>



                            </li>

                            <div className="faq-divider my-8">
                                <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                            </div>



                            <li className='w-full '>
                                <a className="flex w-full flex-row items-center justify-between" href="https://wa.me/919311538385">
                                    <div className='flex flex-row gap-3'>
                                        <div>
                                            <img alt="divider icon" width={54} height={54} className="rounded-full faq-divider-line" src="/assets/images/getInTouch-whatsapp.webp" />
                                        </div>
                                        <div className='contact-social-links'>
                                            <h5 className='mb-2.5'>WhatsApp</h5>
                                            <p >Chat With Us</p>
                                        </div>

                                    </div>
                                    <div>
                                        <HiMiniChevronRight />
                                    </div>
                                </a>



                            </li>

                            <div className="faq-divider my-8">
                                <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                            </div>


                            {/* <li>
                                <span>Call Us</span>
                                <a href="tel:+919311538385">+91 9311538385</a>
                            </li>
                            <div className="faq-divider">
                                <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                            </div>
                            <li>
                                <span>Email Us</span>
                                <a href="mailto:info@globalitsuccess.com">
                                    info@globalitsuccess.com
                                </a>
                            </li>
                            <div className="faq-divider">
                                <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                            </div>

                            <li>
                                <span>Visit Us</span>
                                <a href="#">Go to Maps</a>
                            </li>
                            <div className="faq-divider">
                                <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                            </div> */}
                        </ul>
                    </div>

                    {/* Right */}
                    <form
                        className="contact-form col-span-12 lg:col-span-7 lg:col-start-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="contact-form-grid">
                            <div className="form-field">
                                <label>Full Name</label>
                                <input
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter Full Name"
                                />
                                {errors.fullName && <span>{errors.fullName}</span>}
                            </div>

                            <div className="form-field">
                                <label>Email ID</label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email ID"
                                />
                                {errors.email && <span>{errors.email}</span>}
                            </div>

                            <div className="form-field">
                                <label>Mobile Number</label>
                                <input
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    placeholder="Enter Mobile Number"
                                />
                                {errors.mobile && <span>{errors.mobile}</span>}
                            </div>

                            <div className="form-field">
                                <label>Country</label>
                                <select name="country" value={form.country} onChange={handleChange}>
                                    <option value="">Select Country</option>
                                    <option value="india">India</option>
                                    <option value="usa">USA</option>
                                </select>
                                {errors.country && <span>{errors.country}</span>}
                            </div>

                            <div className="form-field">
                                <label>Vendor</label>
                                <select name="vendor" value={form.vendor} onChange={handleChange}>
                                    <option value="">Select Vendor</option>
                                    <option value="cisco">Cisco</option>
                                    <option value="microsoft">Microsoft</option>
                                </select>
                                {errors.vendor && <span>{errors.vendor}</span>}
                            </div>

                            <div className="form-field">
                                <label>Course</label>
                                <select name="course" value={form.course} onChange={handleChange}>
                                    <option value="">Select Course</option>
                                    <option value="ccna">CCNA</option>
                                    <option value="azure">Azure</option>
                                </select>
                                {errors.course && <span>{errors.course}</span>}
                            </div>

                            <div className="form-field full-width">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Write a message..."
                                />
                                {errors.message && <span>{errors.message}</span>}
                            </div>
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Get In Touch'}
                        </button>
                    </form>

                </div>
            </div>



        </section>
    );
}
