import React from "react";

const Slidebar = () => {
  //   const modal = () => {
  //     const sidebarS = document.getElementById("modal").classList;
  //     // const sidebar = document.getElementById("sidebar").classList;
  //     sidebarS.contains("hidden")
  //       ? sidebarS.remove("hidden")
  //       : sidebarS.add("hidden");
  //     // sidebar.contains("sm-hide")
  //     //   ? sidebar.remove("sm-hide")
  //     //   : sidebar.add("sm-hide");
  //   };

  /* {/* {value ? (
  ""
) : (
  <img
    src={hamburger}
    alt="hamburger"
    className="absolute   top-[70px] left-20 block md:hidden"
    onClick={modal}
  /> }*/

  return (
    <>
      <div
        className="w-fit bg-primary-bg h-screen hidden md:block"
        id="slidebar"
      >
        <div className="w-full">
          <ul className="mx-2 mt-9">
            <li className=" devList p-1 my-2 rounded bg-primary-bgActive w-full">
              Student information
            </li>
            <li className="devList p-1 my-2">Student attendence</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slidebar;
