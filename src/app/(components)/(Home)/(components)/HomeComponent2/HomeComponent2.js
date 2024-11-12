import Image from "next/image";
import tour1Image from "../../../../(assets)/safari-wagon-tour-green.png";
import tour4Image from "../../../../(assets)/tipsy-safari-orange.png";
import slothEncounter from "../../../../(assets)/sloth-encounter.png";
import Link from "next/link";

export function HomeComponent2({ language, tour1Link, tour1Description, tour4Price, tour4Link, tour4Description, tourDepartureDetails }) {

    return (
        <section className="home-component home-component-2">
            <div className="container">
                <div className="component-header">
                    <h2>{language === "English" ? "Discover Wildlife Wonders on Every Visit!" : "Descubra maravillas naturales en cada visita."}</h2>
                </div>
                <div className="component-description">
                    <p>{language === "English" ? "Don't miss out on these incredible experiences! Whether you're marveling at the sights from our Safari Wagon or revving up excitement on our VIP RTV Tour, you're guaranteed an adventure like no other. Book your tour today and discover the wildlife wonders that await!" : "No se pierda estas increíbles experiencias. Ya sea maravillándose con las vistas desde nuestro Safari Wagon o acelerando la emoción en nuestro Tour VIP en RTV, tiene garantizada una aventura sin igual. Reserve su excursión hoy mismo y descubra las maravillas que le esperan."}</p>
                </div>
                <div className={`tours-list`}>
                    <div className="tour-container tour-1">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-1" src={tour1Image} />
                            </div>
                            <div className="tour-name">
                                <p>{language === "English" ? "Safari Wagon Tour" : "Safari Wagon Tour"}</p>
                            </div>
                            <div className="tour-description">
                                {tour1Description}
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button green">
                                {
                                    typeof tour1Link === "string" ? (
                                        <Link href={tour1Link ? tour1Link : "/"}>
                                            <div className="book-tour-text">
                                                {language === "English" ? " Book tour" : " Reserva tour"}
                                            </div>
                                        </Link>
                                    ) : (
                                        <button onClick={tour1Link}>
                                            <div className="book-tour-text">
                                                {language === "English" ? " Book tour" : " Reserva tour"}
                                            </div>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tour-container tour-2">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-4" src={tour4Image} />
                            </div>
                            <div className="tour-name">
                                <p>{language === "English" ? "Tipsy Safari Sips With Sloths" : "Tipsy Safari Sips With Sloths"}</p>
                            </div>
                            <div className="tour-description">
                                {tour4Description}
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button orange">
                                {
                                    typeof tour4Link === "string" ? (
                                        <Link href={tour4Link ? tour4Link : "/"}>
                                            <div className="book-tour-text">
                                                {language === "English" ? " Book tour" : " Reserva tour"}
                                            </div>
                                        </Link>
                                    ) : (
                                        <button onClick={tour4Link}>
                                            <div className="book-tour-text">
                                                {language === "English" ? " Book tour" : " Reserva tour"}
                                            </div>
                                        </button>
                                    )
                                }
                            </div>
                            {
                                tour4Price ? (
                                    <div className="tour-price">
                                        <p className="per-person-text">{language === "English" ? "(Per Person)" : "(Por Persona)"}</p>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className="tour-container tour-3">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-4" src={slothEncounter} />
                            </div>
                            <div className="tour-name">
                                <p>{language === "English" ? "Sloth Encounter" : "Encountro con Sloths"}</p>
                            </div>
                            <div className="tour-description">
                                <p>{"This unforgettable experience takes you behind the scenes for an up-close and personal encounter with our beloved sloths, along with New World Birds and other fascinating South American animals."}</p>
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button orange">
                                <Link href={"https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/570281/?full-items=yes&flow=no"}>
                                    <div className="book-tour-text">
                                        {language === "English" ? " Book tour" : " Reserva tour"}
                                    </div>
                                </Link>
                            </div>
                            {
                                tour4Price ? (
                                    <div className="tour-price">
                                        <p className="per-person-text">{language === "English" ? "(Per Person)" : "(Por Persona)"}</p>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
                {
                    tourDepartureDetails ? (
                        <div className="component-description tour-departures">
                            <h2>{language === "English" ? "Tour Departures: 10 AM to 7 PM" : "Salidas de Tours: 10 AM a 7 PM"}</h2>
                            <p>{language === "English" ? "At Fragile Planet Wildlife Park we offer a variety of tours to provide you with an unforgettable experience exploring the wonders of our wildlife. Our tours depart regularly from 10 AM to 7 PM, ensuring you have ample opportunities to join us at a time that fits your schedule." : "En Fragile Planet Wildlife Park ofrecemos una gran variedad de excursiones para que disfrute de una experiencia inolvidable explorando las maravillas de nuestra fauna salvaje. Nuestros tours salen regularmente de 10 AM a 7 PM, asegurando que usted tiene amplias oportunidades para unirse a nosotros en un momento en que se adapte a su horario."}</p>
                        </div>
                    ) : null
                }
            </div>
        </section>
    );
};
