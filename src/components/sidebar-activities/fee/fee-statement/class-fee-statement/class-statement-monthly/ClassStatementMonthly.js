import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../breadnav";
import Break from "../../../break";
import Details from "./Details";
import Table from "./Table";

export default function ClassStatement() {
  const { classOfSchool } = useParams();
  const pages = [
    { name: "Fee", href: "#", current: false },
    {
      name: "Fee statement",
      href: "#",
      current: false,
    },
    {
      name: "Class fee statement",
      href: "/fee/fee-statement/class-fee-statement",
      current: false,
    },
    {
      name: `${classOfSchool.substring(0, 1).toUpperCase()}${classOfSchool
        .substring(1)
        .split("-")
        .slice(0, -1)
        .join(" ")}-${`${classOfSchool
        .substring(1)
        .split("-")
        .slice(-1)}`.toUpperCase()}`,
      href: "",
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details />
      <Break title="Monthly fee statement"></Break>
      <Table></Table>
    </>
  );
}
