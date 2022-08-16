import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../components/Breadnav";
import Details from "./Details";
import Form from "./Form";
import Table from "./Table";

export default function ExamReportClass() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Report", href: "#", current: false },
    {
      name: "Exam report",
      href: "/report/exam-report",
      current: false,
    },

    {
      name: `${classOfSchool}-${section}`,
      href: "#",
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details />
      <Form />
      <Table />
    </>
  );
}
