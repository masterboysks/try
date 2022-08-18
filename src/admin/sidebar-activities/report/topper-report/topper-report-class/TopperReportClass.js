import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../components/Breadnav";
import Break from "../../../../components/Break";
import AttendenceTopper from "./AttendenceTopper";
import Details from "./Details";
import ExamTopper from "./ExamTopper";

export default function TopperReportClass() {
  const { classOfSchool } = useParams();

  const pages = [
    { name: "Report", href: "#", current: false },
    {
      name: "Topper Report",
      href: "/report/topper-report",
      current: false,
    },
    {
      name: classOfSchool,
      href: "#",
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Details />
      <Break title="Exam topper" />
      <ExamTopper />
      <Break title="Attendence topper" />
      <AttendenceTopper />
    </>
  );
}
