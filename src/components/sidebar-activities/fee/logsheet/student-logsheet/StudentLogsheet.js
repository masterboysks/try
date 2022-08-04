import React from "react";
import Breadnav from "../../breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Fee", href: "#", current: false },
  {
    name: "Student logsheet",
    href: "/fee/student-logsheet",
    current: true,
  },
];
export default function StudentLogsheet() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Form></Form>
      <Table></Table>
    </>
  );
}
