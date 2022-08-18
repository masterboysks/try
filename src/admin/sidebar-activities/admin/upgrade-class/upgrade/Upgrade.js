import Table from "./Table";
import Breadnav from "../../../../components/Breadnav";
import Form from "./Form";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Upgrade Class",
    href: "/admin/upgrade/",
    current: true,
  },
];

export default function Upgrade() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </div>
  );
}
