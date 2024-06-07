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
                    <Link href="/">Accessibility Statement</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">State Disclosures</Link>
                    <Link href="/">Terms of Use</Link>
                    <Link href="/">Contact Us</Link>
                </div>
                <div className="footer-row footer-row-2">
                    <Link href="/">Tickets Terms & Conditions</Link>
                    <Link href="/">Membership Terms & Conditions</Link>
                    <Link href="/">Code of Conduct</Link>
                    <Link href="/">FAQ</Link>
                </div>
                <div className="footer-row footer-row-3">
                    <p>© 2021 Fragile Planet Wildlife Park</p>
                </div>
            </div>
        </footer>
    );
};