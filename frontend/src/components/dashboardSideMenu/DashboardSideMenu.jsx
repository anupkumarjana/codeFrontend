  // src/components/DashboardSideMenu.jsx
  import React, { useState } from "react";
  import { Link, useLocation } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faHouse } from "@fortawesome/free-solid-svg-icons";

  import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
  import { menuItems } from "./DashboardMenuItems";

  const DashboardSideMenu = () => {
    const location = useLocation();
    const [openMenus, setOpenMenus] = useState({ Challenges: true }); // Challenges will be opened by default
    

    const toggleMenu = (name) => {
      setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const renderMenuItems = (items, level = 0) =>
      items.map((item) => (
        <li key={item.path} className={`list-none ${level > 0 ? "pl-4" : ""}`}>
          {item.children ? (
            <>
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer ${
                  location.pathname.startsWith(item.path)
                    ? "bg-[#1d1d1d] dashboardSidemenuText"
                    : "hover:bg-[#2d2d2d] hover:dashboardSidemenuText"
                }`}
                onClick={() => toggleMenu(item.name)}
              >
                {item.icon && <span>{item.icon}</span>}
                <span>{item.name}</span>
                {openMenus[item.name] ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </div>

              <ul
                className={`transition-all duration-[400ms] ease-in-out overflow-hidden  ${
                  openMenus[item.name] ? "max-h-96" : "max-h-0"
                }`}
              >
                {renderMenuItems(item.children, level + 1)}
              </ul>
            </>
          ) : (
            <Link
              to={item.path}
              className={`flex items-center gap-2 py-2 px-2 rounded  ${
                location.pathname === item.path
                  ? "bg-[#1d1d1d] dshboardSidemenuText"
                  : "hover:bg-[#2d2d2d] hover:dashboardSidemenuText"
              }`}
            >
              {item.icon && <span>{item.icon}</span>}
              <span>{item.name}</span>
            </Link>
          )}
        </li>
      ));

    return (
      <div className="h-screen pt-4 p-2 text-white border-r-2 border-[#1d1d1d] fixed left-0 top-12 bg-primary font-poppins">
        <div
          className={`flex items-center gap-2 border-b-2 px-4 pb-2 border-[#1d1d1d] ${
            location.pathname === "/dashboard" ? "dashboardSidemenuText" : ""
          }`}
        >
          <FontAwesomeIcon icon={faHouse} />
          <h2
            className="font-bold"
           
          >
            Dashboard
          </h2>
        </div>
        <ul className="mt-4 space-y-2 text-sm">{renderMenuItems(menuItems)}</ul>
      </div>
    );
  };

  export default DashboardSideMenu;
