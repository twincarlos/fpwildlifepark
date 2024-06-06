import cell2Image from "../../../../assets/cell-2.png";
import cell3Image from "../../../../assets/cell-3.png";
import cell4Image from "../../../../assets/cell-4.png";
import Image from "next/image";

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
                    <div className="container-cell">
                        <div className="cell-details">
                            <div className="cell-title">
                                <p>Animals & Plants</p>
                            </div>
                            <div className="cell-description">
                                <p>Explore detailed profiles and fascinating facts about the diverse species of animals and plants at our park. Learn about their habitats, behaviors, and the conservation efforts dedicated to their protection.</p>
                            </div>
                        </div>
                        <div className="cell-image">
                            <Image alt="cell-detail" src={cell2Image} />
                        </div>
                    </div>
                </div>
                <div className="container-row">
                    <div className="container-cell">
                        <div className="cell-details">
                            <div className="cell-title">
                                <p>Education</p>
                            </div>
                            <div className="cell-description">
                                <p>Access a wealth of educational materials designed for all ages. From interactive lessons and activities to in-depth articles and videos, our resources aim to inspire and educate the next generation of wildlife advocates.</p>
                            </div>
                        </div>
                        <div className="cell-image">
                            <Image alt="cell-detail" src={cell3Image} />
                        </div>
                    </div>
                    <div className="container-cell">
                        <div className="cell-details">
                            <div className="cell-title">
                                <p>News & Events</p>
                            </div>
                            <div className="cell-description">
                                <p>Keep up with the latest news and upcoming events at Fragile Planet Wildlife Park. Discover exciting announcements, special programs, and opportunities to get involved in our conservation initiatives.</p>
                            </div>
                        </div>
                        <div className="cell-image">
                            <Image alt="cell-detail" src={cell4Image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};