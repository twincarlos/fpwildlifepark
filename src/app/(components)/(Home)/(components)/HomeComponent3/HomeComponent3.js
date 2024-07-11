import Link from "next/link";

export function HomeComponent3() {
    return (
        <section className="home-component home-component-3">
            <div className="container">
                <div className="container-row">
                    <div className="container-cell main-cell">
                        <div className="component-header">
                            <h2>News & Resources</h2>
                        </div>
                        <div className="component-description">
                            <p>Stay informed and engaged with the latest from Fragile Planet Wildlife Park. Our News & Resources section is your go-to source for comprehensive updates and valuable information.</p>
                        </div>
                    </div>
                    <div className="container-cell cell-2">
                        <div className="cell-description">
                            <p>Our Animals</p>
                        </div>
                        <Link href="/about/our-animals" className="cell-image">
                            <p>
                                Explore detailed profiles and fascinating facts about the diverse species of animals and plants at our park. Learn about their habitats, behaviors, and the conservation efforts dedicated to their protection.
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="container-row">
                    <div className="container-cell cell-3">
                        <div className="cell-description">
                            <p>Education</p>
                        </div>
                        <Link href="/about/education" className="cell-image">
                            <p>
                                Access a wealth of educational materials designed for all ages. From interactive lessons and activities to in-depth articles and videos, our resources aim to inspire and educate the next generation of wildlife advocates.
                            </p>
                        </Link>
                    </div>
                    <div className="container-cell cell-4">
                        <div className="cell-description">
                            <p>News & Events</p>
                        </div>
                        <Link href="/events" className="cell-image">
                            <p>
                                Keep up with the latest news and upcoming events at Fragile Planet Wildlife Park. Discover exciting announcements, special programs, and opportunities to get involved in our conservation initiatives.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};