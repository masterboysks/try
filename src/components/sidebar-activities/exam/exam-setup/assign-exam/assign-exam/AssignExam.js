import React from "react";
import Breadnav from "../../../../../components/Breadnav";
import Form from "./Form";
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
    href: "/exam/exam-setup/assign-exam",
    current: true,
  },
];
export default function AssignExam() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form></Form>
      <Table></Table>
    </>
  );
}
