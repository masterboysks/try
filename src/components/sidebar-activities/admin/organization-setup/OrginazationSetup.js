import React from "react";
import Breadnav from "../../../components/Breadnav";
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
      <Breadnav pages={pages} />
      <Break title="Organization details" />
      <Form />
    </>
  );
};

export default OrginazationSetup;
