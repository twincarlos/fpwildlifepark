"use client";
import Image from "next/image";
import tour1Image from "../../../../(assets)/tour-1.png";
import tour2Image from "../../../../(assets)/tour-2.png";
import tour3Image from "../../../../(assets)/tour-3.png";
import tour4Image from "../../../../(assets)/tour-4.png";
import Link from "next/link";

export function HomeComponent2({ tour1Price, tour1Description, tour2Price, tour2Description, tour2Link, tour3Price, tour3Description, tour3Link, tour4Price, tour4Link, tour4Description, tourDepartureDetails }) {
    return (
        <section className="home-component home-component-2">
            <div className="container">
                <div className="component-header">
                    <h2>Discover Wildlife Wonders on Every Visit!</h2>
                </div>
                <div className="component-description">
                    <p>{"Don't miss out on these incredible experiences! Whether you're marveling at the sights from our Safari Wagon or revving up excitement on our VIP RTV Tour, you're guaranteed an adventure like no other. Book your tour today and discover the wildlife wonders that await!"}</p>
                </div>
                <div className="tours-list">
                    <div className="tour-container">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-1" src={tour1Image} />
                            </div>
                            <div className="tour-name">
                                <p>Safari Wagon Tour</p>
                            </div>
                            <div className="tour-description">
                                {tour1Description}
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button">
                                <button onClick={() => alert("All $15 Safari Wagon Rides can only be booked at the park admission office. We accept pre-booked reservations for groups of 20 or more. Please contact us for more information or to make group reservations.")}>
                                    <div className="book-tour-text">
                                        <i className="fa-solid fa-ticket" /> Book at Park
                                    </div>
                                    {
                                        tour1Price ? (
                                            <div className="book-tour-price">
                                                <p className="tour-price-text">{tour1Price}</p>
                                            </div>
                                        ) : null
                                    }
                                </button>
                            </div>
                            {
                                tour1Price ? (
                                    <div className="tour-price">
                                        <p className="per-person-text">(Per Person)</p>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className="tour-container">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-2" src={tour2Image} />
                            </div>
                            <div className="tour-name">
                                <p>VIP RTV Tour</p>
                            </div>
                            <div className="tour-description">
                                {tour2Description}
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button">
                                <Link href={tour2Link ? tour2Link : "/"}>
                                    <div className="book-tour-text">
                                        <i className="fa-solid fa-ticket" /> Book tour
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
                                        <p className="per-person-text">(Private ATV)</p>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className="tour-container">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-3" src={tour3Image} />
                            </div>
                            <div className="tour-name">
                                <p>PRIVATE WAGON SAFARI</p>
                            </div>
                            <div className="tour-description">
                                {tour3Description}
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button">
                                <Link href={tour3Link ? tour3Link : "/"}>
                                    <div className="book-tour-text">
                                        <i className="fa-solid fa-ticket" /> Book tour
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
                                        <p className="per-person-text">(Entire Wagon)</p>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className="tour-container">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-4" src={tour4Image} />
                            </div>
                            <div className="tour-name">
                                <p>Tipsy Safari Night</p>
                            </div>
                            <div className="tour-description">
                                {tour4Description}
                            </div>
                        </div>
                        <div className="tour-footer">
                            <div className="tour-button">
                                <Link href={tour4Link ? tour4Link : "/"}>
                                    <div className="book-tour-text">
                                        <i className="fa-solid fa-ticket" /> Book tour
                                    </div>
                                    {
                                        tour4Price ? (
                                            <div className="book-tour-price">
                                                <p className="tour-price-text">{tour4Price}</p>
                                            </div>
                                        ) : null
                                    }
                                </Link>
                            </div>
                            {
                                tour4Price ? (
                                    <div className="tour-price">
                                        <p className="per-person-text">(Per Person)</p>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
                {
                    tourDepartureDetails ? (
                        <div className="component-description tour-departures">
                            <h2>Tour Departures: 10 AM to 7 PM</h2>
                            <p>{"At Fragile Planet Wildlife Park we offer a variety of tours to provide you with an unforgettable experience exploring the wonders of our wildlife. Our tours depart regularly from 10 AM to 7 PM, ensuring you have ample opportunities to join us at a time that fits your schedule."}</p>
                        </div>
                    ) : null
                }
            </div>
        </section>
    );
};
