"use client"
import EventsHeader from "./(components)/EventsHeader";
import Image from "next/image";
import safariHomeSchoolDay from "../(assets)/safari-home-school-day.png";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import sipsWithSloths from "../(assets)/sips-with-sloths.png";
import tipsySafari from "../(assets)/tipsy-safari.png";
import kidsEnterFree from "@/app/(assets)/kids-enter-free.png";
import christmasEvent from "@/app/(assets)/christmas-event.jpeg";

export default function Events() {
    const { language } = useLanguage();
    return (
        <main>
            <EventsHeader language={language} />
            <section className="events-content">
                <div className="event">
                    <div className="events-img">
                        <Image src={tipsySafari} />
                    </div>
                    <div className="events-details">
                        <div>
                            <h1 className="event-name">
                                <strong>
                                    {language === "English" ? "Tipsy Safari" : "Tipsy Safari"}
                                </strong>
                            </h1>
                            <p>
                                {language === "English" ? "ADULTS ONLY (21+)" : "SOLO ADULTOS (21+)"}
                            </p>
                            <p>
                                {language === "English" ? "Experience the excitement of Tipsy Safari Night, an exclusive adults-only adventure! Enjoy wine tastings, intimate animal encounters, and an educational amphibian lab tour. This special evening features adults-only safari wagon rides, perfect for couples, groups of friends, dates, or ladies' nights out." : "Viva la emoción de Tipsy Safari Night, una aventura exclusiva sólo para adultos. Disfrute de catas de vino, encuentros íntimos con animales y una visita educativa al laboratorio de anfibios. Esta velada especial incluye paseos en carromato safari solo para adultos, perfectos para parejas, grupos de amigos, citas o noches de chicas."}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "Your Tipsy Safari Night tour includes:" : "Su excursión Tipsy Safari incluye:"}
                            </p>
                            <p>
                                {language === "English" ? "- Safari Wagon Sunset Tour" : "- Safari Wagon Sunset Tour"}
                            </p>
                            <p>
                                {language === "English" ? "- Kangaroo / Wallaby" : "- Canguro / Wallaby"}
                            </p>
                            <p>
                                {language === "English" ? "- Petting Zoo" : "- Zoo de mascotas"}
                            </p>
                            <p>
                                {language === "English" ? "- Free 4 Station Wine Tasters" : "- Degustación gratuita de vinos en 4 estaciones"}
                            </p>
                            <p>
                                {language === "English" ? "Adult Admission: $35" : "Entrada para adultos: $35"}
                            </p>
                        </div>
                        <div className="book-event">
                            <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555960/?full-items=yes&flow=no">{language === "English" ? "Book Event" : "Reserva Evento"}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
