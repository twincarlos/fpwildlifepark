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
                    <p>{"Don't miss out on these incredible experiences! Whether you're marveling at the sights from our Safari Wagon or revving up excitement on our VIP ATV Tour, you're guaranteed an adventure like no other. Book your tour today and discover the wildlife wonders that await!"}</p>
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
                                <p>
                                    Join us for a wild ride on our Safari Wagon Tour! Get up close and personal with our incredible animal ambassadors as you journey through their habitats. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals.
                                </p>
                                <p>
                                    Your Safari Wagon Tour includes:
                                </p>
                                <p>
                                    A guided Safari Wagon Tour
                                </p>
                                <p>
                                    Visits to our Kangaroo and Wallaby exhibits
                                </p>
                                <p>
                                    Access to our charming Petting Zoo
                                </p>
                                <p>
                                    General Admission: $15
                                </p>
                                <p>
                                    Experience the thrill of the wild and create lasting memories with your loved ones. Book your Safari Wagon Tour today and let the adventure begin!
                                </p>
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
                                <p>
                                    {"For those seeking an exclusive and personalized experience, our VIP ATV Tour is the ultimate adventure. Spend two hours exploring our Safari Park on a private ATV ride, guided by our expert staff. You'll get to see our magnificent animals up close and enjoy special activities that are not available to the general public."}
                                </p>
                                <p>
                                    Your VIP ATV Tour includes:
                                </p>
                                <p>
                                    A thrilling 2-hour private ATV tour
                                </p>
                                <p>
                                    A guided Safari Wagon Sunset Tour
                                </p>
                                <p>
                                    Visits to our Kangaroo and Wallaby exhibits
                                </p>
                                <p>
                                    Access to our Petting Zoo
                                </p>
                                <p>
                                    Rhino Iguana Feeding experience
                                </p>
                                <p>
                                    Complimentary animal food for the feeding
                                </p>
                                <p>
                                    Private Tour: $200 (for up to 3 guests)
                                </p>
                                <p>
                                    This tour is designed for small groups of up to three guests, ensuring a personal and unforgettable experience.
                                </p>
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