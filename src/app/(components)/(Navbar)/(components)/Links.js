import Link from "next/link";
import { DropdownMenu } from "./DropdownMenu";

export function Links() {
    return (
        <div className="links">
            <Link href="/">Tickets</Link>
            <Link href="/">Tours</Link>
            <Link href="/">Events</Link>
            <DropdownMenu
                dropdownHeaderValue="About"
                dropdownOptions={[{ value: "Our Story" }, { value: "Our Team" }]}
            />
            <Link href="/">Contact</Link>
            <DropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-globe" />}
                dropdownHeaderValue="English"
                dropdownOptions={[{ value: "Español" }, { value: "English" }]}
            />
            <Link href="/">Cart</Link>
        </div>
    );
};