"use client"
import "../Footer.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PrivacyPolicy() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="page-header privacy-policy-header">
                <h2>
                    {language === "English" ? "Fragile Planet Wildlife Park Privacy Policy" : "Politica de Privacidad de Fragile Planet Wildlife Park"}
                </h2>
            </section>
            <section className="page-content">
                <strong>
                    {language === "English" ? "Protecting Your Privacy" : "Protegiendo tu Privacidad"}
                </strong>
                <p>
                    {language === "English" ? "Fragile Planet Wildlife Park (\"we\" or \"us\") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information about you when you visit ourpark or use our website." : "Fragile Planet Wildlife Park (\ \"nosotros\") respeta su privacidad y se compromete a proteger su información personal. Esta política de privacidad explica cómo recopilamos, utilizamos y divulgamos la información sobre usted cuando visita nuestro parque o utiliza nuestro sitio web."}
                </p>
                <strong>
                    {language === "English" ? "Information We Collect:" : "Informacion que Coleccionamos"}
                </strong>
                <p>
                    {language === "English" ? "We may collect the following information from you:" : "Podemos recopilar la siguiente información sobre usted:"}
                </p>
                <div>
                    <p>
                        <strong>{language === "English" ? "- Transaction Information:" : "- Informacion de Transaccion"}</strong>{language === "English" ? " When you purchase tickets or concessions, we may collect your name, contact information, and purchase history." : " Cuando compra entradas o concesiones, podemos recopilar su nombre, información de contacto e historial de compras."}
                    </p>
                    <p>
                        <strong>{language === "English" ? "- Images and Recordings:" : "- Imagenes y Grabaciones"}</strong>{language === "English" ? " We may record video footage and take pictures of guests throughout the park for security and marketing purposes. By entering the park, you consent to your image being captured." : " Podemos grabar imágenes de vídeo y tomar fotografías de los visitantes en todo el parque con fines de seguridad y marketing. Al entrar en el parque, usted da su consentimiento para que se capte su imagen."}
                    </p>
                    <p>
                        <strong>{language === "English" ? "- Website Usage Information:": "- Inforamcion del Uso del Website"}</strong>{language === "English" ? " When you visit our website, we may collect information about your browsing activity, such as the pages you visit and the links you click. This information is collected anonymously and used to improve our website.": " Cuando visita nuestro sitio web, podemos recopilar información sobre su actividad de navegación, como las páginas que visita y los enlaces en los que hace clic. Esta información se recoge de forma anónima y se utiliza para mejorar nuestro sitio web."}
                    </p>
                </div>
                <strong>
                    {language === "English" ? "How We Use Your Information" : "Como Usamos Tu Informacion"}
                </strong>
                <p>
                    {language === "English" ? "- To process your ticket purchases and fulfill your requests. - To provide you with information about the park, such as upcoming events and promotions. - To improve the safety and security of the park. - To improve our marketing efforts." : "- Para procesar sus compras de entradas y satisfacer sus peticiones. - Para proporcionarle información sobre el parque, como próximos eventos y promociones. - Mejorar la seguridad del parque. - Mejorar nuestras actividades de marketing."}
                </p>
                <strong>
                    {language === "English" ? "Disclosure of Your Information" : "Divulgación de sus datos"}
                </strong>
                <p>
                    {language === "English" ? "We may disclose your information to third-party service providers who help us operate the park and website. We will only share your information with these providers to the extent necessary for them to perform their services. We will not sell or rent your information to any third party." : "Podemos revelar su información a terceros proveedores de servicios que nos ayudan a gestionar el parque y el sitio web. Sólo compartiremos su información con estos proveedores en la medida necesaria para que puedan prestar sus servicios. No venderemos ni alquilaremos su información a terceros."}
                </p>
                <strong>
                    {language === "English" ? "Security" : "Seguridad"}
                </strong>
                <p>
                    {language === "English" ? "We take reasonable steps to protect your information from unauthorized access, use, or disclosure. However, no website or electronic storage system is completely secure." : "Tomamos medidas razonables para proteger su información contra el acceso, uso o divulgación no autorizados. Sin embargo, ningún sitio web o sistema de almacenamiento electrónico es completamente seguro."}
                </p>
                <strong>
                    {language === "English" ? "Children's Privacy" : "Privacidad de Niños"}
                </strong>
                <p>
                    {language === "English" ? "We are committed to protecting the privacy of children. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us at info@fpwildlifepark.com and we will delete it." : "Nos comprometemos a proteger la privacidad de los niños. No recopilamos conscientemente información personal de niños menores de 13 años. Si usted es padre o tutor y cree que su hijo nos ha proporcionado información personal, póngase en contacto con nosotros en info@fpwildlifepark.com y la eliminaremos."}
                </p>
                <strong>
                    {language === "English" ? "Guest Conduct" : "Conducta de Invitado"}
                </strong>
                <p>
                    {language === "English" ? "We reserve the right to remove guests from the park for disorderly conduct, injury to animals, damage to park property, or any other reason deemed necessary by park staff. Guests who damage park property will be held financially responsible for the repairs or replacements." : "Nos reservamos el derecho de expulsar a los clientes del parque por conducta desordenada, lesiones a animales, daños a la propiedad del parque o cualquier otra razón que el personal del parque considere necesaria. Los huéspedes que dañen la propiedad del parque serán responsables económicamente de las reparaciones o sustituciones."}
                </p>
                <strong>
                    {language === "English" ? "Refusal of Service" : "Rechazo de Servicio"}
                </strong>
                <p>
                    {language === "English" ? "We reserve the right to refuse service and purchasing of tickets to any guest at our discretion." : "Nos reservamos el derecho a negar el servicio y la compra de entradas a cualquier invitado a nuestra discreción."}
                </p>
                <strong>
                    {language === "English" ? "Changes to This Policy" : "Cambios de esta Politica"}
                </strong>
                <p>
                    {language === "English" ? "We may update this Privacy Policy from time to time. We will post any changes on our website." : "Podemos actualizar esta Política de Privacidad de vez en cuando. Publicaremos cualquier cambio en nuestro sitio web."}
                </p>
                <strong>
                    {language === "English" ? "Contact Us" : "Contactanos"}
                </strong>
                <p>
                    {language === "English" ? "If you have any questions about this Privacy Policy, please contact us at info@fpwildlifepark.com or by calling us at (956) 710 - 2025." : "Si tiene alguna pregunta sobre esta Política de Privacidad, póngase en contacto con nosotros en info@fpwildlifepark.com o llamándonos al (956) 710 - 2025."}
                </p>
            </section>
        </main>
    );
};