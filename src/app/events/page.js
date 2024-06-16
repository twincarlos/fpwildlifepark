import EventsHeader from "./(components)/EventsHeader";
import Image from "next/image";
import momsGoneWild from "../(assets)/moms-gone-wild.png";
import grandparentsDay from "../(assets)/grandparents-day.png";
import fathersDay from "../(assets)/fathers-day.png";
import Link from "next/link";

export default function Events() {
    return (
        <main>
            <EventsHeader />
            <section className="events-content">
                <div className="event">
                    <div className="events-img">
                        <Image src={momsGoneWild} />
                    </div>
                    <div className="events-details">
                        <div>
                            <h1 className="event-name">
                                <strong>
                                    MOMS GONE WILD
                                </strong>
                            </h1>
                            <p>
                                EVERY THURSDAY
                            </p>
                            <p>
                                10 AM, 11 AM, 12 PM TOUR
                            </p>
                        </div>
                        <div>
                            <p>
                                {"Join us for a greet meet event for Mom’s to meet other Mom’s! Get FREE animal food for the animals & Enjoy a FREE Mimosa on the House! Come for a morning of animal fun and learn about our animal SAFARI ambassadors!"}
                            </p>
                        </div>
                        <div>
                            <p>
                                This includes admission to the:
                            </p>
                            <p>
                                - Safari Wagon Tour
                            </p>
                            <p>
                                - Kangaroo / Wallaby
                            </p>
                            <p>
                                - Petting Zoo
                            </p>
                            <p>
                                - Tent Mixer
                            </p>
                            <p>
                                - FREE Mimosa
                            </p>
                            <p>
                                - FREE Popsicles
                            </p>
                        </div>
                        <div>
                            <p>
                                **General admission will include one FREE small petting zoo feed cup per family. One FREE Mimosa per Mom.*
                            </p>
                        </div>
                        <div className="book-event">
                            <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555949/?full-items=yes&flow=no">Book Event</Link>
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
                                    {"GRANDPARENT'S DAY"}
                                </strong>
                            </h1>
                            <p>
                                EVERY MONDAY
                            </p>
                            <p>
                                10 AM, 11AM, 12PM TOUR
                            </p>
                        </div>
                        <div>
                            <p>
                                {"Join us for our GRANDPARENT'S DAY and receive a FREE small feed cup and your grandchild too. Come for a morning of animal fun and learn about our animal SAFARI ambassadors!"}
                            </p>
                        </div>
                        <div>
                            <p>
                                This includes admission to the:
                            </p>
                            <p>
                                - Safari Wagon Tour
                            </p>
                            <p>
                                - Kangaroo / Wallaby
                            </p>
                            <p>
                                - Petting Zoo
                            </p>
                            <p>
                                - Tent Mixer
                            </p>
                            <p>
                                - FREE Mimosa
                            </p>
                            <p>
                                - FREE Popsicles
                            </p>
                        </div>
                        <div>
                            <p>
                                **General admission will include one FREE small petting zoo feed cup per family. One FREE Mimosa per Mom.*
                            </p>
                        </div>
                    </div>
                </div>
                <div className="event">
                    <div className="events-img">
                        <Image src={fathersDay} />
                    </div>
                    <div className="events-details">
                        <div>
                            <h1 className="event-name">
                                <strong>
                                    {"Father’s Day"}
                                </strong>
                            </h1>
                            <p>
                                General admission: $15 / Dads FREE
                            </p>
                        </div>
                        <div>
                            <p>
                                {"Free Admission for Dads on Father's Day! Join us for a wild ride in our Safari Wagon Tour, experience our Kangaroo & Wallaby Walkabout, and our Petting Zoo! Experience animals like never before and learn about our animal SAFARI ambassadors."}
                            </p>
                        </div>
                        <div>
                            <p>
                                This includes admission to the:
                            </p>
                            <p>
                                - Safari Wagon Tour
                            </p>
                            <p>
                                - Kangaroo / Wallaby
                            </p>
                            <p>
                                - Petting Zoo
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};