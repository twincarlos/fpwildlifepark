"use client"
import { useLanguage } from "@/app/context/LanguageContext";
import "./InternshipApplication.css";
import Link from "next/link";


export default function InternshipApplication() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="internship-application-header">
                <div>
                    <h2>{language === "English" ? "Learn and Grow with Us!" : ""}</h2>
                </div>
            </section>
            <section className="internship-application-description">
                <div>
                    <p>
                        {language === "English" ? "At Fragile Planet Wildlife Park we are looking for hard-working, passionate college students, or recent graduates, that are interested in developing experience in the zoological field. We offer Wildlife Care internship that will allow students to assist animal care in diet preparation, facility cleaning, feeding, public programs and special events. Interns will also have the ability to take part in training, playtime, and enrichment sessions with animals residing at the zoo. While none of the internships are paid, they will provide the experience needed for individuals seeking employment within the zoo industry." : ""}
                    </p>
                </div>
                <div>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeVcPYQGEHIDP2mAI8746LD3mia-FKWo94O8Dkzzh4zGLFbxQ/viewform" target="_blank">{language ? "Apply" : ""}</Link>
                </div>
            </section>
        </main>
    );
};