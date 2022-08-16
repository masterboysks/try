import Breadnav from "../../../../components/Breadnav";
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
      <Breadnav pages={pages} />
      <Form></Form>
      <Table></Table>
    </>
  );
}
