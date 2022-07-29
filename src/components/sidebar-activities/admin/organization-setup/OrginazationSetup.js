import React from "react";
import Break from "../break";
import Breadcurm from "./breadCurm";
import Form from "./Form";
const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Staff Information",
    href: "/staff/staff-information/",
    current: false,
  },
  {
    name: "Add Staff",
    href: "/staff/staff-information/add-staff/general/personal-details",
    current: true,
  },
];
const OrginazationSetup = () => {
  return (
    <>
      <Breadcurm pages={pages} />
      <Break title="Organization details" />
      <Form />
    </>
  );
};

export default OrginazationSetup;
