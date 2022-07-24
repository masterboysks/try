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
        className="min-w-[216px] mt-[2px] text-primary-grey-600 border-r-[1px] border-r-primary-grey-100-grey-200 bg-primary-grey-100 absolute top-16 md:static   ml-[72px] md:ml-0 h-screen hidden lg:inline "
        id="slidebar"
      >
        <div className="w-full">
          <ul className="mx-2 pt-9">
            <li className=" devList p-1 my-2 cursor-pointer rounded bg-primary-grey-200 w-full text-primary-grey-700 text-sm">
              Student information
            </li>
            <li className="devList p-1 my-2 cursor-pointer rounded hover:bg-primary-grey-200 text-primary-grey-600 text-sm">
              Student attendence
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slidebar;
