import React from "react";
import Breadcurm from "../../Breadnavs";
import Break from "../../Break";
import Form from "./Form";
import Table from "./Table";

const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Staff attendence",
    href: "/staff/staff-attendence/",
    current: true,
  },
];
function StaffAttendence() {
  return (
    <>
      <Breadcurm pages={pages} />
      <Break title="Attendence" />
      <Form></Form>
      <Table></Table>
    </>
  );
}

export default StaffAttendence;
