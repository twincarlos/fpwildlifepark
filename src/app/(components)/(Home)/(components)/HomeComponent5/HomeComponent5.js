import Link from "next/link";

export function HomeComponent5() {
    return (
        <section className="home-component home-component-5">
            <div className="container">
                <div className="email-icon">
                    <i className="fa-regular fa-envelope" />
                    <p>Subscribe to Our Newsletter</p>
                </div>
                <div className="sign-up-text">
                    <h2>Stay updated on wildlife news, zoo activities, and exclusive offers.</h2>
                </div>
                <div className="sign-up-form">
                    <input type="text" placeholder="Email Address" />
                    <button>Submit</button>
                </div>
                <div className="follow-us-container">
                    <div className="follow-us-text">
                        <h2>Follow Us</h2>
                    </div>
                    <div className="social-media-links">
                        <Link href="https://m.facebook.com/FragilePlanetWildlifePark" target="_blank"><i className="fa-brands fa-facebook" /></Link>
                        <Link href="https://www.instagram.com/fragileplanetwildlifepark" target="_blank"><i className="fa-brands fa-instagram" /></Link>
                        <Link href="https://www.tiktok.com/@fragileplanetsafaripark" target="_blank"><i className="fa-brands fa-tiktok" /></Link>
                        <Link href="https://www.youtube.com/@FragilePlanetWildlifePark" target="_blank"><i className="fa-brands fa-youtube" /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};