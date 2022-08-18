import Breadnav from "../../../../../components/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Assign Subject",
    href: "/admin/data-setup/assign-subject",
    current: true,
  },
];
const AssignSubject = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default AssignSubject;
