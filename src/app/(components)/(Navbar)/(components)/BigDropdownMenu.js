import "../Navbar.css";
import Link from "next/link";

export function BigDropdownMenu({ dropdownHeaderIcon, dropdownHeaderValue, dropdownOptions }) {
    return (
        <div className="Large big-dropdow-menu">
            <div className="big-dropdown-menu-header">
                {dropdownHeaderIcon ? dropdownHeaderIcon : null}
                <div className="big-dropdown-header-value">
                    <p>{dropdownHeaderValue}</p>
                </div>
                <div className="big-dropdown-header-arrow">
                    <i className="fa-solid fa-chevron-down" />
                </div>
            </div>
            <div className={`big-dropdown-menu-body`}>
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
        </div>
    );
};