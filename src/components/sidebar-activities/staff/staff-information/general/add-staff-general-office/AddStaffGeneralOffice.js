import Breadnavs from "../../Breadnavs";
import Steps from "../../Steps";
import Tabs from "../add-staff-general-personal/Tabs";
import OfficeDetailsForm from "./OfficeDetailsForm";

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
const AddStaffGeneralPersonal = () => {
  return (
    <div className=" sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1">
      <div className="top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
        <div className="-z-10 w-11/12 mx-auto text-sm">
          <Breadnavs />
          <Tabs />
          <Steps steps={steps} title="Office details" />
          <OfficeDetailsForm />
        </div>
      </div>
    </div>
  );
};

export default AddStaffGeneralPersonal;
