// src/components/DashboardSideMenu.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "./DashboardMenuItems";


const DashboardSideMenu = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({}); // Track expanded items

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };


  const renderMenuItems = (items, level = 0) =>
    items.map((item) => (
      <li key={item.path} className={`list-none ${level > 0 ? "pl-6" : ""}`}>
        {item.children ? (
          <>
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer ${
                location.pathname.startsWith(item.path)
                  ? "bg-[#1d1d1d] text-[#a855f7]"
                  : "hover:bg-[#2d2d2d] hover:text-[#a855f7]"
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
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openMenus[item.name] ? "max-h-80" : "h-0"
              }`}
            >
              {renderMenuItems(item.children, level + 1)}
            </ul>
          </>
        ) : (
          <Link
            to={item.path}
            className={`flex items-center gap-2 px-8 py-2 rounded ${
              location.pathname === item.path
                ? "bg-[#1d1d1d] text-[#a855f7]"
                : "hover:bg-[#2d2d2d] hover:text-[#a855f7]"
            }`}
          >
            {item.icon && <span>{item.icon}</span>}
            <span>{item.name}</span>
          </Link>
        )}
      </li>
    ));

  return (
    <div className="h-screen pt-4 p-2 text-white border-r-2 border-[#1d1d1d] fixed left-0 top-12 bg-primary">
      <div className="flex items-center gap-2 border-b-2 px-4 pb-2 border-[#1d1d1d]">
        <FontAwesomeIcon icon={faDashboard} color="#FF6500" />
        <h2
          className={`font-bold ${
            location.pathname === "/dashboard" ? "text-[#6fff3f]" : ""
          }`}
        >
          Dashboard
        </h2>
      </div>

      <ul className="mt-4 space-y-2">{renderMenuItems(menuItems)}</ul>
    </div>
  );
};

export default DashboardSideMenu;
