import Breadnav from "../../../../components/Breadnav";
import Break from "../../break";
import Form from "./Form";
const pages = [
  { name: "Fee", href: "#", current: false },
  {
    name: "Fee type",
    href: "/fee/fee-type/",
    current: false,
  },
  {
    name: "Add",
    href: "/fee/fee-type/add",
    current: true,
  },
];
export default function AddFeeType() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add fee"></Break>
      <Form></Form>
    </>
  );
}
