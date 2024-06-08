import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../(assets)/logo.png";

export function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <Image alt="footer-logo" src={logo} />
                <div className="contact-us-info">
                    <p>34748 FM 2480</p>
                    <p>Los Frenos, TX 78566</p>
                    <Link href="tel:+9567102025">(956) 710 - 2025</Link>
                    <Link href="mailto:info@fpwildlifepark.com">info@fpwildlifepark.com</Link>
                </div>
            </div>
            <div className="footer-content">
                <div className="footer-row footer-row-1">
                    <Link href="/footer/accessibility-statement">Accessibility Statement</Link>
                    <Link href="/footer/privacy-policy">Privacy Policy</Link>
                    <Link href="/footer/terms-of-use">Terms of Use</Link>
                    <Link href="/contact-us/lets-connect">Contact Us</Link>
                </div>
                <div className="footer-row footer-row-2">
                    <Link href="/footer/tickets-terms-and-conditions">Tickets Terms & Conditions</Link>
                    <Link href="/footer/code-of-conduct">Code of Conduct</Link>
                </div>
                <div className="footer-row footer-row-3">
                    <p>© 2021 Fragile Planet Wildlife Park</p>
                </div>
            </div>
        </footer>
    );
};