"use client";
import "../Footer.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CodeOfConduct() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="page-header code-of-conduct-header">
                <h2>
                    {language === "English" ? "Fragile Planet Wildlife Park Code of Conduct" : "Codigo de Conducta de Fragile Planet Wildlife Park"}
                </h2>
            </section>
            <section className="page-content">
                <p>
                    {language === "English" ? "Fragile Planet Wildlife Park is dedicated to providing a safe and enjoyable experience for all guests, while ensuring the well-being of our animals and the park itself. To achieve this, we kindly ask all visitors to adhere to the following code of conduct:" : "Fragile Planet Wildlife Park se esfuerza por ofrecer una experiencia segura y agradable a todos los visitantes, garantizando al mismo tiempo el bienestar de nuestros animales y del propio parque. Para lograrlo, pedimos a todos los visitantes que respeten el siguiente código de conducta:"}
                </p>
                <strong>
                    {language === "English" ? "Dress Code:" : "Codigo de vestimenta"}
                </strong>
                <div>
                    <p>
                        {language === "English" ? "- We encourage guests to dress appropriately for the outdoors." : "- Animamos a los visitantes a que vistan adecuadamente para el aire libre."}
                    </p>
                    <p>
                        {language === "English" ? "- Closed-toed shoes with good tread are required for everyone's safety on uneven terrain." : "- Se requiere calzado cerrado con buen dibujo para la seguridad de todos en terrenos irregulares."}
                    </p>
                </div>
                <strong>
                    {language === "English" ? "Animal Interactions:" : "Interacciones con Animales"}
                </strong>
                <div>
                    <p>
                        {language === "English" ? "- The safety of our animals and guests is our top priority." : "- La seguridad de nuestros animales y huéspedes es nuestra máxima prioridad."}
                    </p>
                    <p>
                       {language === "English" ? "- Please follow all instructions provided by our staff regarding animal interactions." : "- Siga todas las instrucciones de nuestro personal sobre la interacción con los animales."}
                    </p>
                    <p>
                        {language === "English" ? "- This includes maintaining a safe distance, not feeding animals unauthorized items, and  refraining from loud noises or aggressive behavior." : "- Esto incluye mantener una distancia de seguridad, no alimentar a los animales con artículos no autorizados y abstenerse de ruidos fuertes o comportamientos agresivos."}
                    </p>
                    <p>
                        {language === "English" ? "- Staff reserves the right to remove guests who disregard safety protocols and put themselves or the animals at risk." : "- El personal se reserva el derecho de expulsar a los huéspedes que hagan caso omiso de los protocolos de seguridad y se pongan en peligro a sí mismos o a los animales."}
                    </p>
                </div>
                <strong>
                   {language === "English" ? "Respecting the Park:" : "Acerca del Parque:"}
                </strong>
                <div>
                    <p>
                        {language === "English" ? "- Fragile Planet Wildlife Park is committed to providing a clean and welcoming environment for all." : "- Fragile Planet Wildlife Park se compromete a proporcionar un entorno limpio y acogedor para todos."}
                    </p>
                    <p>
                        {language === "English" ? "- Please refrain from littering, vandalism, or any other behavior that could damage park property." : "- Por favor, absténgase de tirar basura, vandalismo o cualquier otro comportamiento que pueda dañar la propiedad del parque."}
                    </p>
                    <p>
                        {language === "English" ? "- Guests responsible for damaging park property will be held financially responsible for repairs or replacements." : "- Los huéspedes responsables de dañar la propiedad del parque serán responsables económicamente de las reparaciones o sustituciones."}
                    </p>
                    <p>
                        {language === "English" ? "- Staff reserves the right to remove guests who intentionally damage or misuse park facilities." : "- El personal se reserva el derecho de expulsar a los clientes que intencionadamente dañen o hagan un mal uso de las instalaciones del parque."}
                    </p>
                </div>
                <strong>
                    {language === "English" ? "General Conduct:" : "Conducta General:"}
                </strong>
                <p>
                    {language === "English" ? "- We ask all guests to be courteous and respectful towards other visitors and staff members." : "- Pedimos a todos los huéspedes que sean corteses y respetuosos con los demás visitantes y con los miembros del personal."}
                </p>
                <p>
                    {language === "English" ? "- Profanity, disorderly conduct, or disruptive behavior will not be tolerated" : "- No se tolerarán blasfemias, desórdenes públicos ni comportamientos perturbadores."}
                </p>
                <strong>
                    {language === "English" ? "Thank you for cooperating and helping us create a positive experience for everyone!" : "Gracias por colaborar y ayudarnos a crear una experiencia positiva para todos."}
                </strong>
            </section>
        </main>
    );
};