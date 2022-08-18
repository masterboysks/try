import React from "react";
import Breadnav from "../../../../../components/Breadnav";
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
    name: "Student attendence report",
    href: "/report/attendence-report/student-attendence-report",
    current: true,
  },
];
export default function StudentAttendenceReportClasses() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
