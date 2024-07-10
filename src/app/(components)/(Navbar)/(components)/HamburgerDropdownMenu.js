"use client";
import { useState } from "react";
import Link from "next/link";

export function HamburgerDropdownMenu({ setOpenMenu, hamburgerDropdownTitle, hamburgerDropdownOptions }) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="hamburger-menu-item-container hamburger-dropdown">
            <div onClick={() => setShowOptions(!showOptions)} className="hamburger-menu-item hamburger-dropdown-title">
                <p>{hamburgerDropdownTitle}</p>
                { showOptions ? <i className="fa-solid fa-chevron-up" /> : <i className="fa-solid fa-chevron-down" /> }
            </div>
            {
                showOptions ? (
                    <div className="hamburger-dropdown-options">
                        {
                            hamburgerDropdownOptions.map((hamburgerDropdownOption, index) => (
                                <Link
                                key={index}
                                href={hamburgerDropdownOption.path}
                                onClick={() => setOpenMenu(false)}
                                >
                                    {hamburgerDropdownOption.name}
                                </Link>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    );
};