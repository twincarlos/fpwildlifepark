import Image from "next/image";
import parkLocation from "../../../../(assets)/park-location.png";
import Link from "next/link";

export function HomeComponent4() {
    return (
        <section className="home-component home-component-4">
            <div className="container">
                <div className="park-location">
                    <Image alt="park-location" src={parkLocation} />
                </div>
                <div className="how-to-get-there">
                    <i className="how-to-get-there-icon fa-solid fa-location-dot" />
                    <p className="park-name">Fragile Planet Wildlife Park</p>
                    <h2 className="getting-there">Getting Here</h2>
                    <p className="park-address">34748 FM2480, Los Fresnos, TX 78566</p>
                    <p className="location-description">Fragile Planet Wildlife Park is located just outside of Natureville, nestled in the beautiful green landscapes, minutes from Brownsville and Harlingen.</p>
                    <Link href="https://maps.app.goo.gl/9vGc7XmMQP2GZHPG7" target="_blank" className="get-directions-button">Get Directions <i className="fa-solid fa-paper-plane" /></Link>
                </div>
            </div>
        </section>
    );
};