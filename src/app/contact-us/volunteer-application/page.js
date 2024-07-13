"use client"
import { useLanguage } from "@/app/context/LanguageContext";
import "./VolunteerApplication.css";
import Link from "next/link";

export default function VolunteerApplication() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="volunteer-application-header">
                <div>
                    <h2>{language === "English" ? "Make an Impact with Us!" : ""}</h2>
                </div>
            </section>
            <section className="volunteer-application-description">
                <div>
                    <p>
                        {language === "English" ? "Join the wild team of dedicated individuals who have a passion for wildlife. Persons willing to become volunteers must be 18 years or older, undergo an application process, and commit to volunteer at least 12 hours per month for one year. Volunteers will receive training and have the opportunity to learn new skills and make new friends. All volunteers must dress appropriately." : ""}
                    </p>
                </div>
                <div>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf2SERe-rryd9UmYvKEp3znUZrO50X0vwjoOzbZpnTmKSpaeQ/viewform" target="_blank">{language === "English" ? "Apply" : ""}</Link>
                </div>
            </section>
        </main>
    );
};