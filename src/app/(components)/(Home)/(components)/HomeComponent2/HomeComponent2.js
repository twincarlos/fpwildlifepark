"use client";
import Image from "next/image";
import tour1Image from "../../../../(assets)/safari-wagon-tour-green.png";
import tour2Image from "../../../../(assets)/tour-2.png";
import tour3Image from "../../../../(assets)/tour-3.png";
import tour4Image from "../../../../(assets)/safari-wine-tasting-events-orange.png";
import teachersEnterFree from "../../../../(assets)/teachers-enter-free.png";
import Link from "next/link";
import { useState } from "react";

export function HomeComponent2({ language, tour1Link, tour5Price, tour5Link, tour5Description, tour1Price, tour1Description, tour2Price, tour2Description, tour2Link, tour3Price, tour3Description, tour3Link, tour4Price, tour4Link, tour4Description, tourDepartureDetails }) {
    const [containerNumber, setContainerNumber] = useState("1");

    return (
        <section className="home-component home-component-2">
            <div className="container">
                <div className="component-header">
                    <h2>{language === "English" ? "Discover Wildlife Wonders on Every Visit!" : "Descubra maravillas naturales en cada visita."}</h2>
                </div>
                <div className="component-description">
                    <p>{language === "English" ? "Don't miss out on these incredible experiences! Whether you're marveling at the sights from our Safari Wagon or revving up excitement on our VIP RTV Tour, you're guaranteed an adventure like no other. Book your tour today and discover the wildlife wonders that await!" : "No se pierda estas increíbles experiencias. Ya sea maravillándose con las vistas desde nuestro Safari Wagon o acelerando la emoción en nuestro Tour VIP en RTV, tiene garantizada una aventura sin igual. Reserve su excursión hoy mismo y descubra las maravillas que le esperan."}</p>
                </div>
                <div className={`tours-list tour-container-${containerNumber}`}>
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
                    <div className="tour-container">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-5" src={teachersEnterFree} />
                            </div>
                            <div className="tour-name">
                                <p style={{ width: "200px" }}>{language === "English" ? "Teachers Enter Free" : "Teachers Enter Free"}</p>
                            </div>
                            <div className="tour-description">
                                {tour5Description}
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button blue">
                                <button onClick={() => alert("All free tickets for teachers must be obtained at the park's ticket office. Entry will be validated by presenting a teacher ID. Visit us in August to enjoy free admission and meet the incredible animals at Fragile Planet!")}>
                                    <div className="book-tour-text">
                                        {language === "English" ? " Book tour" : " Reserva tour"}
                                    </div>
                                </button>
                            </div>
                            {
                                tour5Price ? (
                                    <div className="tour-price">
                                        <p className="per-person-text">{language === "English" ? "(Per Person)" : "(Por Persona)"}</p>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    {/* {tour2Description && <div className="tour-container">
    
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-2" src={tour2Image} />
                            </div>
                            <div className="tour-name">
                                <p>{language === "English" ? "VIP RTV Tour" : "VIP RTV Tour"}</p>
                            </div>
                            <div className="tour-description">
                                {tour2Description}
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button">
                                <Link href={tour2Link ? tour2Link : "/"}>
                                    <div className="book-tour-text">
                                        <i className="fa-solid fa-ticket" />{language === "English" ? " Book tour" : " Reserva tour"}
                                    </div>
                                    {
                                        tour2Price ? (
                                            <div className="book-tour-price">
                                                <p className="tour-price-text">{tour2Price}</p>
                                            </div>
                                        ) : null
                                    }
                                </Link>
                            </div>
                            {
                                tour2Price ? (
                                    <div className="tour-price">
                                        <p className="per-person-text">{language === "English" ? "(Private ATV)" : "(ATV Privado)"}</p>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>} */}
                    {/* <div className="tour-container">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-3" src={tour3Image} />
                            </div>
                            <div className="tour-name">
                                <p>{language === "English" ? "PARTY SAFARI" : "PARTY SAFARI"}</p>
                            </div>
                            <div className="tour-description">
                                {tour3Description}
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button">
                                <Link href={tour3Link ? tour3Link : "/"}>
                                    <div className="book-tour-text">
                                        <i className="fa-solid fa-ticket" />{language === "English" ? " Book tour" : " Reserva tour"}
                                    </div>
                                    {
                                        tour3Price ? (
                                            <div className="book-tour-price">
                                                <p className="tour-price-text">{tour3Price}</p>
                                            </div>
                                        ) : null
                                    }
                                </Link>
                            </div>
                            {
                                tour3Price ? (
                                    <div className="tour-price">
                                        <p className="per-person-text">{language === "English" ? "(Entire Wagon)" : "(Vagon Entero)"}</p>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div> */}
                    <div className="tour-container tour-2">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-4" src={tour4Image} />
                            </div>
                            <div className="tour-name">
                                <p>{language === "English" ? "Safari Wine Tasting Events" : "Safari Wine Tasting Events"}</p>
                            </div>
                            <div className="tour-description">
                                {tour4Description}
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button orange">
                                {/* <Link href={tour4Link ? tour4Link : "/"}>
                                    <div className="book-tour-text">
                                        <i className="fa-solid fa-ticket" />{language === "English" ? " Book tour" : " Reserva tour"}
                                    </div>
                                    {
                                        tour4Price ? (
                                            <div className="book-tour-price">
                                                <p className="tour-price-text">{tour4Price}</p>
                                            </div>
                                        ) : null
                                    }
                                </Link> */}
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
