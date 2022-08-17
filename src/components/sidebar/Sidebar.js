import Admin from "@mui/icons-material/AdminPanelSettingsOutlined";
import Student from "@mui/icons-material/SchoolOutlined";
import Staff from "@mui/icons-material/SupervisorAccountOutlined";
import Fee from "@mui/icons-material/ReceiptLongOutlined";
import Account from "@mui/icons-material/AccountBalanceWalletOutlined";
import Libary from "@mui/icons-material/LocalLibraryOutlined";
import Inventory from "@mui/icons-material/Inventory2Outlined";
import Exam from "@mui/icons-material/QuizOutlined";
import Lms from "@mui/icons-material/AppRegistrationOutlined";
import Transport from "@mui/icons-material/DirectionsBusOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Hamburger from "@mui/icons-material/MenuOutlined";

const activity = [
  { name: "Admin", value: Admin, path: "admin/organization-setup" },
  { name: "Staff", value: Staff, path: "staff/staff-information" },
  { name: "Student", value: Student, path: "student/student-information" },
  { name: "Fee", value: Fee, path: "fee/fee-type" },
  { name: "Exam", value: Exam, path: "exam/exam-setup/exam-name" },

  {
    name: "Report",
    value: SummarizeOutlinedIcon,
    path: "report/attendence-report/student-attendence-report",
  },
  { name: "Libary", value: Libary, path: "student/student-information" },
  {
    name: "Transport",
    value: Transport,
    path: "student/student-information",
  },
  { name: "Account", value: Account, path: "account" },
  {
    name: "Inventory",
    value: Inventory,
    path: "student/student-information",
  },
  { name: "LMS", value: Lms, path: "student/student-information" },
];
export default function Sidebar() {
  useEffect(() => {
    const esc = document.addEventListener("keydown", (e) => {
      e.key === "Escape" && sidebar();
    });

    return () => {
      document.removeEventListener("keydown", esc);
    };
  });

  const location = useLocation().pathname.toLowerCase();

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
    <div className="md:pt-9 sm:relative min-w-[72px] border-r-[1px]">
      <div className="sm:hidden ml-[11px] p-1 mt-1 rounded-md text-primary-grey-600   top-3 left-16 focus:outline-none  fixed  z-[100] ">
        <Hamburger onClick={sidebar}></Hamburger>
      </div>
      <div
        className="min-w-[72px] overflow-y-auto mt-[2px] py-8 border-r-[1px]  pb-20 border-r-primary-grey-100-grey-200 top-[64px] md:static z-10 fixed  h-screen text-sm sm:inline hidden bg-white "
        id="sidebar"
      >
        {activity.map((curr) => {
          return (
            <div
              className={` w-[60px] text-center text-xs rounded py-1 my-4 mx-auto hover:bg-primary-grey-100 z-50 opacity-100  ${
                location.includes(`/${curr.name.toLowerCase()}/`)
                  ? "  bg-primary-grey-100 text-primary-grey-700"
                  : " text-primary-grey-600 "
              }`}
              key={curr.name}
              onClick={() => {
                sidebar();
              }}
            >
              <Link
                to={curr.path}
                tabIndex="-1"
                className={
                  location.includes(`/${curr.name.toLowerCase()}/`)
                    ? "pointer pointer-events-none"
                    : " "
                }
              >
                <curr.value
                  className={` mx-auto ${
                    location.includes(`/${curr.name.toLowerCase()}/`)
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
    </div>
  );
}
