import React from "react";
import Breadcurm from "../../breadnav";
import Table from "./Table";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Push notification",
    href: "/admin/notice",
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
