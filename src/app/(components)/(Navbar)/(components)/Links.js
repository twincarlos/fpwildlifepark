"use client";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { BigDropdownMenu } from "./BigDropdownMenu";
import { DropdownMenu } from "./DropdownMenu";
import { useLanguage } from "@/app/context/LanguageContext";

export function Links() {
    const [openMenu, setOpenMenu] = useState(false);
    const { language, setLanguage } = useLanguage();

    return (
        <div className="links">
            <Link className="Large nav-link" href="/tickets"><i className="fa-solid fa-ticket" />{language === "English" ? "Tickets" : ""}</Link>
            <Link className="Large nav-link" href="/tours"><i className="fa-solid fa-tractor" />{language === "English" ? "Tours" : ""}</Link>
            <Link className="Large nav-link" href="/events"><i className="fa-solid fa-calendar-days" />{language === "English" ? "Events" : ""}</Link>
            <BigDropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-paw" />}
                dropdownHeaderValue={language === "English" ? "About" : ""}
                dropdownOptions={[
                    {
                        value: language === "English" ? "Our Story" : "", path: "/about/our-story", icon: <i className="fa-solid fa-hat-cowboy" />, description: language === "English" ? "Discover the journey and mission behind our dedication to conservation and wildlife protection." : ""
                    },
                    {
                        value: language === "English" ? "Our Team" : "", path: "/about/our-team", icon: <i className="fa-solid fa-users" />, description: language === "English" ? "Meet the passionate and diverse team of experts who bring our vision to life." : ""
                    },
                    {
                        value: language === "English" ? "Education" : "", path: "/about/education", icon: <i className="fa-solid fa-book-open-reader" />, description: language === "English" ? "Explore our educational programs designed to inspire and inform all ages about wildlife conservation and environmental stewardship." : ""
                    },
                    {
                        value: language === "English" ? "Our Animals" : "", path: "/about/our-animals", icon: <i className="fa-solid fa-cow" />, description: language === "English" ? "Get to know the diverse species of animals and plants that call our park home." : ""
                    }
                ]}
            />
            <BigDropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-campground" />}
                dropdownHeaderValue={language === "English" ? "Contact Us" : ""}
                dropdownOptions={[
                    {
                        value: language === "English" ? "Let's Connect" : "", path: "/contact-us/lets-connect", icon: <i className="fa-regular fa-comments" />, description: language === "English" ? "Stay connected with us through social media, newsletters, and events. Join our community and support our cause." : ""
                    },
                    {
                        value: language === "English" ? "Volunteer Application" : "", path: "/contact-us/volunteer-application", icon: <i className="fa-brands fa-wpforms" />, description: language === "English" ? "Become a part of our mission by volunteering with us. Fill out an application to join our team." : ""
                    },
                    {
                        value: language === "English" ? "Job Application" : "", path: "/contact-us/job-application", icon: <i className="fa-brands fa-wpforms" />, description: language === "English" ? "Looking for a career in wildlife conservation? Check out our job openings and apply to work with us." : ""
                    },
                    {
                        value: language === "English" ? "Internship Application" : "", path: "/contact-us/internship-application", icon: <i className="fa-brands fa-wpforms" />, description: language === "English" ? "Gain hands-on experience and learn from the experts by applying for an internship with us." : ""
                    }
                ]}
            />
            <DropdownMenu
                dropdownHeaderValue="Language"
                dropdownOptions={[{
                    value: "English",
                    onClick: () => setLanguage("English")
                },{
                    value: "Spanish",
                    onClick: () => setLanguage("Spanish")
                }]}
            />
            <i onClick={() => setOpenMenu(!openMenu)} className="menu-icon Small fa-solid fa-bars" />
            {
                openMenu ? <HamburgerMenu setOpenMenu={setOpenMenu} /> : null
            }
        </div>
    );
};