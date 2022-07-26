import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const Slidebar = () => {
  const location = useLocation().pathname;
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
  // useEffect(() => {
  //   // function some() {
  //   //   document.getElementById("slidebar").classList.slidebar.remove("hidden");
  //   // }
  //   //  && some();
  //   // console.log(document.getElementById("slidebar").classList.remove("hidden"));
  // }, []);

  return (
    <>
      <div
        className="min-w-[216px] mt-[2px]  text-primary-grey-600 border-r-[1px] border-r-primary-grey-100-grey-200 bg-primary-grey-100 absolute top-16 md:static   ml-[72px] md:ml-0 min-h-screen hidden lg:inline "
        id="slidebar"
      >
        <div className="w-full">
          <ul className="mx-2 pt-9">
            <li
              className={` devList p-1 my-2 cursor-pointer rounded ${
                location.includes("information")
                  ? " bg-primary-grey-200  text-primary-grey-700 "
                  : " hover:bg-primary-grey-200 text-primary-grey-600 "
              } text-sm`}
            >
              <Link to="/student/student-information">Student information</Link>
            </li>
            <li
              className={` devList p-1 my-2 cursor-pointer rounded ${
                location.includes("attendence")
                  ? " bg-primary-grey-200  text-primary-grey-700 "
                  : " hover:bg-primary-grey-200 text-primary-grey-600 "
              } text-sm`}
            >
              <Link to="/student/student-attendence"> Student attendence</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Slidebar;
