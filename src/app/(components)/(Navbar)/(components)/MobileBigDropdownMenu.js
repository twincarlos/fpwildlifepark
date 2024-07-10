"use client";
import "../Navbar.css";
import Link from "next/link";
import { useState } from "react";

export function MobileBigDropdownMenu({ dropdownHeaderIcon, dropdownHeaderValue, dropdownOptions }) {
    const [showBigOptions, setShowBigOptions] = useState(false);
    return (
        <div className="mobile-big-dropdown-menu">
            <div className="mobile-hamburger-menu-item-container">
                {dropdownHeaderIcon ? dropdownHeaderIcon : null}
                <div className="big-dropdown-header-value">
                    <p>{dropdownHeaderValue}</p>
                </div>
                <div className="big-dropdown-header-arrow" onClick={() => setShowBigOptions(!showBigOptions)}>
                    <i className="fa-solid fa-chevron-down" />
                </div>
            </div>
            {
                showBigOptions ? (
                    <div className={`mobile-big-dropdown-menu-body`}>
                        {
                            dropdownOptions.map((dropdownOption, index) => (
                                <div key={index} className={`big-dropdown-option big-option-${index + 1}`}>
                                    <Link
                                        href={dropdownOption.path ? dropdownOption.path : "/"}>
                                        {dropdownOption.icon}
                                        <div className="big-dropdown-option-content">
                                            <span className="big-dropdown-option-title">
                                                {dropdownOption.value}
                                            </span>
                                            <span className="big-dropdown-option-description">
                                                {dropdownOption.description}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    );
};