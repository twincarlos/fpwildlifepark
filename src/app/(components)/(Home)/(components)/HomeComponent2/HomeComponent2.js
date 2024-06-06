import Image from "next/image";
import tour1Image from "../../../../assets/tour-1.png";
import tour2Image from "../../../../assets/tour-2.png";
import tour3Image from "../../../../assets/tour-3.png";
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
                            </div>
                        </div>
                        <div className="tour-button">
                            <Link href="/">
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
                                    {"For an exclusive and personalized experience, our VIP ATV Tour offers the ultimate adventure. Spend two hours exploring our Safari Park on a private ATV ride, guided by our expert staff. You'll see magnificent animals up close, enjoy special activities not available to the public, and receive complimentary animal food for feeding."}
                                </p>
                            </div>
                        </div>
                        <div className="tour-button">
                            <Link href="/">
                                <i className="fa-solid fa-cart-shopping" />Book tour
                            </Link>
                        </div>
                    </div>
                    <div className="tour-container">
                        <div className="tour-body">
                            <div className="tour-image">
                                <Image alt="tour-3" src={tour3Image} />
                            </div>
                            <div className="tour-name">
                                <p>Safari Wagon Private Tour</p>
                            </div>
                            <div className="tour-description">
                                <p>
                                    Experience the wild in an exclusive setting with our Private Safari Wagon Tour for up to 20 people! Explore the habitats of our extraordinary animal ambassadors and enjoy intimate, educational encounters. Perfect for families, friends, or special occasions, this tour offers a unique and unforgettable connection with nature.
                                </p>
                            </div>
                        </div>
                        <div className="tour-button">
                            <Link href="/">
                                <i className="fa-solid fa-cart-shopping" />Book tour
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};