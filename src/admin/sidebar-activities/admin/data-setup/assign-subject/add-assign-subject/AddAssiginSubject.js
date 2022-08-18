import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadnav from "../../../../../components/Breadnav";
import Break from "../../../../../components/Break";
import { MultipleSelect, Select } from "../../../../../components/fields";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Assign Subject",
    href: "/admin/data-setup/assign-subject",

    current: false,
  },

  {
    name: "Add",
    href: "#",
    current: true,
  },
];
const compulsarySubject = ["Science", "Maths", "Nepali", "English", "Social"];
const optionalSubject = ["Optional Maths", "Computer", "Economic", "Account"];
const AddAssignSubject = () => {
  let labelOption = ["fdjhsduj", "fdsajkh"];
  let classSemesterOption = ["fdjhsduj", "fdsajkh"];
  let facultyOption = ["fdjhsduj", "fdsajkh"];
  let subFacultyOption = ["fdjhsduj", "fdsajkh"];
  const sectionOption = ["fdjhsduj", "fdsajkh"];
  const [label, setLabel] = useState("Select");
  const [classSemester, setClassSemester] = useState("Select");
  const [faculty, setFaculty] = useState("Select");
  const [subFaculty, setSubFaculty] = useState("Select");
  const [section, setSection] = useState([]);

  //
  const [errorSection, setErrorSection] = useState(false);
  const [errorClass, setErrorClass] = useState(false);
  const [errorLevel, setErrorLevel] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ label, classSemester, faculty, subFaculty, section });
    let temp = false;
    section.length === 0 && setErrorSection(true) && (temp = true);
    label === "Select" && setErrorLevel(true) && (temp = true);
    classSemester === "Select" && (temp = true) && setErrorClass(true);
    temp || navigate("/admin/data-setup/academic-year");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add subject" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Select
              label="Level*"
              id="level"
              name="level"
              value={labelOption}
              selected={label}
              setSelected={setLabel}
              error={errorLevel}
              setError={setErrorLevel}
            />
          </div>
          <div>
            <Select
              label="Class/Semester*"
              id="Class/Semester"
              name="Class/Semester"
              value={classSemesterOption}
              selected={classSemester}
              setSelected={setClassSemester}
              error={errorClass}
              setError={setErrorClass}
            />
          </div>
          <div>
            <Select
              label="Faculty"
              id="Faculty"
              name="Faculty"
              value={facultyOption}
              selected={faculty}
              setSelected={setFaculty}
            />
          </div>
          <div>
            <Select
              label="Sub-faculty"
              id="Sub-faculty"
              name="Sub-faculty"
              value={subFacultyOption}
              selected={subFaculty}
              setSelected={setSubFaculty}
            />
          </div>
          <div>
            <MultipleSelect
              label="Section*"
              id="Section"
              name="Section"
              error={errorSection}
              setError={setErrorSection}
              value={sectionOption}
              selected={section}
              setSelected={setSection}
            />

            <div className=" text-primary-grey-600 mt-3 text-xs">
              *Note:You can select multiple section at once
            </div>
          </div>
        </div>

        {/* custom component required for this ref multiple select true and false */}
        <div className="sm:grid-cols-2 lg:grid-cols-3 lg:w-2/3 mt-9 grid grid-cols-1 gap-4">
          <div className="col-span-full pt-5">
            Select for compulsary Subject*
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div className="col-span-full pt-5">Select for elective Subject</div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="w-fit col-span-full my-6 ml-auto">
            <div className=" w-fit flex">
              <Link
                to="/admin/data-setup/assign-subject"
                className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
              >
                Cancel
              </Link>
              <div
                onClick={handleSubmit}
                className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddAssignSubject;
