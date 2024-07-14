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
                    <h2>{language === "English" ? "Make an Impact with Us!" : "Crea un Impacto con Nosotros!"}</h2>
                </div>
            </section>
            <section className="volunteer-application-description">
                <div>
                    <p>
                        {language === "English" ? "Join the wild team of dedicated individuals who have a passion for wildlife. Persons willing to become volunteers must be 18 years or older, undergo an application process, and commit to volunteer at least 12 hours per month for one year. Volunteers will receive training and have the opportunity to learn new skills and make new friends. All volunteers must dress appropriately." : "Únase al equipo de personas dedicadas y apasionadas por la vida salvaje. Las personas que deseen convertirse en voluntarios deben tener 18 años o más, someterse a un proceso de solicitud y comprometerse a trabajar como voluntarios al menos 12 horas al mes durante un año. Los voluntarios recibirán formación y tendrán la oportunidad de aprender nuevas habilidades y hacer nuevos amigos. Todos los voluntarios deben vestir adecuadamente."}
                    </p>
                </div>
                <div>
                    <Link href="https://forms.gle/nUr74G1KZaRM74tV8" target="_blank">{language === "English" ? "Apply" : "Aplica"}</Link>
                </div>
            </section>
        </main>
    );
};