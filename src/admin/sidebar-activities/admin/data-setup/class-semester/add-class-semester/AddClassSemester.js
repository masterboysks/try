import { Link, useNavigate } from "react-router-dom";
import { MultipleSelect, Select } from "../../../../../components/fields";
import { useState } from "react";
import Breadnav from "../../../../../components/Breadnav";
import Break from "../../../../../components/Break";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Class/semester",
    href: "/admin/data-setup/class-semester",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/data-setup/class-semester/add",
    current: true,
  },
];
const subjectType = [
  { id: "compulsary", title: "Compulsary subject" },
  { id: "optinal", title: "Elective subject" },
];
const AddClassSemester = () => {
  const levelOption = ["ho", "dfshg", "dskh"];
  const classOption = ["ho", "dfshg", "dskh"];
  const facultyOption = ["ho", "dfshg", "dskh"];
  const subFacultyOption = ["ho", "dfshg", "dskh"];
  const sectionsOption = ["ho", "dfshg", "dskh"];
  const [level, setLevel] = useState("Select");
  const [classSemester, setClassSemester] = useState("Select");
  const [faculty, setFaculty] = useState("Select");
  const [subFaculty, setSubFaculty] = useState("Select");
  const [section, setSection] = useState([]);

  //
  const [errorSection, setErrorSection] = useState(false);
  const [errorLevel, setErrorLevel] = useState(false);
  const [errorClass, setErrorClass] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ level, classSemester, faculty, subFaculty, section });
    let temp = false;
    section.length === 0 && (temp = true) && setErrorSection(true);
    level === "Select" && (temp = true) && setErrorLevel(true);
    classSemester === "Select" && (temp = true) && setErrorClass(true);

    temp || navigate("/admin/data-setup/class-semester");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add Class/Semester" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Select
              label="Level*"
              value={levelOption}
              selected={level}
              setSelected={setLevel}
              error={errorLevel}
              setError={setErrorLevel}
            />
          </div>
          <div>
            <Select
              label="Class/Semester*"
              value={classOption}
              selected={classSemester}
              setSelected={setClassSemester}
              error={errorClass}
              setError={setErrorClass}
            />
          </div>
          <div>
            <Select
              label="Faculty"
              value={facultyOption}
              selected={faculty}
              setSelected={setFaculty}
            />
          </div>
          <div>
            <Select
              label="Sub faculty"
              value={subFacultyOption}
              selected={subFaculty}
              setSelected={setSubFaculty}
            />
          </div>

          <div>
            <MultipleSelect
              label="Sections*"
              value={sectionsOption}
              selected={section}
              error={errorSection}
              setError={setErrorSection}
              setSelected={setSection}
            />

            <div className=" my-3">
              *Note : You can select multiple section at once
            </div>
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row col-span-full xl:col-span-4 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/data-setup/class-semester"
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

export default AddClassSemester;
