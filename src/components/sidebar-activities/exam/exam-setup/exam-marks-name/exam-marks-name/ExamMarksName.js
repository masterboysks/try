import React from "react";
import BreadNav from "../../../breadnav";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#", current: false },
  {
    name: "Exam setup",
    href: "#",
    current: false,
  },
  {
    name: "Exam marks name",
    href: "/exam/exam-setup/exam-marks-name",
    current: true,
  },
];
export default function ExamMarksName() {
  return (
    <>
      <BreadNav pages={pages}></BreadNav>
      <Table />
    </>
  );
}
