import Breadnavs from "../../Breadnavs";
import Steps from "../../Steps";
import Tabs from "./Tabs";
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
const AddStaffGeneralPersonal = () => {
  return (
    <div className=" sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1">
      <div className="top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
        <div className="-z-10 w-11/12 mx-auto text-sm">
          <Breadnavs />
          <Tabs />
          <Steps steps={steps} title="General details" />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default AddStaffGeneralPersonal;
