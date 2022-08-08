import React from "react";
import BreadNav from "../../../breadnav";
import Break from "../../../break";
import Form from "./Form";
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
    current: false,
  },
  {
    name: "Add",
    href: "/exam/exam-setup/grading-system/add",
    current: true,
  },
];
export default function AddGradeSystem() {
  return (
    <>
      <BreadNav pages={pages}></BreadNav>
      <Break title="Add grade system"></Break>
      <Form></Form>
    </>
  );
}
