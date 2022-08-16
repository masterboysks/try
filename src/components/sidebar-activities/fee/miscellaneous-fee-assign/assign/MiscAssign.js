import Breadnav from "../../../../components/Breadnav";
import Break from "../../break";
import Form from "./Form";
const pages = [
  { name: "Fee", href: "#", current: false },
  {
    name: "Miscellaneous fee assign",
    href: "/fee/miscellaneous-fee-assign",
    current: false,
  },
  {
    name: "Assign",
    href: "/fee/miscellaneous-fee-assign/assign",
    current: true,
  },
];
export default function MiscAssign() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Assign misc. fee"></Break>
      <Form />
    </>
  );
}
