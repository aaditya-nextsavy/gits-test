'use client';

import React, { useState } from 'react';
import { HiMiniChevronRight } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";


type Option = {
    label: string;
    value: string;
};

type CustomSelectProps = {
    name: string;
    value: string;
    options: Option[];
    placeholder: string;
    onChange: (name: string, value: string) => void;
};

const CustomSelect = ({
    name,
    value,
    options,
    placeholder,
    onChange,
}: CustomSelectProps) => {
    const [open, setOpen] = useState(false);

    const selectedLabel =
        options.find((opt) => opt.value === value)?.label || '';

    return (
        <div className="custom-select">
            <button
                type="button"
                className={`custom-select-trigger ${open ? 'open' : ''}`}
                onClick={() => setOpen(!open)}
            >
                <span className={!value ? 'placeholder' : ''}>
                    {value ? selectedLabel : placeholder}
                </span>
                <span className={`chevron ${open ? 'rotate' : ''}`} />
            </button>

            {open && (
                <div className="custom-select-dropdown">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="custom-select-option"
                            onClick={() => {
                                onChange(name, option.value);
                                setOpen(false);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};



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

    const handleCustomChange = (name: string, value: string) => {
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
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

                            {/* whatsapp */}

                            <li className='w-full '>
                                <a className="flex w-full flex-row items-center justify-between" href="https://wa.me/919311538385">
                                    <div className='flex flex-row gap-3'>
                                        <div>
                                            <img alt="divider icon" width={54} height={54} className="rounded-full faq-divider-line" src="/assets/images/getInTouch-whatsapp.svg" />
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

                            <div className="faq-divider my-6 lg:my-8">
                                <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                            </div>


                            {/* contact us */}
                            <li className='w-full '>
                                <a className="flex w-full flex-row items-center justify-between" href="tel:+919311358385">
                                    <div className='flex flex-row gap-3'>
                                        <div>
                                            <img alt="divider icon" width={54} height={54} className="rounded-full faq-divider-line" src="/assets/images/getInTouch-phone.svg" />
                                        </div>
                                        <div className='contact-social-links'>
                                            <h5 className='mb-2.5'>Call Us</h5>
                                            <p >+91 9311358385</p>
                                        </div>

                                    </div>
                                    <div>
                                        <HiMiniChevronRight />
                                    </div>
                                </a>



                            </li>

                            <div className="faq-divider my-6 lg:my-8">
                                <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                            </div>


                            {/* email  */}
                            <li className='w-full '>
                                <a className="flex w-full flex-row items-center justify-between" href="mailto:info@globalitsuccess.com">
                                    <div className='flex flex-row gap-3'>
                                        <div>
                                            <img alt="divider icon" width={54} height={54} className="rounded-full faq-divider-line" src="/assets/images/getInTouch-email.svg" />
                                        </div>
                                        <div className='contact-social-links'>
                                            <h5 className='mb-2.5'>Email Us</h5>
                                            <p >info@globalitsuccess.com</p>
                                        </div>

                                    </div>
                                    <div>
                                        <HiMiniChevronRight />
                                    </div>
                                </a>



                            </li>

                            <div className="faq-divider my-6 lg:my-8">
                                <img alt="divider icon" className="faq-divider-line" src="/assets/images/faq-dashed-line.svg" />
                            </div>


                            {/* maps  */}
                            <li className='w-full '>
                                <a className="flex w-full flex-row items-center justify-between" href="https://maps.app.goo.gl/8XAZgfZkc1oPvNDs6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className='flex flex-row gap-3'>
                                        <div>
                                            <img alt="divider icon" width={54} height={54} className="rounded-full faq-divider-line" src="/assets/images/getInTouch-location.svg" />
                                        </div>
                                        <div className='contact-social-links'>
                                            <h5 className='mb-2.5'>Visit Us</h5>
                                            <p >Go to Maps</p>
                                        </div>

                                    </div>
                                    <div>
                                        <HiMiniChevronRight />
                                    </div>
                                </a>



                            </li>

                            <div className="faq-divider my-6 lg:my-8">
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
                                {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                            </div>

                            <div className="form-field">
                                <label>Email ID</label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email ID"
                                />
                                {errors.email && <span className="error-msg">{errors.email}</span>}
                            </div>

                            <div className="form-field">
                                <label>Mobile Number</label>
                                <input
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    placeholder="Enter Mobile Number"
                                />
                                {errors.mobile && <span className="error-msg">{errors.mobile}</span>}
                            </div>


                            <div className="form-field">
                                <label>Country</label>
                                <CustomSelect
                                    name="country"
                                    value={form.country}
                                    placeholder="Select Country"
                                    options={[
                                        { label: 'India', value: 'india' },
                                        { label: 'USA', value: 'usa' },
                                    ]}
                                    onChange={handleCustomChange}
                                />

                                {errors.country && <span className="error-msg">{errors.country}</span>}
                            </div>

                            <div className="form-field">
                                <label>Vendor</label>
                                <CustomSelect
                                    name="vendor"
                                    value={form.vendor}
                                    placeholder="Select Vendor"
                                    options={[
                                        { label: 'Cisco', value: 'cisco' },
                                        { label: 'Microsoft', value: 'microsoft' },
                                    ]}
                                    onChange={handleCustomChange}
                                />

                                {errors.vendor && <span className="error-msg">{errors.vendor}</span>}
                            </div>

                            <div className="form-field">
                                <label>Course</label>
                                <CustomSelect
                                    name="course"
                                    value={form.course}
                                    placeholder="Select Course"
                                    options={[
                                        { label: 'CCNA', value: 'ccna' },
                                        { label: 'Azure', value: 'azure' },
                                    ]}
                                    onChange={handleCustomChange}
                                />

                                {errors.course && <span className="error-msg">{errors.course}</span>}
                            </div>

                            <div className="form-field full-width">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Write a message..."
                                />
                                {errors.message && <span className="error-msg">{errors.message}</span>}
                            </div>
                        </div>

                        <button type="submit" className='btn-primary mt-4 lg:mt-6' disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Get In Touch'}
                        </button>
                    </form>

                </div>
            </div>



        </section>
    );
}
