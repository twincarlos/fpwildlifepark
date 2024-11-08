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
                        <Image src={christmasEvent} />
                    </div>
                    <div className="events-details">
                        <div>
                            <h1 className="event-name">
                                <strong>
                                    {language === "English" ? "Pancakes with Santa at Fragile Planet Wildlife Park!" : "Pancakes con Santa en Fragile Planet Wildlife Park!"}
                                </strong>
                            </h1>
                            <p>
                                {language === "English" ? "Create holiday memories to last a lifetime with an unforgettable experience at Fragile Planet Wildlife Park! Meet the RGV’s most authentic Santa and Mrs. Claus, and enjoy holiday fun for the whole family." : "Create holiday memories to last a lifetime with an unforgettable experience at Fragile Planet Wildlife Park! Meet the RGV’s most authentic Santa and Mrs. Claus, and enjoy holiday fun for the whole family."}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "Each ticket includes:" : "Each ticket includes:"}
                            </p>
                            <p>
                                {language === "English" ? "- Professionally taken photos with Santa and a free 4x6 print (additional print packages available)" : "- Professionally taken photos with Santa and a free 4x6 print (additional print packages available)"}
                            </p>
                            <p>
                                {language === "English" ? "- Ornament-making with Mrs. Claus" : "- Ornament-making with Mrs. Claus"}
                            </p>
                            <p>
                                {language === "English" ? "- Festive Christmas Music" : "- Festive Christmas Music"}
                            </p>
                            <p>
                                {language === "English" ? "- Petting Zoo" : "- Petting Zoo"}
                            </p>
                            <p>
                                {language === "English" ? "- Animal Encounters" : "- Animal Encounters"}
                            </p>
                            <p>
                                {language === "English" ? "- Frog Lab Tours" : "- Frog Lab Tours"}
                            </p>
                            <p>
                                {language === "English" ? "- Axolotl Gift Shop" : "- Axolotl Gift Shop"}
                            </p>
                            <p>
                                {language === "English" ? "- Free pancake breakfast with toppings" : "- Free pancake breakfast with toppings"}
                            </p>
                        </div>
                        <div className="book-event">
                            <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/587520/?full-items=yes&flow=no">{language === "English" ? "Book Event" : "Reserva Evento"}</Link>
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
