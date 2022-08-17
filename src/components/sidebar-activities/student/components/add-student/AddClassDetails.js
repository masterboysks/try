import AboveForm from "./components/AboveForm";
import ClassForm from "./components/ClassForm";

const steps = [
  {
    id: "01",
    name: "Student details",
    href: "/student/student-information/add-student-details",
    status: "complete",
  },
  {
    id: "02",
    name: "Guardian details",
    href: "/student/student-information/add-student-details/guardian-false",
    status: "complete",
  },
  {
    id: "03",
    name: "Address details",
    href: "/student/student-information/add-address-details",
    status: "complete",
  },
  { id: "04", name: "Class details", href: "#", status: "current" },
  { id: "05", name: "Fee details", href: "#", status: "upcomming" },
];
function AddClassDetails() {
  return (
    <div className="sm:ml-[72px] box-border md:ml-0 md:w-full sm:pt-2 md:min-w-0 flex-1z">
      <div className=" top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
        <div className="-z-10 w-11/12 mx-auto text-sm">
          <AboveForm steps={steps} title="Class details" />
          <ClassForm />
        </div>
      </div>
    </div>
  );
}

export default AddClassDetails;
