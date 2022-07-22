// import { ReactComponent as Admin } from "./logo/admin.svg";
import Admin from "@mui/icons-material/AdminPanelSettings";
// import { ReactComponent as Student } from "./logo/student.svg";
import Student from "@mui/icons-material/SchoolOutlined";
import Staff from "@mui/icons-material/SupervisorAccountOutlined";
// import { ReactComponent as Billing } from "./logo/bill.svg";
import Billing from "@mui/icons-material/ReceiptLongOutlined";
// import { ReactComponent as Account } from "./logo/account.svg";
import Account from "@mui/icons-material/AccountBalanceWalletOutlined";
// import { ReactComponent as Libary } from "./logo/libary.svg";
import Libary from "@mui/icons-material/LocalLibraryOutlined";
// import { ReactComponent as Inventory } from "./logo/inventory.svg";
import Inventory from "@mui/icons-material/Inventory2Outlined";
// import { ReactComponent as Exam } from "./logo/exam.svg";
import Exam from "@mui/icons-material/QuizOutlined";
// import { ReactComponent as Lms } from "./logo/Lms.svg";
import Lms from "@mui/icons-material/AppRegistrationOutlined";
// import { ReactComponent as Transport } from "./logo/bus.svg";
import Transport from "@mui/icons-material/DirectionsBusOutlined";
// import { ReactComponent as Hamburger } from "./logo/ham-burger.svg";
import Hamburger from "@mui/icons-material/MenuOutlined";
import Slidebar from "./slidebar/Slidebar";

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
    const slidebar = document.getElementById("slidebar").classList;

    slidebar.contains("hidden")
      ? slidebar.remove("hidden")
      : slidebar.add("hidden");
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
      <Hamburger
        className="md:hidden absolute top-[70px] z-20 left-2"
        onClick={sidebar}
      ></Hamburger>
      <div
        className="min-w-[72px] mt-[2px] py-8 border-r-[1px] border-r-primary-bgActive top-[64px] md:static z-10 absolute h-fit min-h-screen text-sm sm:inline hidden bg-white "
        id="sidebar"
      >
        {activity.map((curr) => {
          return (
            <div
              className={` w-[65px] text-center rounded py-1 my-3 mx-auto hover:bg-primary-bg  ${
                curr.name === "Student"
                  ? "  bg-primary-bg text-primary-active"
                  : " text-primary-textC "
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
              <curr.value
                className={` mx-auto ${
                  curr.name === "Student" ? "text-primary-active" : ""
                }`}
              />
              <div className="  text-inherit">{curr.name}</div>
            </div>
          );
        })}
      </div>
      <Slidebar />
    </>
  );
}
