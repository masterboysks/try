import { useParams } from "react-router-dom";
import Breadnav from "../../../../../components/Breadnav";
import Break from "../../../../../components/Break";

import Form from "./Form";
import Table from "./Table";

export default function AssignAssignExam() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Exam", href: "#", current: false },
    {
      name: "Exam setup",
      href: "#",
      current: false,
    },
    {
      name: "Exam name",
      href: "/exam/exam-setup/assign-mark",
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
      <Break title="Assign marks" />
      <Form></Form>
      <Table />
    </>
  );
}
