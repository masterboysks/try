import { useParams } from "react-router-dom";
import Form from "./Form";
import Filter from "./Filter";
import { Tab } from "@headlessui/react";
import Table from "./Table";
import Breadnav from "../../../../components/Breadnav";
export default function UpgradeClass() {
  let { classname } = useParams();
  const pages = [
    { name: "Admin", href: "#", current: false },
    {
      name: "Upgrade Class",
      href: "/admin/upgrade/",
      current: false,
    },
    {
      name: classname,
      href: `/admin/upgrade/${classname}`,
      current: true,
    },
  ];
  return (
    <div>
      <Breadnav pages={pages} />
      <Form></Form>
      <Filter />
      <Table />
    </div>
  );
}
