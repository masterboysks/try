import AboveForm from "./components/AboveForm";
import DetailsForm from "./components/DetailsForm";
const AddStudent = ({ HasAnotherChild, setHasAnotherChild }) => {
  const steps = [
    { id: "01", name: "Student details", href: "#", status: "current" },
    { id: "02", name: "Guardian details", href: "#", status: "upcomming" },
    { id: "03", name: "Address details", href: "#", status: "upcomming" },
    { id: "04", name: "Class details", href: "#", status: "upcomming" },
    { id: "05", name: "Fee details", href: "#", status: "upcomming" },
  ];

  return (
    <div className="sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1z">
      <div className=" top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
        <div className="-z-10 w-10/12 mx-auto text-sm">
          <AboveForm steps={steps} title="Student details" />
          <DetailsForm
            anotherChildToggle={setHasAnotherChild}
            anotherChild={HasAnotherChild}
          />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
