import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../(assets)/logo.png";

export default function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <Image alt="footer-logo" src={logo} />
            </div>
            <div className="footer-content">
                <div className="footer-row footer-row-1">
                    <Link href="/footer/accessibility-statement">Accessibility Statement</Link>
                    <Link href="/footer/privacy-policy">Privacy Policy</Link>
                    <Link href="/footer/state-disclosures">State Disclosures</Link>
                    <Link href="/footer/terms-of-use">Terms of Use</Link>
                    <Link href="/contact-us/lets-connect">Contact Us</Link>
                </div>
                <div className="footer-row footer-row-2">
                    <Link href="/footer/tickets-terms-and-conditions">Tickets Terms & Conditions</Link>
                    <Link href="/footer/membership-terms-and-conditions">Membership Terms & Conditions</Link>
                    <Link href="/footer/code-of-conduct">Code of Conduct</Link>
                    <Link href="/footer/faq">FAQ</Link>
                </div>
                <div className="footer-row footer-row-3">
                    <p>© 2021 Fragile Planet Wildlife Park</p>
                </div>
            </div>
        </footer>
    );
};