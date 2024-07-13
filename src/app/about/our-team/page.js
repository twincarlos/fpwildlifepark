"use client"
import "../About.css";
import Image from "next/image";
import employee1 from "../../(assets)/EMPLOYEES-1.png";
import employee2 from "../../(assets)/EMPLOYEES-2.png";
import employee3 from "../../(assets)/EMPLOYEES-3.png";
import employee4 from "../../(assets)/EMPLOYEES-4.png";
import employee5 from "../../(assets)/EMPLOYEES-5.png";
import employee6 from "../../(assets)/EMPLOYEES-6.png";
import { useLanguage } from "@/app/context/LanguageContext";

export default function OurTeam() {
    const {language} = useLanguage()
    return (
        <main className="our-team">
            <section className="about-header our-team-header">
                <h2>{language === "English" ? "Meet our team" : "Conoce nuestro equipo"}</h2>
            </section>
            <section className="about-body">
                <div className="about-content">
                    <div className="team-member">
                        <Image className="employee-img" alt="employee" src={employee1} />
                        <p className="employee-name">Sam Wolter</p>
                        <p className="employee-title">{language === "English" ? "Animal Care Manager" : ""}</p>
                    </div>
                    <div className="team-member">
                        <Image className="employee-img" alt="employee" src={employee2} />
                        <p className="employee-name">Jose Elizondo</p>
                        <p className="employee-title">{language === "English" ? "Safari Guide" : "Safari Guide"}</p>
                    </div>
                    <div className="team-member">
                        <Image className="employee-img" alt="employee" src={employee4} />
                        <p className="employee-name">Jorge Garcia</p>
                        <p className="employee-title">{language === "English" ? "Lead Educator" : "Lead Educator"}</p>
                    </div>
                    <div className="team-member">
                        <Image className="employee-img" alt="employee" src={employee5} />
                        <p className="employee-name">Cindy Torres</p>
                        <p className="employee-title">{language === "English" ? "Executive Assistant" : ""}</p>
                    </div>
                    <div className="team-member">
                        <Image className="employee-img" alt="employee" src={employee6} />
                        <p className="employee-name">Daryela Hernandez</p>
                        <p className="employee-title">{language === "English" ? "Office Manager" : ""}</p>
                    </div>
                </div>
            </section>
        </main>
    );
};
