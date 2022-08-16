import React from "react";
import Breadnav from "../../../../components/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Report", href: "#", current: false },
  {
    name: "Exam report",
    href: "/report/exam-report",
    current: true,
  },
];
export default function ExamReportClasses() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
