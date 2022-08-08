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
    name: "Exam name",
    href: "/exam/exam-setup/exam-name",
    current: true,
  },
];
export default function ExamName() {
  return (
    <>
      <BreadNav pages={pages}></BreadNav>
      <Table></Table>
    </>
  );
}
