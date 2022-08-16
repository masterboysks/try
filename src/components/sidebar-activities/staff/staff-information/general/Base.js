import { Outlet } from "react-router-dom";
import Breadnav from "../../../../components/Breadnav";
import Tabs from "../Tabs";

const tabs = [
  {
    name: "General details",
    href: "/staff/staff-information/add-staff/general/personal-details",
    current: true,
  },
  {
    name: "Academic details",
    href: "/staff/staff-information/add-staff/academic",
    current: false,
  },
  {
    name: "Documents",
    href: "/staff/staff-information/add-staff/documents",
    current: false,
  },
];
const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Staff Information",
    href: "/staff/staff-information/",
    current: false,
  },
  {
    name: "Add",
    href: "/staff/staff-information/Add",
    current: true,
  },
];
const Base = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Tabs tabs={tabs} />
      <Outlet />
    </>
  );
};

export default Base;
