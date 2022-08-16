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
    name: "Class/Semester",
    href: "/admin/data-setup/class-semester",
    current: true,
  },
];
const ClassSemester = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default ClassSemester;
