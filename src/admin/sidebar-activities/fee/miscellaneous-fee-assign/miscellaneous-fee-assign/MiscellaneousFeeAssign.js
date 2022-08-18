import React from "react";
import Breadnav from "../../../../components/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Fee", href: "#", current: false },
  {
    name: "Miscellaneous fee assign",
    href: "/fee/miscellaneous-fee-assign",
    current: true,
  },
];
function Notice() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Table></Table>
    </div>
  );
}

export default Notice;
