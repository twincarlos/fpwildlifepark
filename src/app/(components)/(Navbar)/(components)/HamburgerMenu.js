import Link from "next/link";
import "../../../globals.css";
import { HamburgerDropdownMenu } from "./HamburgerDropdownMenu";
import { MobileBigDropdownMenu } from "./MobileBigDropdownMenu";

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
            <MobileBigDropdownMenu
                // dropdownHeaderIcon={<i className="fa-solid fa-paw" />}
                setOpenMenu={setOpenMenu}
                dropdownHeaderValue="About"
                dropdownOptions={[
                    {
                        value: "Our Story", path: "/about/our-story", icon: <i className="fa-solid fa-hat-cowboy" />, description: "Discover the journey and mission behind our dedication to conservation and wildlife protection."
                    },
                    {
                        value: "Our Team", path: "/about/our-team", icon: <i className="fa-solid fa-users" />, description: "Meet the passionate and diverse team of experts who bring our vision to life."
                    },
                    {
                        value: "Education", path: "/about/education", icon: <i className="fa-solid fa-book-open-reader" />, description: "Explore our educational programs designed to inspire and inform all ages about wildlife conservation and environmental stewardship."
                    },
                    {
                        value: "Our Animals", path: "/about/our-animals", icon: <i className="fa-solid fa-cow" />, description: "Get to know the diverse species of animals and plants that call our park home."
                    }
                ]}
            />
            <MobileBigDropdownMenu
                // dropdownHeaderIcon={<i className="fa-solid fa-campground" />}
                setOpenMenu={setOpenMenu}
                dropdownHeaderValue="Contact Us"
                dropdownOptions={[
                    {
                        value: "Let's Connect", path: "/contact-us/lets-connect", icon: <i className="fa-regular fa-comments" />, description: "Stay connected with us through social media, newsletters, and events. Join our community and support our cause."
                    },
                    {
                        value: "Volunteer Application", path: "/contact-us/volunteer-application", icon: <i className="fa-brands fa-wpforms" />, description: "Become a part of our mission by volunteering with us. Fill out an application to join our team."
                    },
                    {
                        value: "Job Application", path: "/contact-us/job-application", icon: <i className="fa-brands fa-wpforms" />, description: "Looking for a career in wildlife conservation? Check out our job openings and apply to work with us."
                    },
                    {
                        value: "Internship Application", path: "/contact-us/internship-application", icon: <i className="fa-brands fa-wpforms" />, description: "Gain hands-on experience and learn from the experts by applying for an internship with us."
                    }
                ]}
            />
            {/* <HamburgerDropdownMenu
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
                        name: "Our Animals",
                        path: "/about/our-animals"
                    }
                ]}
            /> */}
            {/* <HamburgerDropdownMenu
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
            /> */}
        </div>
    );
};