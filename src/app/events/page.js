"use client"
import EventsHeader from "./(components)/EventsHeader";
import Image from "next/image";
import momsGoneWild from "../(assets)/moms-gone-wild.png";
import grandparentsDay from "../(assets)/grandparents-day.png";
import fathersDay from "../(assets)/fathers-day.png";
import backpackForKids from "../(assets)/backpack-for-kids.png";
import safariHomeSchoolDay from "../(assets)/safari-home-school-day.png";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import sipsWithSloths from "../(assets)/sips-with-sloths.png";
import tipsySafari from "../(assets)/tipsy-safari.png";

export default function Events() {
    const { language } = useLanguage();
    return (
        <main>
            <EventsHeader language={language} />
            <section className="events-content">
            <div className="event">
                    <div className="events-img">
                        <Image src={safariHomeSchoolDay} />
                    </div>
                    <div className="events-details">
                        <div>
                            <h1 className="event-name">
                                <strong>
                                    {language === "English" ? "Safari Home School Day" : "Safari Home School Day"}
                                </strong>
                            </h1>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "Get your little ones ready to return to school with our Back to School Weekend! Get free drawstring backpacks for your kids while enjoying a thrilling Safari Wagon Ride. Perfect for all ages, this event offers a unique chance to interact with fascinating animals and create unforgettable memories." : "Get your little ones ready to return to school with our Back to School Weekend! Get free drawstring backpacks for your kids while enjoying a thrilling Safari Wagon Ride. Perfect for all ages, this event offers a unique chance to interact with fascinating animals and create unforgettable memories."}
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <p>
                                {language === "English" ? "What's included:" : "Lo que incluye:"}
                            </p>
                            <p>
                                {language === "English" ? "- Safari Wagon Tour: Embark on an educational journey through our safari park, where you’ll learn about exotic animals in their natural habitats." : "- Safari Wagon Tour: Embark on an educational journey through our safari park, where you’ll learn about exotic animals in their natural habitats."}
                            </p>
                            <p>
                                {language === "English" ? "- Wallaby Walkabout: Get up close with our friendly wallabies and discover their unique behaviors." : "- Wallaby Walkabout: Get up close with our friendly wallabies and discover their unique behaviors."}
                            </p>
                            <p>
                                {language === "English" ? "- Amphibian Lab: Dive into the fascinating world of amphibians with hands-on encounters and educational insights." : "- Amphibian Lab: Dive into the fascinating world of amphibians with hands-on encounters and educational insights."}
                            </p>
                            <p>
                                {language === "English" ? "- Parrot Encounters: Meet our array of colorful parrots from around the World." : "- Parrot Encounters: Meet our array of colorful parrots from around the World."}
                            </p>
                            <p>
                                {language === "English" ? "- Gift Shop & Axolotls: Explore our gift shop and meet our fascinating axolotls, the \"Mexican walking fish.\"" : "- Gift Shop & Axolotls: Explore our gift shop and meet our fascinating axolotls, the \"Mexican walking fish.\""}
                            </p>
                            <p>
                                {language === "English" ? "- Optional Gem Mine: Pan for gems and uncover hidden treasures in our interactive gem mine experience." : "- Optional Gem Mine: Pan for gems and uncover hidden treasures in our interactive gem mine experience."}
                            </p>
                            <p>
                                {language === "English" ? "Join us for a day filled with discovery, learning, and unforgettable memories. Don’t miss out on this unique opportunity to bring your homeschool curriculum to life at Fragile Planet Wildlife Park!" : "Join us for a day filled with discovery, learning, and unforgettable memories. Don’t miss out on this unique opportunity to bring your homeschool curriculum to life at Fragile Planet Wildlife Park!"}
                            </p>
                            <p>
                                {language === "English" ? "Limited space ticketed event" : "Limited space ticketed event"}
                            </p>
                        </div>
                        <div className="book-event">
                            <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/570274/?full-items=yes&flow=no">{language === "English" ? "Book Event" : "Reserva Evento"}</Link>
                        </div>
                    </div>
                </div>
                <div className="event">
                    <div className="events-img">
                        <Image src={backpackForKids} />
                    </div>
                    <div className="events-details">
                        <div>
                            <h1 className="event-name">
                                <strong>
                                    {language === "English" ? "Back to School Weekend" : "Back to School Weekend"}
                                </strong>
                            </h1>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "Get your little ones ready to return to school with our Back to School Weekend! Get free drawstring backpacks for your kids while enjoying a thrilling Safari Wagon Ride. Perfect for all ages, this event offers a unique chance to interact with fascinating animals and create unforgettable memories." : "Get your little ones ready to return to school with our Back to School Weekend! Get free drawstring backpacks for your kids while enjoying a thrilling Safari Wagon Ride. Perfect for all ages, this event offers a unique chance to interact with fascinating animals and create unforgettable memories."}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "This event includes:" : "Este evento incluye:"}
                            </p>
                            <p>
                                {language === "English" ? "- Safari Wagon Rides" : "- Safari Wagon Rides"}
                            </p>
                            <p>
                                {language === "English" ? "- Parrot encounters" : "- Parrot encounters"}
                            </p>
                            <p>
                                {language === "English" ? "- Amphibian lab tour" : "- Amphibian lab tour"}
                            </p>
                            <p>
                                {language === "English" ? "- Wallaby Walkabout" : "- Wallaby Walkabout"}
                            </p>
                            <p>
                                {language === "English" ? "- Petting Zoo" : "- Petting Zoo"}
                            </p>
                            <p>
                                {language === "English" ? "- Axolotl Exhibit Merch in Gift Shop" : "- Axolotl Exhibit Merch in Gift Shop"}
                            </p>
                            <p>
                                {language === "English" ? "Book Priority Pass online or General Admission at ticket office." : "Book Priority Pass online or General Admission at ticket office."}
                            </p>
                        </div>
                        <div className="book-event">
                            <Link href="/tickets/safari-wagon-tour">{language === "English" ? "Book Event" : "Reserva Evento"}</Link>
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
