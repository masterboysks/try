import React from "react";
import AboveForm from "./components/AboveForm";
import GuardianFormTrue from "./components/GuardianFormTrue";

const AddguardianTrue = () => {
  const steps = [
    {
      id: "01",
      name: "Student details",
      href: "/student/add-student-details",
      status: "complete",
    },
    { id: "02", name: "Guardian details", href: "#", status: "current" },
    { id: "03", name: "Address details", href: "#", status: "upcomming" },
    { id: "04", name: "Class details", href: "#", status: "upcomming" },
    { id: "05", name: "Fee details", href: "#", status: "upcomming" },
  ];
  return (
    <div className="sm:ml-[72px] box-border md:ml-0 md:w-full  md:min-w-0 flex-1z">
      <div className=" absolute left-0 w-full top-28 sm:mt-9 md:block sm:static -z-10 ">
        <div className="-z-10 w-11/12 mx-auto text-sm ">
          <AboveForm steps={steps} title="Local Guardian details" />
          <GuardianFormTrue />
        </div>
      </div>
    </div>
  );
};

export default AddguardianTrue;
