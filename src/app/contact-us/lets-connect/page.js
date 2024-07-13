"use client";
import "./LetsConnect.css";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import emailjs from "emailjs-com";

export default function LetsConnect() {
    const { language } = useLanguage()
    const [messageSent, setMessageSent] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    });
    const [errors, setErrors] = useState([]);

    async function hanldeSubmit() {
        const newErrors = [];
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.firstName.length) newErrors.push("First name is required");
        if (!data.lastName.length) newErrors.push("Last name is required");
        if (!emailPattern.test(data.email)) newErrors.push("Email must be valid");
        if (!data.subject.length) newErrors.push("Subject is required");
        if (!data.message.length) newErrors.push("Message is required");

        if (newErrors.length) {
            return setErrors(newErrors);
        }
        else {
            await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                {
                    senderEmail: data.email,
                    receiverEmail: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
                    subject: data.subject,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_USER_ID
            );
            setErrors([]);
            setData({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: ""
            });
            setMessageSent(true);
        };
    };

    return (
        <main>
            <section className="lets-connect-header">
                <div>
                    <h2>{language === "English" ? "Connect with Fragile Planet Wildlife Park" : ""}</h2>
                </div>
            </section>
            <section className="lets-connect-description">
                <div>
                    <p>
                        {language === "English" ? "Get in touch with us! Whether you're curious about our wildlife, conservation efforts, or planning your visit, we're here to assist you. Reach out to our team via phone, email, or visit us in person. We look forward to hearing from you and sharing our commitment to wildlife preservation!" : ""}
                    </p>
                </div>
            </section>
            <section className="lets-connect-body">
                {
                    errors.length ? (
                        <div className="errors">
                            {
                                errors.map((error, index) => <p key={index}>{error}</p>)
                            }
                        </div>
                    ) : null
                }
                {
                    messageSent ? (
                        <div className="thanks-for-contacting">
                            <p>{language === "English" ? "Thanks for contacting us! We'll get back to you soon." : ""}</p>
                        </div>
                    ) : null
                }
                <div className="contact-us-form">
                    <div className="contact-us-form-row contact-us-form-row-1">
                        <label>
                            {language === "English" ? "First name" : ""}
                            <input type="text" value={data.firstName} onChange={e => setData({ ...data, firstName: e.target.value })} />
                        </label>
                        <label>
                            {language === "English" ? "Last name" : ""}
                            <input type="text" value={data.lastName} onChange={e => setData({ ...data, lastName: e.target.value })} />
                        </label>
                    </div>
                    <div className="contact-us-form-row contact-us-form-row-2">
                        <label>
                            Email
                            <input type="text" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
                        </label>
                        <label>
                            {language === "English" ? "Subject" : ""}
                            <input type="text" value={data.subject} onChange={e => setData({ ...data, subject: e.target.value })} />
                        </label>
                    </div>
                    <div className="contact-us-form-row contact-us-form-row-3">
                        <label>
                            {language === "English" ? "Leave us a message..." : ""}
                            <input type="text" value={data.message} onChange={e => setData({ ...data, message: e.target.value })} />
                        </label>
                    </div>
                    <div className="contact-us-form-row contact-us-form-row-4">
                        <button onClick={hanldeSubmit}>{language === "English" ? "Submit" : ""}</button>
                    </div>
                </div>
                <div className="lets-connect-footer">
                    <div className="contact-us-info">
                        <Link href="https://maps.app.goo.gl/9vGc7XmMQP2GZHPG7">34748 FM 2480</Link>
                        <Link href="https://maps.app.goo.gl/9vGc7XmMQP2GZHPG7">Los Frenos, TX 78566</Link>
                        <Link href="tel:+9567102025">(956) 710 - 2025</Link>
                        <Link href="mailto:info@fpwildlifepark.com">info@fpwildlifepark.com</Link>
                    </div>
                    <div className="follow-us-container">
                        <div className="follow-us-text">
                            <h2>{language === "English" ? "Follow Us" : ""}</h2>
                        </div>
                        <div className="social-media-links">
                            <Link href="https://m.facebook.com/FragilePlanetWildlifePark" target="_blank"><i className="fa-brands fa-facebook" /></Link>
                            <Link href="https://www.instagram.com/fragileplanetwildlifepark" target="_blank"><i className="fa-brands fa-instagram" /></Link>
                            <Link href="https://www.tiktok.com/@fragileplanetsafaripark" target="_blank"><i className="fa-brands fa-tiktok" /></Link>
                            <Link href="https://www.youtube.com/@FragilePlanetWildlifePark" target="_blank"><i className="fa-brands fa-youtube" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};