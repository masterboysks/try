import React from "react";
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
  const location = useLocation().pathname;
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
              className={` flex p-1 my-2 cursor-pointer rounded ${
                location.includes("organization-setup")
                  ? " bg-primary-grey-200  text-primary-grey-700 "
                  : " hover:bg-primary-grey-200 text-primary-grey-600 "
              } text-sm`}
              onClick={() => {
                const data = document.getElementById("data").classList;
                data.remove("text-primary-grey-700");
                data.remove("bg-primary-grey-200");
              }}
            >
              <div className="devList">
                <Arrow fontSize="sm"></Arrow>
              </div>
              <Link to="/admin/organization-setup">Organization setup</Link>
            </li>
            <li
              id="data"
              className={`flex  p-1 my-2 cursor-pointer rounded hover:bg-primary-grey-200 ${
                location.includes("data-setup")
                  ? "  text-primary-grey-700 "
                  : "  text-primary-grey-600 "
              } ${
                location.includes("data-setup") ? "bg-primary-grey-200" : ""
              } text-sm`}
              onClick={(e) => {
                const dropdown = document.getElementById("dropdown").classList;
                const arrow = document.getElementById("arrow").classList;

                if (dropdown.contains("hidden")) {
                  dropdown.remove("hidden");
                  console.log(arrow);
                  e.target.classList.remove("text-primary-grey-700");
                  e.target.classList.remove("bg-primary-grey-200");
                  arrow.add("rotate-90");
                } else {
                  if (location.includes("data-setup")) {
                    dropdown.add("hidden");
                    e.target.classList.add("text-primary-grey-700");
                    e.target.classList.add("bg-primary-grey-200");
                    arrow.remove("rotate-90");
                  }
                }
              }}
            >
              <div
                id="arrow"
                className={`devList text-black  transition duration-100 ease-in`}
              >
                <Arrow fontSize="sm" />
              </div>
              <div>Data setup</div>
            </li>
          </ul>
          <ul className=" hidden transition duration-700 ease-in" id="dropdown">
            {links.map((curr) => {
              return (
                <li
                  key={curr.name}
                  onClick={() => {
                    const data = document.getElementById("data").classList;
                    data.remove("text-primary-grey-700");
                    data.remove("bg-primary-grey-200");
                  }}
                  className={`pl-6 mx-2 my-2 rounded  ${
                    location.includes(curr.path)
                      ? "bg-primary-grey-200 text-primary-grey-700"
                      : "hover:bg-primary-grey-200 text-primary-grey-600"
                  }`}
                >
                  <Link to={curr.path}>{curr.name}</Link>
                </li>
              );
            })}
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
