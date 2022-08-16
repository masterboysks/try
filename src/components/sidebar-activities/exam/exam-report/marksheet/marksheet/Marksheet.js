import Breadnav from "../../../../../components/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#", current: false },
  {
    name: "Exam report",
    href: "#",
    current: false,
  },
  {
    name: "Marksheet",
    href: "/exam/exam-report/marksheet",
    current: true,
  },
];
export default function Marksheet() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form></Form>
      <Table />
    </>
  );
}
