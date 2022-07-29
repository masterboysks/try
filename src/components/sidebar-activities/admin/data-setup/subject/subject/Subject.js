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
    name: "Subject",
    href: "/admin/data-setup/subject",
    current: true,
  },
];
const Subject = () => {
  return (
    <>
      <Breadcurm pages={pages} />
      <Table />
    </>
  );
};

export default Subject;
