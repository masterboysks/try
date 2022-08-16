import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Arrow from "@mui/icons-material/ArrowForwardIos";

const setupLinks = [
  { name: "Exam name", path: "/exam/exam-setup/exam-name" },
  { name: "Grade system setup", path: "/exam/exam-setup/grading-system" },
  { name: "Exam marks name", path: "/exam/exam-setup/exam-marks-name" },
  { name: "Assign mark", path: "/exam/exam-setup/assign-mark" },
];

const Slidebar = () => {
  const [dropdownSetupActive, setDropdownSetupActive] = useState(true);
  const [setup, setSetup] = useState(false);
  const location = useLocation().pathname;
  useEffect(() => {
    location.includes("/exam/exam-setup") ? setSetup(true) : setSetup(false);
  }, [location]);

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
        className="w-[216px] mt-[2px] box-border text-primary-grey-600 border-r-[1px] z-[99] border-r-primary-grey-100-grey-200 bg-primary-grey-100 fixed top-16 md:static   ml-[72px] md:ml-0 h-[94vh] pb-20 overflow-y-auto hidden lg:inline "
        id="slidebar"
      >
        <div className="w-full">
          <ul className="pt-9 mx-2">
            <li
              onClick={() => {
                setDropdownSetupActive(!dropdownSetupActive);
              }}
              className={`flex   pr-3    p-1 mt-2 mb-3 cursor-pointer rounded hover:bg-primary-grey-200 
            ${setup ? "text-primary-grey-700" : "text-primary-grey-600"} 
                 ${
                   setup && !dropdownSetupActive
                     ? "bg-primary-grey-200 "
                     : "text-primary-grey-600"
                 }text-sm`}
            >
              <div
                id="arrow"
                className={`devList text-black  transition duration-100 ease-in text-sm ${
                  dropdownSetupActive ? "rotate-90" : ""
                }  `}
              >
                <Arrow fontSize="sm" />
              </div>
              <div className=" text-sm">Exam setup</div>
            </li>
            <ul
              className={`${
                dropdownSetupActive ? "" : "hidden"
              } transition duration-700 ease-in`}
              id="dropdown"
            >
              {setupLinks.map((curr) => {
                return (
                  <Link to={curr.path} key={curr.name} onClick={sidebar}>
                    <li
                      className={`pl-6  pr-3    mx-2 mt-2 mb-3 rounded py-[3px] text-sm ${
                        location.includes(curr.path)
                          ? "bg-primary-grey-200 text-primary-grey-700"
                          : "hover:bg-primary-grey-200 text-primary-grey-600"
                      }`}
                    >
                      {curr.name}
                    </li>
                  </Link>
                );
              })}
            </ul>

            <Link to="/exam/marks-ledger" onClick={sidebar}>
              <li
                className={` flex p-1 mt-2 mb-3  pr-3     cursor-pointer rounded ${
                  location.includes("/exam/marks-ledger")
                    ? " bg-primary-grey-200  text-primary-grey-700 "
                    : " hover:bg-primary-grey-200 text-primary-grey-600 "
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="sm"></Arrow>
                </div>
                Marks Ledger
              </li>
            </Link>

            <Link to="/exam/exam-shedule" onClick={sidebar}>
              <li
                className={` flex p-1 mt-2 mb-3   pr-3    cursor-pointer rounded ${
                  location.includes("/exam/exam-shedule")
                    ? " bg-primary-grey-200  text-primary-grey-700 "
                    : " hover:bg-primary-grey-200 text-primary-grey-600 "
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="sm"></Arrow>
                </div>
                Exam shedule
              </li>
            </Link>
            <Link to="/exam/admit-card" onClick={sidebar}>
              <li
                className={` flex p-1 mt-2 mb-3   pr-3    cursor-pointer rounded ${
                  location.includes("/exam/admit-card")
                    ? " bg-primary-grey-200  text-primary-grey-700 "
                    : " hover:bg-primary-grey-200 text-primary-grey-600 "
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="sm"></Arrow>
                </div>
                Admit card
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className=" sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1">
        <div className="top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
          <div className="-z-10 sm:mt-9 w-10/12 mx-auto text-sm">
            <Outlet />
          </div>
        </div>
      </div>
      <div
        className="lg:hidden overscroll-none opacity-95 fixed top-0  z-[99999] left-[288px] hidden w-full h-screen bg-transparent"
        id="overlay"
        onClick={sidebar}
      ></div>
    </>
  );
};

export default Slidebar;
