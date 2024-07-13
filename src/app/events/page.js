"use client"
import EventsHeader from "./(components)/EventsHeader";
import Image from "next/image";
import momsGoneWild from "../(assets)/moms-gone-wild.png";
import grandparentsDay from "../(assets)/grandparents-day.png";
import fathersDay from "../(assets)/fathers-day.png";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Events() {
    const {language} = useLanguage();
    return (
        <main>
            <EventsHeader language={language} />
            <section className="events-content">
                <div className="event">
                    <div className="events-img">
                        <Image src={momsGoneWild} />
                    </div>
                    <div className="events-details">
                        <div>
                            <h1 className="event-name">
                                <strong>
                                    {language === "English" ? "MOMS GONE WILD" : ""}
                                </strong>
                            </h1>
                            <p>
                                {language === "English" ? "EVERY THURSDAY" : ""}
                            </p>
                            <p>
                                {language === "English" ? "10 AM, 11 AM, 12 PM TOUR" : ""}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "Join us for a greet meet event for Mom’s to meet other Mom’s! Get FREE animal food for the animals & Enjoy a FREE Mimosa on the House! Come for a morning of animal fun and learn about our animal SAFARI ambassadors!" : ""}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "This includes admission to the:" : ""}
                            </p>
                            <p>
                                {language === "English" ? "- Safari Wagon Tour" : ""}
                            </p>
                            <p>
                                {language === "English" ? "- Kangaroo / Wallaby" : ""}
                            </p>
                            <p>
                                {language === "English" ? "- Petting Zoo" : ""}
                            </p>
                            <p>
                                {language === "English" ? "- Tent Mixer" : ""}
                            </p>
                            <p>
                                {language === "English" ? "- FREE Mimosa" : ""}
                            </p>
                            <p>
                                {language === "English" ? "- FREE Popsicles" : ""}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "**General admission will include one FREE small petting zoo feed cup per family. One FREE Mimosa per Mom.*" : ""}
                            </p>
                        </div>
                        <div className="book-event">
                            <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555949/?full-items=yes&flow=no">{language === "English" ? "Book Event" : ""}</Link>
                        </div>
                    </div>
                </div>
                <div className="event">
                    <div className="events-img">
                        <Image src={grandparentsDay} />
                    </div>
                    <div className="events-details">
                        <div>
                            <h1 className="event-name">
                                <strong>
                                    {language === "English" ? "GRANDPARENT'S DAY" : ""}
                                </strong>
                            </h1>
                            <p>
                                {language === "English" ? "EVERY MONDAY" : ""}
                            </p>
                            <p>
                                {language === "English" ? "10 AM, 11AM, 12PM TOUR" : ""}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "Join us for our GRANDPARENT'S DAY and receive a FREE small feed cup and your grandchild too. Come for a morning of animal fun and learn about our animal SAFARI ambassadors!" : ""}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "This includes admission to the:" : ""}
                            </p>
                            <p>
                                {language === "English" ? "- Safari Wagon Tour" : ""}
                            </p>
                            <p>
                               {language === "English" ? " - Kangaroo / Wallaby" : ""}
                            </p>
                            <p>
                                {language === "English" ? "- Petting Zoo" : ""}
                            </p>
                            <p>
                                {language === "English" ? "- Tent Mixer" : ""}
                            </p>
                            <p>
                                {language === "English" ? "- FREE Mimosa" : ""}
                            </p>
                            <p>
                               {language === "English" ? " - FREE Popsicles" : ""}
                            </p>
                        </div>
                        <div>
                            <p>
                                {language === "English" ? "**General admission will include one FREE small petting zoo feed cup per family. One FREE Mimosa per Mom.*" : ""}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};