import React from "react";
import Breadcurm from "../breadnav";
import Break from "../break";
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
