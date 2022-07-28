import Breadnavs from "../../Breadnavs";
import Break from "../../Break";
import Tabs from "../../Tabs";
import AddAcademicDetailsForm from "./AddAcademicDetailsForm";
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
const AddAcademicDetails = () => {
  return (
    <div className=" sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1">
      <div className="top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
        <div className="-z-10 w-11/12 mx-auto text-sm">
          <Breadnavs />
          <Tabs tabs={tabs} />
          <Break title="Add academic details" />
          <AddAcademicDetailsForm />
        </div>
      </div>
    </div>
  );
};

export default AddAcademicDetails;
