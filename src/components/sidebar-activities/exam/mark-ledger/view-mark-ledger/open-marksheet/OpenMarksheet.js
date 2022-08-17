import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../components/Breadnav";
import Details from "./Details";
import Table from "./Table";

export default function OpenMarksheet() {
  const { classOfSchool, section, studentName, studentId } = useParams();
  const pages = [
    { name: "Exam", href: "#", current: false },

    {
      name: "Marksledger",
      href: "/exam/marks-ledger",
      current: false,
    },
    {
      name: `${classOfSchool} - ${section}`,
      href: `/exam/marks-ledger/view/${classOfSchool}/${section}/${studentName}/${studentId}`,
      current: false,
    },
    {
      name: studentName,
      href: `/exam/marks-ledger/view/${classOfSchool}/${section}/${studentName}/${studentId}`,
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details />
      <Table></Table>
    </>
  );
}
