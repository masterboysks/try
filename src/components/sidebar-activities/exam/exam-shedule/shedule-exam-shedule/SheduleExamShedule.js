import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../breadnav";
import Form from "./Form";

export default function AddSheduleExamShedule() {
  const { examName } = useParams();
  const pages = [
    { name: "Exam", href: "#", current: false },
    {
      name: "Exam shedule",
      href: "#",
      current: false,
    },
    {
      name: examName,
      href: `/exam/exam-shedule/shedule/${examName}`,
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Form />
    </>
  );
}