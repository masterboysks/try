import React from "react";
import Breadnav from "../../breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#", current: false },
  {
    name: "Admit card",
    href: "/exam/admit-card",
    current: true,
  },
];
export default function AdmitCard() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Form></Form>
      <Table></Table>
    </>
  );
}
