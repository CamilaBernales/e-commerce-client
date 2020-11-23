import React from "react";
import { routesAdmin } from "./constants";
import MenuOption from "./MenuOption";
const Sidebar = () => {
  return (
    <div className="bg-pink-200">
        <div className="">
          <nav className="">
            <ul className="">
              {routesAdmin &&
                routesAdmin.map((element, index) => {
                  return (
                    <MenuOption
                      option={element}
                      key={index}
                    />
                  );
                })}
            </ul>
          </nav>
        </div>
    </div>
  );
};

export default Sidebar;
