import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
const Backoffice = () => {
  return (
    <div className="container lg:mx-auto ">
      <div className="grid grid-rows-1 sm:w-full  ">
        <div className="grid lg:grid-cols-2 gap-1">
          <div className="max-h-36 ">
            <Sidebar />
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Backoffice;
