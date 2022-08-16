import React from "react";
import Breadnav from "../../../../../components/Breadnav";
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
      <Breadnav pages={pages} />
      <Table></Table>
    </>
  );
}
