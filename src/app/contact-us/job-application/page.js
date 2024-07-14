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
                    <h2>{language === "English" ? "Join Our Team at Fragile Planet Wildlife Park!" : "Unete a Nuestro Equipo en Fragile Planet Wildlife Park!"}</h2>
                </div>
            </section>
            <section className="job-application-description">
                <div>
                    <p>
                        {language === "English" ? "Are you passionate about wildlife and conservation? Join us at Fragile Planet Wildlife Park, where you can make a meaningful impact in preserving and protecting diverse species. Enjoy a dynamic and supportive work environment, with opportunities for professional growth and development. Be part of a dedicated team committed to educating and inspiring visitors about the importance of conservation. Apply today and help us make a difference!" : "¿Te apasiona la vida salvaje y la conservación? Únete a nosotros en Fragile Planet Wildlife Park, donde podrás tener un impacto significativo en la conservación y protección de diversas especies. Disfruta de un entorno de trabajo dinámico y solidario, con oportunidades de crecimiento y desarrollo profesional. Forma parte de un equipo dedicado a educar e inspirar a los visitantes sobre la importancia de la conservación. Presente su solicitud hoy mismo y ayúdenos a marcar la diferencia."}
                    </p>
                </div>
                <div>
                    <Link href="https://forms.gle/1qPSF3dQVLF9pJVc7" target="_blank">{language === "English" ? "Apply" : "Aplica"}</Link>
                </div>
            </section>
        </main>
    );
};