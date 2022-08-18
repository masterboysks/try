import React from "react";
import Breadnav from "../../../../components/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Report", href: "#", current: false },
  {
    name: "Attendence report",
    href: "#",
    current: false,
  },
  {
    name: "Staff attendence report",
    href: "/report/attendence-report/staff-attendence-report",
    current: true,
  },
];
export default function StaffAttendenceReport() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form></Form>
      <Table />
    </>
  );
}
