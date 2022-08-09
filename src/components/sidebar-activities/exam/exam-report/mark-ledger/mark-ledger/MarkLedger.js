import React from "react";
import Breadnav from "../../../breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#", current: false },
  {
    name: "Exam report",
    href: "#",
    current: false,
  },
  {
    name: "Marksledger",
    href: "/exam/exam-report/marks-ledger",
    current: true,
  },
];
export default function MarkLedger() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Form />
      <Table />
    </>
  );
}
