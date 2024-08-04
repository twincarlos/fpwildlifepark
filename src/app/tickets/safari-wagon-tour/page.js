"use client";
import "../Tickets.css";
import "../../(components)/(Home)/Home.css";
import Image from "next/image";
import image1 from "../../(assets)/safari-wagon-tour-priority-pass-green.png";
import image2 from "../../(assets)/safari-wagon-tour-general-admission-green.png";
import image3 from "../../(assets)/safari-wagon-tour-private-wagon-safari-green.png";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function SafariWagonTour() {
    const {language} = useLanguage()
    return (
        <main className="safari-wagon-tour">
            <section className="safari-wagon-tour-header">
                <h2>Safari Wagon Tour</h2>
            </section>
            <section className="home-component home-component-2">
                <div className="container">
                    <div className="tours-list">
                        <div className="tour-container swt-1">
                            <div className="tour-body">
                                <div className="tour-image">
                                    <Image alt="tour-1" src={image1} />
                                </div>
                                <div className="tour-name">
                                    <p>{language === "English" ? "Priority Pass" : "Priority Pass"}</p>
                                </div>
                                <div className="tour-description">
                                    <p>{language === "English" ? "Skip the line and guarantee your ride with our Priority Pass! Join us for a wild ride on our Safari Wagon Tour, where you can get up close and personal with our incredible animal ambassadors. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals" : "Sáltese las colas y garantice su viaje con nuestro Pase Prioritario. Acompáñenos en un viaje salvaje en nuestro Safari Wagon Tour, donde podrá conocer de cerca a nuestros increíbles animales embajadores. Esta visita familiar es perfecta para todas las edades y ofrece una oportunidad única de conocer e interactuar con una gran variedad de animales."}</p>
                                </div>
                            </div>
                            <div className="tour-footer">
                                <div className="tour-button green">
                                    <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/566856/?full-items=yes&flow=no">
                                        <div className="book-tour-text">
                                            {language === "English" ? " Book tour" : " Reserva tour"}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="tour-container swt-2">
                            <div className="tour-body">
                                <div className="tour-image">
                                    <Image alt="tour-2" src={image2} />
                                </div>
                                <div className="tour-name">
                                    <p>{language === "English" ? "General Admission" : "General Admission"}</p>
                                </div>
                                <div className="tour-description">
                                    <p>{language === "English" ? "Join us for a wild ride on our Safari Wagon Tour! Get up close and personal with our incredible animal ambassadors as you journey through our Safari Park. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals." : "Acompáñenos en un viaje salvaje en nuestro Safari Wagon Tour. Conozca de cerca a nuestros increíbles animales embajadores mientras recorre nuestro Safari Park. Este tour familiar es perfecto para todas las edades y ofrece una oportunidad única para aprender e interactuar con una gran variedad de animales."}</p>
                                </div>
                            </div>
                            <div className="tour-footer">
                                <div className="tour-button green">
                                    <button onClick={() => alert(language === "English" ? "All $15 Safari Wagon Rides can only be booked at the park admission office. We accept pre-booked reservations for groups of 20 or more. Please contact us for more information or to make group reservations." : "Todos los paseos en vagón safari de 15 $ sólo pueden reservarse en la oficina de admisión del parque. Aceptamos reservas anticipadas para grupos de 20 personas o más. Póngase en contacto con nosotros para obtener más información o para hacer reservas de grupo.")}>
                                        <div className="book-tour-text">
                                            {language === "English" ? " Book tour" : " Reserva tour"}
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="tour-container swt-3">
                            <div className="tour-body">
                                <div className="tour-image">
                                    <Image alt="tour-3" src={image3} />
                                </div>
                                <div className="tour-name">
                                    <p>{language === "English" ? "Private Wagon Safari" : "Private Wagon Safari"}</p>
                                </div>
                                <div className="tour-description">
                                    <p>{language === "English" ? "Experience the wild in an exclusive setting with our Private Safari Wagon Tour for up to 40 people! Explore the habitats of our extraordinary animal ambassadors and enjoy intimate, educational encounters. Perfect for large families, friends, or special occasions, this tour offers a unique and unforgettable connection with nature." : "Experimente la naturaleza salvaje en un entorno exclusivo con nuestra Excursión Privada en Vagón Safari para un máximo de 40 personas. Explore los hábitats de nuestros extraordinarios animales embajadores y disfrute de encuentros íntimos y educativos. Perfecto para familias numerosas, amigos u ocasiones especiales, este tour ofrece una conexión única e inolvidable con la naturaleza."}</p>
                                </div>
                            </div>
                            <div className="tour-footer">
                                <div className="tour-button green">
                                    <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555462/?full-items=yes&flow=no">
                                        <div className="book-tour-text">
                                            {language === "English" ? " Book tour" : " Reserva tour"}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};