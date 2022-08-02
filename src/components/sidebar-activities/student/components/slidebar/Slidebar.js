import Arrow from "@mui/icons-material/ArrowForwardIos";
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
  let nav;
  const sidebar = () => {
    nav = document.getElementById("sidebar").classList;
    nav.contains("hidden") ? nav.remove("hidden") : nav.add("hidden");
    slidebar();
  };

  const slidebar = () => {
    nav = document.getElementById("sidebar").classList;
    let overlay =
      document.getElementById("overlay") &&
      document.getElementById("overlay").classList;
    const slidebar =
      document.getElementById("slidebar") &&
      document.getElementById("slidebar").classList;

    slidebar &&
      (slidebar.contains("hidden") && !nav.contains("hidden")
        ? slidebar.remove("hidden")
        : slidebar.add("hidden"));
    overlay &&
      (!slidebar.contains("hidden")
        ? overlay.remove("hidden")
        : overlay.add("hidden"));
  };
  return (
    <>
      <div
        className="min-w-[216px] mt-[2px]  z-10 text-primary-grey-600 border-r-[1px] border-r-primary-grey-100-grey-200 bg-primary-grey-100 fixed top-16 md:static   ml-[72px] md:ml-0 min-h-screen hidden lg:inline "
        id="slidebar"
      >
        <div className="w-full">
          <ul className="pt-9 mx-2">
            <Link to="/student/student-information" onClick={sidebar}>
              {" "}
              <li
                className={` flex p-1 mt-2 mb-3 cursor-pointer rounded ${
                  location.includes("student-information")
                    ? " bg-primary-grey-200  text-primary-grey-700 "
                    : " hover:bg-primary-grey-200 text-primary-grey-600 "
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="sm" />
                </div>
                Student information
              </li>
            </Link>{" "}
            <Link to="/student/student-attendence" onClick={sidebar}>
              <li
                className={` flex p-1 mt-2 mb-3 cursor-pointer rounded ${
                  location.includes("student-attendence")
                    ? " bg-primary-grey-200  text-primary-grey-700 "
                    : " hover:bg-primary-grey-200 text-primary-grey-600 "
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="sm" />
                </div>
                Student attendence
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
      <div
        className="lg:hidden overscroll-none opacity-95 fixed top-0  z-[99999] left-[288px] hidden w-full h-screen bg-transparent"
        id="overlay"
        onClick={sidebar}
      ></div>
    </>
  );
};

export default Slidebar;
