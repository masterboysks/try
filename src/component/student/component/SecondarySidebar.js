import React from "react";
import hamburger from "../img/secondary-sidebar-ham-burger.png";

const SecondarySidebar = () => {
  const modal = () => {
    const sidebar = document.getElementById("modal").classList;
    sidebar.contains("hide") ? sidebar.remove("hide") : sidebar.add("hide");
  };
  return (
    <>
      <img
        src={hamburger}
        alt="hamburger"
        className="hamburger-seconday"
        onClick={modal}
      />
      <div className="sidebar-secondary hide" id="modal">
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
    </>
  );
};

export default SecondarySidebar;
