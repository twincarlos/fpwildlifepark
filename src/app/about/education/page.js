"use client"
import "../About.css";
import { useLanguage } from "@/app/context/LanguageContext";
export default function Education() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="about-header education-header">
                <h2>{language === "English" ? "Connect with Nature" : "Conecta con la Naturaleza"}</h2>
            </section>
            <section className="about-body">
                <div className="about-content">
                    <p>
                        <strong>{language === "English" ? "Why study with us?" : "Porque estudiar con nosotros?"}</strong>
                    </p>
                    <p>
                        {language === "English" ? "At Fragile Planet Wildlife Park, we believe in the power of education to drive conservation efforts and foster a deep connection between people and wildlife. Our education portal offers a unique, hands-on learning experience that goes beyond traditional classroom settings. By studying with us, students and educators gain access to:" : "En Fragile Planet Wildlife Park creemos en el poder de la educación para impulsar los esfuerzos de conservación y fomentar una profunda conexión entre las personas y la vida salvaje. Nuestro portal educativo ofrece una experiencia única de aprendizaje práctico que va más allá de las aulas tradicionales. Al estudiar con nosotros, los estudiantes y educadores tienen acceso a:"}
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Expert Knowledge" : "Conocimiento Experto"}</strong>{language === "English" ? ": Learn from experienced professionals dedicated to animal care, conservation, and education." : ": Aprenda de profesionales experimentados dedicados al cuidado, la conservación y la educación de los animales."}
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Interactive Experiences" : "Experiencias Interactivas"}</strong>{language === "English" ? ": Engage with wildlife through our immersive programs and up-close encounters." : ": Conéctese con la fauna salvaje a través de nuestros programas de inmersión y encuentros cercanos."}
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Innovative Resources" : "Recursos Innovativos"}</strong>{language === "English" ? ": Utilize our extensive library of educational materials, including games, activity sheets, and research opportunities." : ": Utilice nuestra amplia biblioteca de material educativo, que incluye juegos, fichas de actividades y oportunidades de investigación."}
                    </p>
                    <p>
                        <strong>{language === "English" ? "Benefits of Studying with Fragile Planet:" : "Beneficios de Estudiar con Fragile Planet"}</strong>
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Teacher's Corner" : "Teacher's Corner"}</strong>{language === "English" ? ": A password-protected area featuring games, activity sheets, promotions, and discounted study abroad programs." : ": Una zona protegida por contraseña que ofrece juegos, fichas de actividades, promociones y descuentos en programas de estudios en el extranjero."}
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Fundraising Opportunities" : "Oportunidades para Recaudar Fondos"}</strong>{language === "English" ? ": Programs that help schools earn money." : ": Programas que ayudan escuelas a recaudar fondos"}
                    </p>
                    <p className="indent">
                        <strong>{language === "English" ? "Incentives" : "Incentivos"}</strong>{language === "English" ? ": Amazon gift cards and free butterfly raise and release kits." : ": Tarjetas regalo de Amazon y kits gratuitos de cría y liberación de mariposas."}
                    </p>
                    <p>
                        <strong>{language === "English" ? "Wide Reach:" : "Amplio Alcance"}</strong>
                    </p>
                    <p>
                        {language === "English" ? "In 2023/2024, we visited schools in eight states across the US, sharing our passion for conservation with over 120,000 students in the 2022/2023 school year. Now booking for the 2024/2025 school year." : "En 2023/2024, visitamos escuelas en ocho estados de Estados Unidos, compartiendo nuestra pasión por la conservación con más de 120 000 estudiantes en el año escolar 2022/2023. Ya hay reservas para el curso escolar 2024/2025."}
                    </p>
                    <p>
                        <strong>{language === "English" ? "Flexible Presentation Options:" : "Opciones de presentación flexibles:"}</strong>
                    </p>
                    <p className="indent">
                        {language === "English" ? "Minimum of 300 students required." : "Minimo de 300 estudiantes requerido"}
                    </p>
                    <p className="indent">
                        {language === "English" ? "Schools provide a microphone, three tables, three chairs, and a push cart." : "Las escuelas proporcionan un micrófono, tres mesas, tres sillas y un carrito."}
                    </p>
                    <p className="indent">
                        {language === "English" ? "Presentations can be held in various large spaces, with outdoor presentations considered on a case-by-case basis." : "Las presentaciones pueden tener lugar en diversos espacios amplios, y las que se realicen al aire libre se estudiarán caso por caso."}
                    </p>
                    <p className="indent">
                        {language === "English" ? "Direct communication with a single point of contact at the school." : "Comunicación directa con un único punto de contacto en la escuela."}
                    </p>
                    <p className="indent">
                        {language === "English" ? "Tailored involvement from teachers to enhance the learning experience." : "Participación adaptada de los profesores para mejorar la experiencia de aprendizaje."}
                    </p>
                    <p className="indent">
                        {language === "English" ? "Book Your FREE Education Presentation Here" : "Reserve aquí su presentación educativa GRATUITA"}
                    </p>
                </div>
            </section>
        </main>
    );
};