import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../components/Breadnav";
import Details from "./Details";
import Form from "./Form";
import Table from "./Table";

export default function StudentAttendenceReportClass() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Report", href: "#", current: false },
    {
      name: "Attendence report",
      href: "#",
      current: false,
    },
    {
      name: "Student attendence report",
      href: "/report/attendence-report/student-attendence-report",
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
      <Details></Details>
      <Form />
      <Table />
    </>
  );
}
