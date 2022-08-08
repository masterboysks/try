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
    name: "Exam name",
    href: "/exam/exam-setup/exam-name",
    current: false,
  },
  {
    name: "Add",
    href: "/exam/exam-setup/exam-name/add",
    current: true,
  },
];
export default function AddExamName() {
  return (
    <>
      <BreadNav pages={pages}></BreadNav>
      <Break title="Add exam name"></Break>
      <Form />
    </>
  );
}
