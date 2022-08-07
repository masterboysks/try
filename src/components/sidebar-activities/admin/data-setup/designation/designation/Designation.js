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
    name: "Designation",
    href: "/admin/data-setup/designation",
    current: true,
  },
];
const Designation = () => {
  return (
    <>
      <Breadcurm pages={pages} />
      <Table />
    </>
  );
};

export default Designation;
