import Breadcurm from "../../breadcurm";
import Tables from "./Tables";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "University/Board",
    href: "/admin/data-setup/university-board",
    current: true,
  },
];
const UniversityBoard = () => {
  return (
    <>
      <Breadcurm pages={pages} />
      <Tables />
    </>
  );
};

export default UniversityBoard;
