import Steps from "../../Steps";

import Form from "./PersonalDetailsForm";
const steps = [
  {
    id: "01",
    name: "Personal details",
    href: "/staff/staff-information/add-staff/general/personal-details",
    status: "current",
  },
  {
    id: "02",
    name: "Address details",
    href: "/staff/staff-information/add-staff/general/address-details",
    status: "upcomming",
  },
  {
    id: "03",
    name: "Office details",
    href: "/staff/staff-information/add-staff/general/office-details",
    status: "upcomming",
  },
];
const tabs = [
  {
    name: "General details",
    href: "/staff/staff-information/add-staff/general/personal-details",
    current: true,
  },
  {
    name: "Academic details",
    href: "/staff/staff-information/add-staff/academic",
    current: false,
  },
  {
    name: "Documents",
    href: "/staff/staff-information/add-staff/documents",
    current: false,
  },
];
const AddStaffGeneralPersonal = () => {
  return (
    <>
      <Steps steps={steps} title="General details" />
      <Form />
    </>
  );
};

export default AddStaffGeneralPersonal;
