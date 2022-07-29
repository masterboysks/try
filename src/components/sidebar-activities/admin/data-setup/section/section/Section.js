import Breadcurm from "../../breadcurm";
import Tables from "./Table";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Section",
    href: "/admin/data-setup/section",
    current: true,
  },
];
const Section = () => {
  return (
    <>
      <Breadcurm pages={pages} />
      <Tables />
    </>
  );
};

export default Section;
