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
                                    <Image alt="tour-2" src={image2} />
                                </div>
                                <div className="tour-name">
                                    <p>{language === "English" ? "Tipsy Safari" : "Tipsy Safari"}</p>
                                </div>
                                <div className="tour-description">
                                    <p>{language === "English" ? "Enjoy relaxation, wine and wildlife while supporting a great cause. Book your Tipsy Safari tickets today and experience a unique and memorable moment." : "Enjoy relaxation, wine and wildlife while supporting a great cause. Book your Tipsy Safari tickets today and experience a unique and memorable moment."}</p>
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
                    </div>
                </div>
            </section>
        </main>
    );
};
