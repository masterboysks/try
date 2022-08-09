import React from "react";
import BreadNav from "../../../breadnav";
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
      <BreadNav pages={pages} />
      <Form></Form>
      <Table></Table>
    </>
  );
}
