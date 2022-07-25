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
import { Link } from "react-router-dom";

import Hamburger from "@mui/icons-material/MenuOutlined";

export default function Sidebar() {
  const activity = [
    { name: "Admin", value: Admin },
    { name: "Student", value: Student },
    { name: "Staff", value: Staff },
    { name: "Billing", value: Billing },
    { name: "Account", value: Account },
    { name: "Libary", value: Libary },
    { name: "Inventory", value: Inventory },
    { name: "Exam", value: Exam },
    { name: "LMS", value: Lms },
    { name: "Transport", value: Transport },
  ];
  const sidebar = () => {
    const nav = document.getElementById("sidebar").classList;
    const slidebar =
      document.getElementById("slidebar") &&
      document.getElementById("slidebar").classList;

    slidebar &&
      (slidebar.contains("hidden") && nav.contains("hidden")
        ? slidebar.remove("hidden")
        : slidebar.add("hidden"));
    nav.contains("hidden") ? nav.remove("hidden") : nav.add("hidden");
  };
  return (
    <>
      {/* <img
        src={hamburger}
        alt="hamburger"
        className="md:hidden absolute top-[70px] z-10 left-2"
        onClick={sidebar}
      /> */}
      <div className="lg:hidden p-2 rounded-md text-primary-grey-600 hover:text-primary-grey-600 hover:bg-primary-grey-200 focus:outline-none absolute top-[70px]  z-20 left-2">
        <Hamburger onClick={sidebar}></Hamburger>
      </div>

      <div
        className="min-w-[72px] mt-[2px] py-8 border-r-[1px] border-r-primary-grey-100-grey-200 top-[64px] md:static z-10 absolute h-fit min-h-screen text-sm sm:inline hidden bg-white "
        id="sidebar"
      >
        {activity.map((curr) => {
          return (
            <div
              className={` w-[60px] text-center text-xs rounded py-1 my-4 mx-auto hover:bg-primary-grey-100  ${
                curr.name === "Student"
                  ? "  bg-primary-grey-100 text-primary-grey-700"
                  : " text-primary-grey-600 "
              }`}
              key={curr.name}
            >
              {/* <img
                src={curr.value}
                alt={curr.name}
                className={` mx-auto ${
                  curr.name === "Student" ? "brightness-50" : ""
                }`}
              /> */}
              <Link to={`/${curr.name.toLowerCase()}`}>
                <curr.value
                  className={` mx-auto ${
                    curr.name === "Student"
                      ? "text-primary-grey-700"
                      : "text-primary-grey-400"
                  }`}
                />
                <div className="  text-inherit">{curr.name}</div>
              </Link>
              `
            </div>
          );
        })}
      </div>
    </>
  );
}
