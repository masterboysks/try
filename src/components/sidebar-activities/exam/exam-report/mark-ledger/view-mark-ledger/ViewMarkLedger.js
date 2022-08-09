import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../breadnav";
import Details from "./Details";

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
      name: "Marksheet",
      href: "/exam/exam-report/marksheet",
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
    </>
  );
}
