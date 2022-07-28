import Breadnavs from "../../Breadnavs";

import Tabs from "../../Tabs";
import AcademicTable from "./AcademicDetailsTable";
const steps = [
  {
    id: "01",
    name: "Personal details",
    href: "/staff/staff-information/add-staff/general/personal-details",
    status: "complete",
  },
  {
    id: "02",
    name: "Address details",
    href: "/staff/staff-information/add-staff/general/address-details",
    status: "complete",
  },
  {
    id: "03",
    name: "Office details",
    href: "/staff/staff-information/add-staff/general/office-details",
    status: "current",
  },
];
const tabs = [
  {
    name: "General details",
    href: "/staff/staff-information/add-staff/general/personal-details",
    current: false,
  },
  {
    name: "Academic details",
    href: "/staff/staff-information/add-staff/academic",
    current: true,
  },
  {
    name: "Documents",
    href: "/staff/staff-information/add-staff/documents",
    current: false,
  },
];
const AcademicDetails = () => {
  return (
    <div className=" sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1">
      <div className="top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
        <div className="-z-10 w-11/12 mx-auto text-sm">
          <Breadnavs />
          <Tabs tabs={tabs} />
          <AcademicTable />
        </div>
      </div>
    </div>
  );
};

export default AcademicDetails;
