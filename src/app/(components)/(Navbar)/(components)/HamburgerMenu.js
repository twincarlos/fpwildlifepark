import Link from "next/link";
import "../../../globals.css";
import { HamburgerDropdownMenu } from "./HamburgerDropdownMenu";

export function HamburgerMenu({ setOpenMenu }) {
    return (
        <div className="hamburger-menu-body">
            <div className="hamburger-menu-item-container">
                <div className="hamburger-menu-item">
                    <Link onClick={() => setOpenMenu(false)} href="/tickets">Tickets</Link>
                </div>
            </div>
            <div className="hamburger-menu-item-container">
                <div className="hamburger-menu-item">
                    <Link onClick={() => setOpenMenu(false)} href="/tours">Tours</Link>
                </div>
            </div>
            <div className="hamburger-menu-item-container">
                <div className="hamburger-menu-item">
                    <Link onClick={() => setOpenMenu(false)} href="/events">Events</Link>
                </div>
            </div>
            <HamburgerDropdownMenu
                setOpenMenu={setOpenMenu}
                hamburgerDropdownTitle="About"
                hamburgerDropdownOptions={[
                    {
                        name: "Our Story",
                        path: "/about/our-story"
                    },
                    {
                        name: "Our Team",
                        path: "/about/our-team"
                    },
                    {
                        name: "Education",
                        path: "/about/education"
                    },
                    {
                        name: "Animals & Plants",
                        path: "/about/animals-and-plants"
                    }
                ]}
            />
            <HamburgerDropdownMenu
                setOpenMenu={setOpenMenu}
                hamburgerDropdownTitle="Contact Us"
                hamburgerDropdownOptions={[
                    {
                        name: "Let's Connect",
                        path: "/contact-us/lets-connect"
                    },
                    {
                        name: "Volunteer Application",
                        path: "/contact-us/volunteer-application"
                    },
                    {
                        name: "Job Application",
                        path: "/contact-us/job-application"
                    },
                    {
                        name: "Internship Application",
                        path: "/contact-us/internship-application"
                    }
                ]}
            />
        </div>
    );
};