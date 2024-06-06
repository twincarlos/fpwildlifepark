import Image from "next/image";
import logo from "../../../(assets)/logo.png";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/">
            <Image className="logo" alt="logo"  src={logo} />
        </Link>
    );
};