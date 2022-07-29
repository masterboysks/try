import React from "react";
import Break from "../break";
import Breadcurm from "./breadCurm";
import Form from "./Form";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Organization setup",
    href: "/admin/organization-setup/",
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
