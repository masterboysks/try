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
    name: "Subject",
    href: "/admin/data-setup/subject",
    current: true,
  },
];
const Subject = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default Subject;
