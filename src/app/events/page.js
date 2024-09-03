"use client"
import EventsHeader from "./(components)/EventsHeader";
import Image from "next/image";
import safariHomeSchoolDay from "../(assets)/safari-home-school-day.png";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import sipsWithSloths from "../(assets)/sips-with-sloths.png";
import tipsySafari from "../(assets)/tipsy-safari.png";
import kidsEnterFree from "@/app/(assets)/kids-enter-free.png";

export default function Events() {
    const { language } = useLanguage();
    return (
        <main>
            <EventsHeader language={language} />
            <section className="events-content">
                <div className="event">
                    <div className="events-img">
                        <Image src={kidsEnterFree} />
                    </div>
                    <div className="events-details">
                        <div>
                            <h1 className="event-name">
                                <strong>
                                    {language === "English" ? "Kids Enter Free" : "Niños Entran Gratis"}
                                </strong>
                            </h1>
                        </div>
                        <div>
                            <p>We're extending the promotion to next weekend as Bonus Days!</p>
                        </div>
                        <div>
                            <p>FREE Kids Entry this September 7 & 8. Celebrate Labor Day Weekend at Fragile Planet Wildlife Park! </p>
                        </div>
                        <div>
                            <p>Bring the whole family for an unforgettable adventure! Admit one FREE child per paying adult!  Explore everything we have to offer, including:</p>
                        </div>
                        <div>
                            <p>Safari Ride – Get up close with majestic wildlife</p>
                            <p>Petting Zoo – Hands-on fun with our friendly animals</p>
                            <p>Parrot Experience – Meet our colorful feathered friends</p>
                            <p>Amphibian Lab – Discover the wonders of the amphibian world</p>
                            <p>Reptile Discovery – Learn about fascinating reptiles</p>
                            <p>Iguana Fishing (optional) – A unique, interactive experience</p>
                            <p>Gem Mine (optional) – Uncover hidden treasures</p>
                        </div>
                        <div>
                            <p>Adults pay just $15 for all this excitement! Don't miss out on this wild adventure!</p>
                        </div>
                        <div>
                            <p>Not valid with other discounts or offers. One FREE child per paying adult.</p>
                        </div>
                        <div>
                            <p>September 7 & 8 last days of promotion!</p>
                        </div>
                        <div>
                            <p>Thank you RGV! We SOLD OUT 2 days this weekend,</p>
                        </div>
                        <div>
                            <p>You must come to the park office to redeem the promo. We cannot accept free child bookings over the phone or online.</p>
                        </div>
                        <div>
                            <p>Book Priority Passes online to guarantee your seats this weekend!</p>
                        </div>
                        <div className="book-event">
                            <Link href="/tickets">{language === "English" ? "Book Event" : "Reserva Evento"}</Link>
                        </div>
                    </div>
                </div>
                <div className="event">
                    <div className="events-img">
                        <Image src={sipsWithSloths} />
                    </div>
                    <div className="events-details">
                        <div>
                            <h1 className="event-name">
                                <strong>
                                    {language === "English" ? "Sips With Sloths" : "Sips With Sloths"}
                                </strong>
                            </h1>
                            <p>
                                {language === "English" ? "ADULTS ONLY (21+)" : "SOLO ADULTOS (21+)"}
                            </p>
                            <p>
                                {language === "English" ? "Drink Wine and Support Sloth Conservation!" : "Veve Vino y Apoya los Conservacion de los Perezosos!"}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "This event is a great way to have fun with other adults and meet animals from around the world including sloths, kangaroos, safari animals and more! Proceeds from the event go directly to support a non profit jungle hospital for sloths in Costa Rica!" : "Este evento es una forma estupenda de divertirse con otros adultos y conocer animales de todo el mundo, como perezosos, canguros, animales de safari y muchos más. Los beneficios del evento se destinarán directamente a un hospital de la selva sin ánimo de lucro para perezosos en Costa Rica."}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "This includes admission to the:" : "Esto incluye accesso a:"}
                            </p>
                            <p>
                                {language === "English" ? "- Wine Tastings" : "- Degustacion de Vinos"}
                            </p>
                            <p>
                                {language === "English" ? "- Sloth Encounters and Photo Opportunity" : "- Encuentros con perezosos y oportunidad para tomar fotos"}
                            </p>
                            <p>
                                {language === "English" ? "- Mini Safari Wagon Ride" : "- Atraccion de Mini Safari Wagon"}
                            </p>
                            <p>
                                {language === "English" ? "- Animal Encounters and Feedings" : "- Encuentros con animales y alimentación"}
                            </p>
                            <p>
                                {language === "English" ? "- Mixer and Small Plates from Fat Pelican Food Truck" : "- Mezclador y pequeños platos de Fat Pelican Food Truck"}
                            </p>
                        </div>
                        <div className="book-event">
                            <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555960/?full-items=yes&flow=no">{language === "English" ? "Book Event" : "Reserva Evento"}</Link>
                        </div>
                    </div>
                </div>
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
                            <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555956/?full-items=yes&flow=no">{language === "English" ? "Book Event" : "Reserva Evento"}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
