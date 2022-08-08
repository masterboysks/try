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
    name: "Grading system",
    href: "/exam/exam-setup/grading-system",
    current: true,
  },
];
export default function GradeSyatem() {
  return (
    <>
      <BreadNav pages={pages}></BreadNav>
      <Table></Table>
    </>
  );
}
