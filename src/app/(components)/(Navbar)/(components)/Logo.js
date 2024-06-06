import Image from "next/image";
import logo from "../../../(assets)/logo.png";

export function Logo() {
    return (
        <Image className="logo" alt="logo"  src={logo} />
    );
};