import Link from "next/link";
import "../../../globals.css";

export function HamburgerMenu({ setOpenMenu }) {
    return (
        <div className="Small hamburger-menu-background">
            <div className="hamburger-menu-body">
                <div className="hamburger-menu-item-container hamburger-icon">
                    <div className="hamburger-menu-item">
                        <i onClick={() => setOpenMenu(false)} className="fa-solid fa-bars" />
                    </div>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/tickets">{/*<i className="fa-solid fa-ticket" />*/}Tickets</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/tours">{/*<i className="fa-solid fa-tractor" />*/}Tours</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/events">{/*<i className="fa-solid fa-calendar-days" />*/}Events</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container title-only">
                    <p>About</p>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/about/our-story">Our Story</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/about/our-team">Our Team</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/about/education">Education</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/about/animals-and-plants">Animals and Plants</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container title-only">
                    <p>Contact Us</p>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/contact-us/lets-connect">{"Let's Connect"}</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/contact-us/volunteer-application">Volunteer Application</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/contact-us/job-application">Job Application</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/contact-us/internship-application">Internship Application</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container title-only">
                    <p>Language</p>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/">English</Link>
                    </div>
                </div>
                <div className="hamburger-menu-item-container">
                    <div className="hamburger-menu-item">
                        <Link href="/">Spanish</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};