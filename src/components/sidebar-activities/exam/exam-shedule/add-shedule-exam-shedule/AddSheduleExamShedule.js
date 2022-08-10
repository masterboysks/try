import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../breadnav";
import Break from "../../break";
import Form from "./Form";
import Table from "./Table";

export default function AddSheduleExamShedule() {
  const { examName } = useParams();
  const pages = [
    { name: "Exam", href: "#", current: false },
    {
      name: "Exam shedule",
      href: "/exam/exam-shedule",
      current: false,
    },
    {
      name: examName,
      href: `/exam/exam-shedule/shedule/${examName}`,
      current: false,
    },
    {
      name: "Add",
      href: `/exam/exam-shedule/shedule/${examName}/add`,
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Break title="Exam schedule"></Break>
      <Form />
      <Table />
    </>
  );
}
