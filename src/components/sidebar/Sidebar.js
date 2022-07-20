import Admin from "./logo/admin.svg";
import Student from "./logo/student.svg";
import Staff from "./logo/staff.svg";
import Billing from "./logo/bill.svg";
import Account from "./logo/account.svg";
import Libary from "./logo/libary.svg";
import Inventory from "./logo/inventory.svg";
import Exam from "./logo/exam.svg";
import Lms from "./logo/Lms.svg";
import Transport from "./logo/bus.svg";
import hamburger from "./logo/ham-burger.svg";

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
      <img
        src={hamburger}
        alt="hamburger"
        className="md:hidden absolute top-[70px] left-2"
        onClick={sidebar}
      />
      <div
        className="w-[72px] py-8 shadow-lg min-h-max h-screen  text-sm sm:block hidden bg-white"
        id="sidebar"
      >
        {activity.map((curr) => {
          return (
            <div
              className={` w-[65px] mx-auto rounded py-1 my-3 ${
                curr.name === "Student" ? "  bg-primary-bg " : ""
              }`}
              key={curr.value}
            >
              <img
                src={curr.value}
                alt={curr.name}
                className={` mx-auto ${
                  curr.name === "Student" ? "brightness-50" : ""
                }`}
              />
              <div className="text-center">{curr.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
