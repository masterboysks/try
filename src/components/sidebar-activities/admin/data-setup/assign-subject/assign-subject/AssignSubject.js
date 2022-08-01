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
    name: "Assign Subject",
    href: "/admin/data-setup/assign-subject",
    current: true,
  },
];
const AssignSubject = () => {
  return (
    <>
      <Breadcurm pages={pages} />
      <Table />
    </>
  );
};

export default AssignSubject;
