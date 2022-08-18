import React from "react";
import Breadnav from "../../../../components/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Fee", href: "#", current: false },
  {
    name: "Fee assign",
    href: "/fee/fee-assign/",
    current: true,
  },
];
export default function FeeAssign() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table></Table>
    </>
  );
}
