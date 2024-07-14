"use client"
import "../Footer.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AccessibilityStatement() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="page-header accessibility-statement-header">
                <h2>
                    {language === "English" ? "Accessibility Statement for Fragile Planet Wildlife Park" : "Declaracion de Accesibilidad de Fragile Planet Wildlife Park"}
                </h2>
            </section>
            <section className="page-content">
                <p>
                    {language === "English" ? "Fragile Planet Wildlife Park is committed to providing an inclusive and enjoyable experience for all our guests, including visitors with disabilities. We are constantly working to improve accessibility throughout the park." : "Fragile Planet Wildlife Park se compromete a ofrecer una experiencia integradora y agradable a todos nuestros visitantes, incluidos los discapacitados. Trabajamos constantemente para mejorar la accesibilidad en todo el parque."}
                </p>
                <p>
                    {language === "English" ? "Here's a breakdown of our current accessible features:" : "Aquí tienes un desglose de nuestras funciones accesibles actuales:"}
                </p>
                <strong>
                    {language === "English" ? "Parking:" : "Estacionamiento:"}
                </strong>
                <p>
                    {language === "English" ? "- Designated handicap accessible parking spaces are available. We recommend calling ahead at (956) 710-2025 to inquire about space availability and to make arrangements for assistance if needed." : "- Hay plazas de aparcamiento para minusválidos. Le recomendamos que llame con antelación al (956) 710-2025 para informarse sobre la disponibilidad de plazas y solicitar ayuda en caso necesario."}
                </p>
                <strong>
                    {language === "English" ? "Getting Around the Park:" : "Navegando Nuestro Parque"}
                </strong>
                <p>
                    {language === "English" ? "- Our open-air wagon is equipped with a wheelchair lift to ensure easy boarding and disembarking. - Key locations throughout the park, including the gift shop and amphibian lab, have wheelchair ramps for easy access." : "- Nuestro vagón descubierto está equipado con un elevador para sillas de ruedas que facilita el embarque y desembarque. - Los lugares clave del parque, como la tienda de regalos y el laboratorio de anfibios, cuentan con rampas para sillas de ruedas que facilitan el acceso."}
                </p>
                <strong>
                    {language === "English" ? "Exhibits:" : "Exhibiciones:"}
                </strong>
                <p>
                    {language === "English" ? "- The petting zoo and the kangaroo and wallaby walkabouts are designed to be wheelchair-friendly with wide open spaces for guests to explore." : "- El zoo de mascotas y los paseos de canguros y ualabíes están diseñados para sillas de ruedas, con amplios espacios abiertos que los visitantes pueden explorar."}
                </p>
                <strong>
                    {language === "English" ? "Additional Services:" : "Servicios Adicionales:"}
                </strong>
                <p>
                    {language === "English" ? "- We are happy to answer any accessibility-related questions you may have. Please call us at (956) 710-2025 before your visit." : "- Estaremos encantados de responder a cualquier pregunta relacionada con la accesibilidad que pueda tener. Llámenos al (956) 710-2025 antes de su visita."}
                </p>
                <strong>
                    {language === "English" ? "We are Always Improving:" : "Siempre estamos Mejorando:"}
                </strong>
                <p>
                    {language === "English" ? "We are continually evaluating and improving the accessibility of our facilities and programs. If you have any suggestions on how we can better serve you, please don't hesitate to let us know by contacting us at (956) 710-2025 or emailing us at info@fpwildlifepark.com." : "Estamos continuamente evaluando y mejorando la accesibilidad de nuestras instalaciones y programas. Si tiene alguna sugerencia sobre cómo podemos servirle mejor, no dude en hacérnoslo saber poniéndose en contacto con nosotros en el (956) 710-2025 o enviándonos un correo electrónico a info@fpwildlifepark.com."}
                </p>
            </section>
        </main>
    );
};