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
                    <h2>{language === "English" ? "Learn and Grow with Us!" : "Aprende y Crece con Nosotros!"}</h2>
                </div>
            </section>
            <section className="internship-application-description">
                <div>
                    <p>
                        {language === "English" ? "At Fragile Planet Wildlife Park we are looking for hard-working, passionate college students, or recent graduates, that are interested in developing experience in the zoological field. We offer Wildlife Care internship that will allow students to assist animal care in diet preparation, facility cleaning, feeding, public programs and special events. Interns will also have the ability to take part in training, playtime, and enrichment sessions with animals residing at the zoo. While none of the internships are paid, they will provide the experience needed for individuals seeking employment within the zoo industry." : "En Fragile Planet Wildlife Park buscamos estudiantes universitarios o recién licenciados trabajadores y apasionados que estén interesados en adquirir experiencia en el campo de la zoología. Ofrecemos prácticas de cuidado de animales salvajes que permitirán a los estudiantes ayudar en el cuidado de los animales en la preparación de dietas, limpieza de las instalaciones, alimentación, programas públicos y eventos especiales. Los estudiantes en prácticas también podrán participar en sesiones de adiestramiento, juego y enriquecimiento con los animales que residen en el zoo. Aunque ninguna de las prácticas es remunerada, proporcionarán la experiencia necesaria a quienes busquen empleo en el sector de los zoológicos."}
                    </p>
                </div>
                <div>
                    <Link href="https://forms.gle/r2EkjvAf5nciT3yG6" target="_blank">{language === "English" ? "Apply" : "Aplica"}</Link>
                </div>
            </section>
        </main>
    );
};