"use client"
import "./JobApplication.css";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function JobApplication() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="job-application-header">
                <div>
                    <h2>{language === "English" ? "Join Our Team at Fragile Planet Wildlife Park!" : ""}</h2>
                </div>
            </section>
            <section className="job-application-description">
                <div>
                    <p>
                        {language === "English" ? "Are you passionate about wildlife and conservation? Join us at Fragile Planet Wildlife Park, where you can make a meaningful impact in preserving and protecting diverse species. Enjoy a dynamic and supportive work environment, with opportunities for professional growth and development. Be part of a dedicated team committed to educating and inspiring visitors about the importance of conservation. Apply today and help us make a difference!" : ""}
                    </p>
                </div>
                <div>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeqoi7Mko5kEaawy1O4gReIuuMz9yVHosCtAvMPFgdR_qt-WQ/viewform" target="_blank">{language === "English" ? "Apply" : ""}</Link>
                </div>
            </section>
        </main>
    );
};