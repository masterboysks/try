import React from "react";
import Breadnav from "../../breadnav";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#", current: false },
  {
    name: "Exam shedule",
    href: "/exam/exam-shedule",
    current: true,
  },
];
export default function ExamShedule() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Table />
    </>
  );
}
