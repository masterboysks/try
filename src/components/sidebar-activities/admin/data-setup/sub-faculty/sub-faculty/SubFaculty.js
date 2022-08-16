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
    name: "Sub-Faculty",
    href: "/admin/data-setup/sub-faculty",
    current: true,
  },
];
const SubFaculty = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default SubFaculty;
