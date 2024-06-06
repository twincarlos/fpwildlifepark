import Image from "next/image";
import tour1Image from "../../../../assets/tour-1.png";
import tour2Image from "../../../../assets/home-component-1-background-image.png";
import Link from "next/link";

export function HomeComponent2() {
    return (
        <section className="home-component home-component-2">
            <div className="container">
                <div className="component-header">
                    <h2>Discover Wildlife Wonders on Every Tour!</h2>
                </div>
                <div className="component-description">
                    <p>{"Embark on an unforgettable adventure and witness the magic of the animal kingdom with our exclusive tours. Whether you're looking for a fun-filled family outing or an intimate experience with nature, we have the perfect tour for you. Book now and dive into the wild wonders of our animal park!"}</p>
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
                                <p>General admission: $15</p>
                                <p>Time: 8:00 am - 8:00 pm</p>
                                <p>
                                    Join us for a wild ride in our Safari Wagon Tour. Experience animals like never before
                                    and learn about our animal SAFARI ambassadors.
                                </p>
                                <p>This includes admission to the:</p>
                                <p>- Safari Wagon Tour</p>
                                <p>- Kangaroo / Wallaby</p>
                                <p>- Petting Zoo</p>
                            </div>
                        </div>
                        <div className="tour-button">
                            <Link className="primary-color" href="/">
                                <i className="fa-solid fa-cart-shopping" />Book tour
                            </Link>
                        </div>
                    </div>
                    <div className="tour-container">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-2" src={tour2Image} />
                            </div>
                            <div className="tour-name">
                                <p>VIP ATV Tour</p>
                            </div>
                            <div className="tour-description">
                                <p>{"TIMES: 8:45, 9:45,……., 7:45 (last one)"}</p>
                                <p>
                                    2 hour private ATV tour through our Safari Park where you will get to experience animals like never before.
                                    Come for an evening of animal fun and learn about our animal SAFARI ambassadors!
                                </p>
                                <p>Our private ATV Tour is $200 and is good for up to 3 guests.  This private tour includes free animal food for the animals.</p>
                                <p>This includes admission to the:</p>
                                <p>- Safari Wagon Sunset Tour</p>
                                <p>- Kangaroo / Wallaby</p>
                                <p>- Petting Zoo</p>
                                <p>- Rhino Iguana Feeding</p>
                                <p>2 hours</p>
                                <p>*Your booked time starts right on time. Please be early to take advantage of your 2 hr tour.</p>
                            </div>
                        </div>
                        <div className="tour-button">
                            <Link className="secondary-color" href="/">
                                <i className="fa-solid fa-cart-shopping" />Book tour
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};