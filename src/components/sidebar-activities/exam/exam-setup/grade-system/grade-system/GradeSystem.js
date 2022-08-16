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
    name: "Grading system",
    href: "/exam/exam-setup/grading-system",
    current: true,
  },
];
export default function GradeSyatem() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table></Table>
    </>
  );
}
