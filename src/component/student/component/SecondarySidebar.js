import React from "react";
import hamburger from "../img/secondary-sidebar-ham-burger.png";

const SecondarySidebar = () => {
  return (
    <div className="sidebar-secondary">
      <img src={hamburger} alt="hamburger" className="hamburger-seconday" />
      <div className="list-secondary">
        <div className="flex list-action list-action-active">
          <div className="arrow"></div>
          Student information
        </div>
        <div className="flex list-action">
          <div className="arrow"></div>
          Student attendence
        </div>
      </div>
    </div>
  );
};

export default SecondarySidebar;
