import React from "react";
import Breadnav from "../../breadnav";
import Break from "../../break";
import Form from "./Form";
const pages = [
  { name: "Fee", href: "#", current: false },
  {
    name: "Fee assign",
    href: "/fee/fee-assign/",
    current: true,
  },
];
export default function Assign() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Break title="Class info" />
      <Form />
    </>
  );
}
