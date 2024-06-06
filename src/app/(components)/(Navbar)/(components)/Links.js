import Link from "next/link";
import { DropdownMenu } from "./DropdownMenu";

export function Links() {
    return (
        <div className="links">
            <Link href="/">Tickets</Link>
            <DropdownMenu
                dropdownHeaderValue="Tours"
                dropdownOptions={[{ value: "Tour Prices" }, { value: "Tour Departures" }]}
            />
            <Link href="/">Events</Link>
            <DropdownMenu
                dropdownHeaderValue="About"
                dropdownOptions={[{ value: "Our Story" }, { value: "Our Team" }, { value: "Education" }]}
            />
            <DropdownMenu
                dropdownHeaderValue="Contact Us"
                dropdownOptions={[{ value: "Let's Connect" }, { value: "Volunteer Application" }, { value: "Job Application" }, { value: "Internship Application" }]}
            />
            <DropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-globe" />}
                dropdownHeaderValue="English"
                dropdownOptions={[{ value: "Español" }, { value: "English" }]}
            />
            <Link href="/">Cart</Link>
        </div>
    );
};