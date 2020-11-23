import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuOption = (props) => {
  const location = useLocation();
  return (
    <NavLink
      to={`${props.option.route}`}
      activeClassName="active"
      className="text-center text-lg font-semibold "
    >
      <li
        className={
          location.pathname === props.option.route
            ? "bg-pink-600 p-5 text-white"
            : "p-5"
        }
      >
        {props.option.name}
      </li>
    </NavLink>
  );
};

export default MenuOption;
