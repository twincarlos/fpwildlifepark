import Link from "next/link";

export function DropdownMenu({ dropdownHeaderIcon, dropdownHeaderValue, dropdownOptions }) {
    return (
        <div className="dropdow-menu">
            <div className="dropdown-menu-header">
                {dropdownHeaderIcon ? dropdownHeaderIcon : null}
                <div className="dropdown-header-value">
                    <p>{dropdownHeaderValue}</p>
                </div>
                <div className="dropdown-header-arrow">
                    <i className="fa-solid fa-chevron-down" />
                </div>
            </div>
            <div className="dropdown-menu-body">
                {
                    dropdownOptions.map((dropdownOption, index) => (
                        <div key={index} className="dropdown-option">
                            <Link
                                style={{ width: dropdownOption.value === "Tour Prices" ? "80px" : "100%" }}
                                href={dropdownOption.path ? dropdownOption.path : "/"}>
                                {dropdownOption.value}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};