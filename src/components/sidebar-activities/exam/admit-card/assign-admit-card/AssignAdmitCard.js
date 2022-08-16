import React from "react";
import Breadnav from "../../../../components/Breadnav";
import Break from "../../break";
import Details from "./Details";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#", current: false },
  {
    name: "Admit card",
    href: "/exam/admit-card",
    current: false,
  },
  {
    name: "Assign admit card",
    href: "#",
    current: true,
  },
];
export default function AssignAdmitCard() {
  return (
    <>
      <Breadnav pages={pages} />
      <Details></Details>
      <Break title="Assign admit card" />
      <Table />
    </>
  );
}
