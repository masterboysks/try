import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../breadnav";
import Details from "./Details";
import Table from "./Table";

export default function OpenMarksheet() {
  const { studentName, StudentId } = useParams();
  const pages = [
    { name: "Exam", href: "#", current: false },
    {
      name: "Exam report",
      href: "#",
      current: false,
    },
    {
      name: "Marksheet",
      href: "/exam/exam-report/marksheet",
      current: false,
    },
    {
      name: studentName,
      href: "#",
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Details />
      <Table></Table>
    </>
  );
}
