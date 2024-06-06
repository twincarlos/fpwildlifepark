export function DropdownMenu({ dropdownHeaderIcon, dropdownHeaderValue, dropdownOptions }) {
    return (
        <div className="dropdow-menu">
            <div className="dropdown-menu-header">
                {
                    dropdownHeaderIcon ? (
                        <div className="dropdown-header-icon">
                            <i className="fa-solid fa-globe" />
                        </div>
                    ) :
                        null
                }
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
                            <button style={{ width: dropdownOption.value === "Tour Prices" ? "80px" : "100%" }}>{dropdownOption.value}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};