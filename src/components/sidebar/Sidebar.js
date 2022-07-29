import Admin from "@mui/icons-material/AdminPanelSettingsOutlined";
import Student from "@mui/icons-material/SchoolOutlined";
import Staff from "@mui/icons-material/SupervisorAccountOutlined";
import Billing from "@mui/icons-material/ReceiptLongOutlined";
import Account from "@mui/icons-material/AccountBalanceWalletOutlined";
import Libary from "@mui/icons-material/LocalLibraryOutlined";
import Inventory from "@mui/icons-material/Inventory2Outlined";
import Exam from "@mui/icons-material/QuizOutlined";
import Lms from "@mui/icons-material/AppRegistrationOutlined";
import Transport from "@mui/icons-material/DirectionsBusOutlined";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Hamburger from "@mui/icons-material/MenuOutlined";

export default function Sidebar() {
  const location = useLocation().pathname.toLowerCase();
  const activity = [
    { name: "Admin", value: Admin, path: "admin/organization-setup" },
    { name: "Student", value: Student, path: "student/student-information" },
    { name: "Staff", value: Staff, path: "staff/staff-information" },
    { name: "Billing", value: Billing, path: "student/student-information" },
    { name: "Account", value: Account, path: "student/student-information" },
    { name: "Libary", value: Libary, path: "student/student-information" },
    {
      name: "Inventory",
      value: Inventory,
      path: "student/student-information",
    },
    { name: "Exam", value: Exam, path: "student/student-information" },
    { name: "LMS", value: Lms, path: "student/student-information" },
    {
      name: "Transport",
      value: Transport,
      path: "student/student-information",
    },
  ];
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
  const slidebarLink = () => {
    let overlay =
      document.getElementById("overlay") &&
      document.getElementById("overlay").classList;
    const slidebar =
      document.getElementById("slidebar") &&
      document.getElementById("slidebar").classList;

    slidebar &&
      (slidebar.contains("hidden")
        ? slidebar.remove("hidden")
        : slidebar.add("hidden"));
    overlay &&
      (!slidebar.contains("hidden")
        ? overlay.remove("hidden")
        : overlay.add("hidden"));
  };
  return (
    <>
      {/* <img
        src={hamburger}
        alt="hamburger"
        className="md:hidden absolute top-[70px] z-10 left-2"
        onClick={sidebar}
      /> */}
      <div className="lg:hidden ml-[11px] p-1 mt-1 rounded-md text-primary-grey-600  hover:outline-primary-grey-200 hover:outline   top-3 left-16 focus:outline-none absolute sm:top-[70px] z-50 sm:z-20 sm:left-2">
        <Hamburger onClick={sidebar}></Hamburger>
      </div>

      <div
        className="min-w-[72px]  mt-[2px] py-8 border-r-[1px] border-r-primary-grey-100-grey-200 top-[64px] md:static z-10 absolute  min-h-screen text-sm sm:inline hidden bg-white "
        id="sidebar"
      >
        {activity.map((curr) => {
          return (
            <div
              className={` w-[60px] text-center text-xs rounded py-1 my-4 mx-auto hover:bg-primary-grey-100  ${
                location.includes(curr.name.toLowerCase())
                  ? "  bg-primary-grey-100 text-primary-grey-700"
                  : " text-primary-grey-600 "
              }`}
              key={curr.name}
              onClick={slidebarLink}
            >
              {/* <img
                src={curr.value}
                alt={curr.name}
                className={` mx-auto ${
                  curr.name === "Student" ? "brightness-50" : ""
                }`}
              /> */}
              <Link
                to={curr.path}
                className={
                  location.includes(curr.name.toLowerCase())
                    ? "pointer pointer-events-none"
                    : " "
                }
              >
                <curr.value
                  className={` mx-auto ${
                    location.includes(curr.name.toLowerCase())
                      ? "text-primary-grey-700"
                      : "text-primary-grey-400"
                  }`}
                />
                <div className=" text-inherit">{curr.name}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
