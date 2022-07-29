import Breadnavs from "../../Breadnavs";
import Break from "../../Break";
import Tabs from "../../Tabs";
import Form from "./Form";

const tabs = [
  {
    name: "General details",
    href: "/staff/staff-information/add-staff/general/personal-details",
    current: false,
  },
  {
    name: "Academic details",
    href: "/staff/staff-information/add-staff/academic",
    current: false,
  },
  {
    name: "Documents",
    href: "/staff/staff-information/add-staff/documents",
    current: true,
  },
];
const Document = () => {
  return (
    <>
      <Break title="Add document" />
      <Form />
    </>
  );
};

export default Document;
