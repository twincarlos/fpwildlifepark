"use client";
import Link from "next/link";
import { useState } from "react";

export function HomeComponent5({language}) {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [emailError, setEmailError] = useState(false);

    async function subscribe() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 5000);
        } else {
            setEmailError(true);
            setTimeout(() => setEmailError(false), 5000);
        };
    };
    return (
        <section className="home-component home-component-5">
            <div className="container">
                <div className="email-icon">
                    <i className="fa-regular fa-envelope" />
                    <p>{language === "English" ? "Stay Wild!" : ""}</p>
                </div>
                <div className="sign-up-text">
                    <h2>{language === "English" ? "Stay updated on wildlife news, zoo activities, and exclusive offers." : ""}</h2>
                </div>
                <div className="sign-up-form">
                    <input type="text" placeholder={language === "English" ? "Email Address" : ""} value={email} onChange={e => setEmail(e.target.value)} />
                    <button onClick={subscribe}>{language === "English" ? "Submit" : ""}</button>
                </div>
                {
                    subscribed ? (
                        <div className="thanks-for-subscribing">
                            <p>{"You're now subscribed"} {email} <i className="fa-solid fa-check" /></p>
                        </div>
                    ) : null
                }
                {
                    emailError ? (
                        <div className="email-error">
                            <p>{language === "English" ? "Enter a valid email address" : ""}</p>
                        </div>
                    ) : null
                }
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
    );
};