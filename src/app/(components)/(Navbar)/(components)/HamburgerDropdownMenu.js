"use client";
import { useState } from "react";
import Link from "next/link";

export function HamburgerDropdownMenu({ setOpenMenu, hamburgerDropdownTitle, hamburgerDropdownOptions }) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="hamburger-menu-item-container hamburger-dropdown">
            <div onClick={() => setShowOptions(!showOptions)} className="hamburger-menu-item hamburger-dropdown-title">
                <i className="fa-solid fa-earth-americas" />
                <p>{hamburgerDropdownTitle}</p>
                { showOptions ? <i className="fa-solid fa-chevron-up" /> : <i className="fa-solid fa-chevron-down" /> }
            </div>
            {
                showOptions ? (
                    <div className="hamburger-dropdown-options">
                        {
                            hamburgerDropdownOptions.map((hamburgerDropdownOption, index) => (
                                <div
                                key={index}
                                onClick={hamburgerDropdownOption.onClick}
                                >
                                    {hamburgerDropdownOption.name}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    );
};
