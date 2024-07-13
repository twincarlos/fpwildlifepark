"use client"
import "../About.css";
import { useLanguage } from "@/app/context/LanguageContext";
export default function Education() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="about-header education-header">
                <h2>{language === "English" ? "Connect with Nature" : ""}</h2>
            </section>
            <section className="about-body">
                <div className="about-content">
                    <p>
                        <strong>{language === "English" ? "Why study with us?" : ""}</strong>
                    </p>
                    <p>
                        {language === "English" ? "At Fragile Planet Wildlife Park, we believe in the power of education to drive conservation efforts and foster a deep connection between people and wildlife. Our education portal offers a unique, hands-on learning experience that goes beyond traditional classroom settings. By studying with us, students and educators gain access to:" : ""}
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Expert Knowledge" : ""}</strong>{language === "English" ? ": Learn from experienced professionals dedicated to animal care, conservation, and education." : ""}
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Interactive Experiences" : ""}</strong>{language === "English" ? ": Engage with wildlife through our immersive programs and up-close encounters." : ""}
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Innovative Resources" : ""}</strong>{language === "English" ? ": Utilize our extensive library of educational materials, including games, activity sheets, and research opportunities." : ""}
                    </p>
                    <p>
                        <strong>{language === "English" ? "Benefits of Studying with Fragile Planet:" : ""}</strong>
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Teacher's Corner" : ""}</strong>{language === "English" ? ": A password-protected area featuring games, activity sheets, promotions, and discounted study abroad programs." : ""}
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Fundraising Opportunities" : ""}</strong>{language === "English" ? "Programs that help schools earn money." : ""}
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Incentives" : ""}</strong>{language === "English" ? "Amazon gift cards and free butterfly raise and release kits." : ""}
                    </p>
                    <p>
                        <strong>{language === "English" ? "Wide Reach:" : ""}</strong>
                    </p>
                    <p>
                        {language === "English" ? "In 2023/2024, we visited schools in eight states across the US, sharing our passion for conservation with over 120,000 students in the 2022/2023 school year. Now booking for the 2024/2025 school year." : ""}
                    </p>
                    <p>
                        <strong>{language === "English" ? "Flexible Presentation Options:" : ""}</strong>
                    </p>
                    <p className="indent">
                        {language === "English" ? "Minimum of 300 students required." : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "Schools provide a microphone, three tables, three chairs, and a push cart." : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "Presentations can be held in various large spaces, with outdoor presentations considered on a case-by-case basis." : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "Direct communication with a single point of contact at the school." : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "Tailored involvement from teachers to enhance the learning experience." : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "Book Your FREE Education Presentation Here" : ""}
                    </p>
                </div>
            </section>
        </main>
    );
};