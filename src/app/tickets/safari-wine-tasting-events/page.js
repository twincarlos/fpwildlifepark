"use client";
import "../Tickets.css";
import "../../(components)/(Home)/Home.css";
import Image from "next/image";
import image1 from "../../(assets)/sips-with-sloths-orange.png";
import image2 from "../../(assets)/tipsy-safari-orange.png";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function SafariWineTastingEvents() {
    const {language} = useLanguage()
    return (
        <main className="safari-wine-tasting-events">
            <section className="safari-wine-tasting-events-header">
                <h2>Safari Wine Tasting Events</h2>
            </section>
            <section className="home-component home-component-2">
                <div className="container">
                    <div className="tours-list">
                        <div className="tour-container">
                            <div className="tour-body">
                                <div className="tour-image">
                                    <Image alt="tour-1" src={image1} />
                                </div>
                                <div className="tour-name">
                                    <p>{language === "English" ? "Sips With Sloths" : "Sips With Sloths"}</p>
                                </div>
                                <div className="tour-description">
                                    <p>{language === "English" ? "Enjoy relaxation, wine, and wildlife while supporting a great cause. Book your Sips with Sloths tickets today and experience a unique and memorable event!" : "Disfrute de la relajación, el vino y la vida salvaje mientras apoya una gran causa. Reserve hoy mismo sus entradas para Sips with Sloths y viva un evento único e inolvidable."}</p>
                                </div>
                            </div>
                            <div className="tour-footer">
                                <div className="tour-button orange">
                                    <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555960/?full-items=yes&flow=no">
                                        <div className="book-tour-text">
                                            {language === "English" ? " Book tour" : " Reserva tour"}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="tour-container">
                            <div className="tour-body">
                                <div className="tour-image">
                                    <Image alt="tour-2" src={image2} />
                                </div>
                                <div className="tour-name">
                                    <p>{language === "English" ? "Tipsy Safari" : "Tipsy Safari"}</p>
                                </div>
                                <div className="tour-description">
                                    <p>{language === "English" ? "Visit us this Friday night from 7-9 for Tipsy Safari Night. Join us for a night of fun, wine tasting, animal encounters, amphibian lab tours, and adults only safari wagon rides. Perfect for couples, friend groups, dates, or ladies nights. Ticket includes FREE wine tastings and food samples from The Fat Pelican- Louisiana Food Truck. Book at the park or call ahead to reserve your tickets." : "Visítenos este viernes por la noche de 7 a 9 para la Tipsy Safari Night. Acompáñenos en una noche de diversión, cata de vinos, encuentros con animales, visitas a laboratorios de anfibios y paseos en carromato safari sólo para adultos. Perfecto para parejas, grupos de amigos, citas o noches de chicas. La entrada incluye catas de vino GRATUITAS y muestras de comida de The Fat Pelican- Louisiana Food Truck. Reserve sus entradas en el parque o llame con antelación."}</p>
                                </div>
                            </div>
                            <div className="tour-footer">
                                <div className="tour-button orange">
                                    <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555956/?full-items=yes&flow=no">
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