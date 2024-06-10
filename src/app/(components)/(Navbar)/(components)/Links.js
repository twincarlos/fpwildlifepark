import Link from "next/link";
import { DropdownMenu } from "./DropdownMenu";

export function Links() {
    return (
        <div className="links">
            <Link href="/tickets"><i className="fa-solid fa-ticket" />Tickets</Link>
            <Link href="/tours"><i className="fa-solid fa-tractor" />Tours</Link>
            <Link href="/events"><i className="fa-solid fa-calendar-days" />Events</Link>
            <DropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-paw" />}
                dropdownHeaderValue="About"
                dropdownOptions={[{ value: "Our Story", path: "/about/our-story" }, { value: "Our Team", path: "/about/our-team" }, { value: "Education", path: "/about/education" }, { value: "Animals & Plants", path: "/about/animals-and-plants" }]}
            />
            <DropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-campground" />}
                dropdownHeaderValue="Contact Us"
                dropdownOptions={[{ value: "Let's Connect", path: "/contact-us/lets-connect" }, { value: "Volunteer Application", path: "/contact-us/volunteer-application" }, { value: "Job Application", path: "/contact-us/job-application" }, { value: "Internship Application", path: "/contact-us/internship-application" }]}
            />
            <DropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-globe" />}
                dropdownHeaderValue="English"
                dropdownOptions={[{ value: "Español" }, { value: "English" }]}
            />
        </div>
    );
};