import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../breadnav";
import { Form } from "./Form";
import LogTable from "./LogTable";
import Profile from "./Profile";

export default function Logsheet() {
  const { student } = useParams();
  const pages = [
    { name: "Fee", href: "#", current: false },
    {
      name: "Student logsheet",
      href: "/fee/student-logsheet",
      current: false,
    },
    {
      name: `${
        student.split("-")[0][0].toUpperCase() +
        student.split("-")[0].substring(1)
      }'s logsheet`,
      href: "/fee/student-logsheet",
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Profile></Profile>
      <Form></Form>
      <LogTable />
    </>
  );
}
