import React from "react";
import Breadcurm from "../../Breadnavs";
import Form from "./Form";
import Table from "./Table";

const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Teacher assign",
    href: "/staff/teacher-assign/",
    current: true,
  },
];
function TeacherAssign() {
  return (
    <>
      <Breadcurm pages={pages} />
      <Form></Form>
      <Table></Table>
    </>
  );
}

export default TeacherAssign;
