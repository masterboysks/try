import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Arrow from "@mui/icons-material/ArrowForwardIos";

const links = [
  { name: "University/Board", path: "/admin/data-setup/university-board" },
  { name: "Level", path: "/admin/data-setup/level" },
  { name: "Faculty", path: "/admin/data-setup/faculty" },
  { name: "Sub-Faculty", path: "/admin/data-setup/sub-faculty" },
  { name: "Section", path: "/admin/data-setup/section" },
  { name: "Subject", path: "/admin/data-setup/subject" },
  { name: "Class/Semester", path: "/admin/data-setup/class-semester" },
  { name: "Department", path: "/admin/data-setup/department" },
  { name: "Designation", path: "/admin/data-setup/designation" },
];
const Slidebar = () => {
  const [dropdownActive, setDropdownActive] = useState(true);
  const [data, setData] = useState(false);
  const location = useLocation().pathname;
  useEffect(() => {
    location.includes("data-setup") ? setData(true) : setData(false);
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
        className="min-w-[216px] mt-[2px]  text-primary-grey-600 border-r-[1px] border-r-primary-grey-100-grey-200 bg-primary-grey-100 absolute top-16 md:static   ml-[72px] md:ml-0 min-h-screen hidden lg:inline "
        id="slidebar"
      >
        <div className="w-full">
          <ul className="pt-9 mx-2">
            <li
              className={` flex p-1 mt-2 mb-3  cursor-pointer rounded ${
                location.includes("organization-setup")
                  ? " bg-primary-grey-200  text-primary-grey-700 "
                  : " hover:bg-primary-grey-200 text-primary-grey-600 "
              } text-sm`}
            >
              <div className="devList text-primary-grey-300">
                <Arrow fontSize="sm"></Arrow>
              </div>
              <Link to="/admin/organization-setup">Organization setup</Link>
            </li>
            <li
              id="data"
              onClick={() => {
                setDropdownActive(!dropdownActive);
              }}
              className={`flex  p-1 mt-2 mb-3 cursor-pointer rounded hover:bg-primary-grey-200 
              ${data ? "text-primary-grey-700" : "text-primary-grey-600"} 
                   ${
                     data && !dropdownActive
                       ? "bg-primary-grey-200 "
                       : "text-primary-grey-600"
                   }text-sm`}
            >
              <div
                id="arrow"
                className={`devList text-black  transition duration-100 ease-in text-sm ${
                  dropdownActive ? "rotate-90" : ""
                }  `}
              >
                <Arrow fontSize="sm" />
              </div>
              <div className=" text-sm">Data setup</div>
            </li>
          </ul>
          <ul
            className={`${
              dropdownActive ? "" : "hidden"
            } transition duration-700 ease-in`}
            id="dropdown"
          >
            {links.map((curr) => {
              return (
                <Link to={curr.path} key={curr.name}>
                  <li
                    className={`pl-6 mx-2 mt-2 mb-3 rounded py-[3px] text-sm ${
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
        </div>
      </div>{" "}
      <div className=" sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1">
        <div className="top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
          <div className="-z-10 w-11/12 mx-auto text-sm">
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
