import React from "react";
import Breadnav from "../../breadnav";
import Table from "./Table";
const pages = [
  { name: "Fee", href: "#", current: false },
  {
    name: "Fee type",
    href: "/fee/fee-type/",
    current: true,
  },
];
export default function FeeType() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table></Table>
    </>
  );
}
