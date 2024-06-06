import "./Navbar.css";
import { Logo } from "./(components)/Logo";
import { Links } from "./(components)/Links";

export function Navbar() {
    return (
        <nav>
            <Logo />
            <Links />
        </nav>
    );
};