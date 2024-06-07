import "./LetsConnect.css";
import Link from "next/link";

export default function LetsConnect() {
    return (
        <main>
            <section className="lets-connect-header">
                <div>
                    <h2>Connect with Fragile Planet Wildlife Park</h2>
                </div>
            </section>
            <section className="lets-connect-description">
                <div>
                    <p>
                        {"Get in touch with us! Whether you're curious about our wildlife, conservation efforts, or planning your visit, we're here to assist you. Reach out to our team via phone, email, or visit us in person. We look forward to hearing from you and sharing our commitment to wildlife preservation!"}
                    </p>
                </div>
            </section>
            <section className="lets-connect-body">
                <div className="contact-us-form">
                    <div className="contact-us-form-row contact-us-form-row-1">
                        <label>
                            First name
                            <input type="text" />
                        </label>
                        <label>
                            Last name
                            <input type="text" />
                        </label>
                    </div>
                    <div className="contact-us-form-row contact-us-form-row-2">
                        <label>
                            Email
                            <input type="text" />
                        </label>
                        <label>
                            Subject
                            <input type="text" />
                        </label>
                    </div>
                    <div className="contact-us-form-row contact-us-form-row-3">
                        <label>
                            Leave us a message...
                            <input type="text" />
                        </label>
                    </div>
                    <div className="contact-us-form-row contact-us-form-row-4">
                        <button>Submit</button>
                    </div>
                </div>
                <div className="lets-connect-footer">
                    <div className="contact-us-info">
                        <p>34748 FM 2480</p>
                        <p>Los Frenos, TX 78566</p>
                        <Link href="tel:+9567102025">(956) 710 - 2025</Link>
                        <Link href="mailto:info@fpwildlifepark.com">info@fpwildlifepark.com</Link>
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
        </main>
    );
};