import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../breadnav";
import Details from "./Details";
import Table from "./Table";

export default function ViewMarkLedger() {
  const { section, classOfSchool } = useParams();
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
      <Breadnav pages={pages}></Breadnav>
      <Details />
      <Table />
    </>
  );
}
