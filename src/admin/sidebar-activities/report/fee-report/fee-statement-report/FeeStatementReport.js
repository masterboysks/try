import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../components/Breadnav";
import Break from "../../../../components/Break";
import Details from "./Details";
import Table from "./Table";

export default function ClassStatement() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Report", href: "#", current: false },
    {
      name: "Fee report",
      href: "#",
      current: false,
    },

    {
      name: classOfSchool + "-" + section,
      href: "#",
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details />
      <Break title="Fee statement"></Break>
      <Table></Table>
    </>
  );
}
