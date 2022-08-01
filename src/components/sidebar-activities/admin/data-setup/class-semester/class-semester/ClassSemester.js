import Breadcurm from "../../breadcurm";
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
      <Breadcurm pages={pages} />
      <Table />
    </>
  );
};

export default ClassSemester;
