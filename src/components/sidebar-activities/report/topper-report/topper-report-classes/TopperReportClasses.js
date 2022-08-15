import React from "react";
import Breadnav from "../../../../components/Breadnav";
import Form from "./Form";
import Table from "./Table";

const pages = [
  { name: "Report", href: "#", current: false },
  {
    name: "Topper Report",
    href: "/report/topper-report",
    current: true,
  },
];
export default function TopperReportClasses() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Form />
      <Table />
    </>
  );
}
