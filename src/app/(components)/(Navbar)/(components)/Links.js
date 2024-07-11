"use client";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { BigDropdownMenu } from "./BigDropdownMenu";

export function Links() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="links">
            <Link className="Large nav-link" href="/tickets"><i className="fa-solid fa-ticket" />Tickets</Link>
            <Link className="Large nav-link" href="/tours"><i className="fa-solid fa-tractor" />Tours</Link>
            <Link className="Large nav-link" href="/events"><i className="fa-solid fa-calendar-days" />Events</Link>
            <BigDropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-paw" />}
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
            <BigDropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-campground" />}
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
            <i onClick={() => setOpenMenu(!openMenu)} className="menu-icon Small fa-solid fa-bars" />
            {
                openMenu ? <HamburgerMenu setOpenMenu={setOpenMenu} /> : null
            }
        </div>
    );
};