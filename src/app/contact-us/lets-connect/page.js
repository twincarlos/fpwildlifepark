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
                    user_name: data.firstName + " " + data.lastName,
                    user_email: data.email,
                    message: data.message,
                    subject: data.subject
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
                    <h2>{language === "English" ? "Connect with Fragile Planet Wildlife Park" : "Conectate con Fragile Planet Wildlife Park"}</h2>
                </div>
            </section>
            <section className="lets-connect-description">
                <div>
                    <p>
                        {language === "English" ? "Get in touch with us! Whether you're curious about our wildlife, conservation efforts, or planning your visit, we're here to assist you. Reach out to our team via phone, email, or visit us in person. We look forward to hearing from you and sharing our commitment to wildlife preservation!" : "Póngase en contacto con nosotros Tanto si tiene curiosidad por nuestra fauna y flora silvestres, como por nuestros esfuerzos de conservación o por planificar su visita, estamos aquí para ayudarle. Póngase en contacto con nuestro equipo por teléfono, correo electrónico o visítenos en persona. Estamos deseando conocerle y compartir nuestro compromiso con la conservación de la fauna."}
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
                            <p>{language === "English" ? "Thanks for contacting us! We'll get back to you soon." : "Gracias por ponerse en contacto con nosotros. Nos pondremos en contacto con usted en breve."}</p>
                        </div>
                    ) : null
                }
                <div className="contact-us-form">
                    <div className="contact-us-form-row contact-us-form-row-1">
                        <label>
                            {language === "English" ? "First name" : "Primer nombre"}
                            <input type="text" value={data.firstName} onChange={e => setData({ ...data, firstName: e.target.value })} />
                        </label>
                        <label>
                            {language === "English" ? "Last name" : "Apellido"}
                            <input type="text" value={data.lastName} onChange={e => setData({ ...data, lastName: e.target.value })} />
                        </label>
                    </div>
                    <div className="contact-us-form-row contact-us-form-row-2">
                        <label>
                            Email
                            <input type="text" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
                        </label>
                        <label>
                            {language === "English" ? "Subject" : "Titulo"}
                            <input type="text" value={data.subject} onChange={e => setData({ ...data, subject: e.target.value })} />
                        </label>
                    </div>
                    <div className="contact-us-form-row contact-us-form-row-3">
                        <label>
                            {language === "English" ? "Leave us a message..." : "Deja un mensaje..."}
                            <input type="text" value={data.message} onChange={e => setData({ ...data, message: e.target.value })} />
                        </label>
                    </div>
                    <div className="contact-us-form-row contact-us-form-row-4">
                        <button onClick={hanldeSubmit}>{language === "English" ? "Submit" : "Enviar"}</button>
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
                            <h2>{language === "English" ? "Follow Us" : "Siguenos"}</h2>
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