"use client";
import Image from "next/image";
import logo from "../../../(assets)/logo.png";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/" onClick={() => {
            window.scrollTo({ 
                top: 0,  
                behavior: 'smooth'
                /* you can also use 'auto' behaviour 
                   in place of 'smooth' */
              });
        }}>
            <Image className="logo" alt="logo"  src={logo} />
        </Link>
    );
};