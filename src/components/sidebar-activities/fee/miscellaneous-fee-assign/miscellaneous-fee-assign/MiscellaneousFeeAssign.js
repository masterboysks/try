import React from "react";
import Breadcurm from "../../breadnav";
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
      <Breadcurm pages={pages}></Breadcurm>
      <Table></Table>
    </div>
  );
}

export default Notice;
