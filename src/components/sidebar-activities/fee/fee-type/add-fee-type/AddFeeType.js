import React from "react";
import Breadnav from "../../breadnav";
import Break from "../../break";
import Form from "./Form";
const pages = [
  { name: "Fee", href: "#", current: false },
  {
    name: "Fee type",
    href: "/fee/fee-type/",
    current: false,
  },
  {
    name: "Add",
    href: "/fee/fee-type/add",
    current: true,
  },
];
export default function AddFeeType() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Break title="Add fee"></Break>
      <Form></Form>
    </>
  );
}
