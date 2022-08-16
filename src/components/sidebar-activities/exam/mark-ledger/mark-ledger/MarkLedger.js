import Breadnav from "../../../../components/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#", current: false },

  {
    name: "Marksledger",
    href: "/exam/marks-ledger",
    current: true,
  },
];
export default function MarkLedger() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
