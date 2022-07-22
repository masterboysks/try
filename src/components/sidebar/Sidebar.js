import { ReactComponent as Admin } from "./logo/admin.svg";
import { ReactComponent as Student } from "./logo/student.svg";
import { ReactComponent as Staff } from "./logo/staff.svg";
import { ReactComponent as Billing } from "./logo/bill.svg";
import { ReactComponent as Account } from "./logo/account.svg";
import { ReactComponent as Libary } from "./logo/libary.svg";
import { ReactComponent as Inventory } from "./logo/inventory.svg";
import { ReactComponent as Exam } from "./logo/exam.svg";
import { ReactComponent as Lms } from "./logo/Lms.svg";
import { ReactComponent as Transport } from "./logo/bus.svg";
import { ReactComponent as Hamburger } from "./logo/ham-burger.svg";
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
    { name: "Lms", value: Lms },
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
        className="min-w-[72px] py-8 shadow-lg top-[64px] md:static z-10 absolute h-fit min-h-screen text-sm sm:inline hidden bg-white "
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
                  curr.name === "Student" ? "brightness-75" : ""
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
