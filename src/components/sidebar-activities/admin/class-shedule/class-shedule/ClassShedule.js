import Search from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import Breadcurm from "../../breadnav";
import { PrinterIcon } from "@heroicons/react/solid";
import { Select } from "../../../../components/fields";
import { useState } from "react";
import Faculty from "../../data-setup/faculty/faculty/Faculty";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Class schedule",
    href: "/admin/class-schedule/",
    current: true,
  },
];
const people = [
  {
    startTime: "11",
    endTime: "14",
    subjectTeacher: "Anil",
    subject: "English",
  },
  {
    startTime: "14",
    endTime: "20",
    subjectTeacher: "Dheren",
    subject: "Spanish",
  },
  {
    startTime: "5",
    endTime: "11",
    subjectTeacher: "Alisha",
    subject: "Maths",
  },
  ,
];

const ClassSchedule = () => {
  const [level, setLevel] = useState("");
  const [classSemester, setClassSemester] = useState("");
  const [faculty, setFaculty] = useState("");
  const [section, setSection] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    console.log({ level, classSemester, faculty, section });
  };
  return (
    <>
      <Breadcurm pages={pages} />
      <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
        <div className="">
          <Select
            id="level"
            name="level"
            error={error}
            label="Level*"
            value={["Select", "hi", "hlo"]}
            selected={level}
            setSelected={setLevel}
          ></Select>
        </div>
        <div className="">
          <Select
            id="class-semester"
            name="class-semester"
            error={error}
            label="Class/Semester*"
            value={["Select", "hi", "hlo"]}
            selected={classSemester}
            setSelected={setClassSemester}
          ></Select>
        </div>
        <div className="">
          <Select
            id="faculty"
            name="faculty"
            label="Faculty"
            value={["Select", "hi", "hlo"]}
            selected={faculty}
            setSelected={setFaculty}
          ></Select>
        </div>
        <div className="">
          <Select
            id="section"
            name="section"
            error={error}
            label="Section*"
            value={["Select", "hi", "hlo"]}
            selected={section}
            setSelected={setSection}
          ></Select>
        </div>
        <div className="h-fit w-fit bg-primary-btn lg:col-span-2 xl:col-span-full sm:box-content col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 mx-auto" onClick={handleSubmit}></Search>
        </div>
      </form>
      <div className="lg:flex my-12">
        <div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow">
          <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Class:</span>
              <span className="text-primary-grey-700">1</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Section:</span>
              <span className="text-primary-grey-700">B</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Level:</span>
              <span className="text-primary-grey-700">School level</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">No of students:</span>
              <span className="text-primary-grey-700">1</span>
            </div>
            <div className=" flex justify-between py-2">
              <span className="text-primary-grey-600">Faculty:</span>
              <span className="text-primary-grey-700"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-11 w-full">
        <div className="sm:grid lg:grid-cols-4 sm:items-center justify-between grid-cols-2">
          <div className="col-span-2">
            <div className="">
              <Select
                id="day"
                name="day"
                label="Day*"
                error={error}
                value={["Sun", "Mon", "Tue", "Thur", "Fri", "Sat"]}
                selected={day}
                setSelected={setDay}
              />
            </div>
          </div>
          <div className=" flex col-span-2 mt-auto ml-auto">
            <div className="text-primary-btn print flex items-center p-2 mx-1 mt-auto font-medium">
              <span className="mx-1">Print</span>
              <div className="w-7">
                <PrinterIcon fontSize="medium" />
              </div>
            </div>
            <Link
              to="#"
              className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
            >
              Edit
            </Link>
            <Link
              to="/admin/class-schedule/add"
              className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
            >
              Add
            </Link>
          </div>
        </div>
        <div className="my-6">
          <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
            <div className="inline-block w-full align-middle">
              <div className=" w-full rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    "
                      >
                        Subject
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Start time
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                      >
                        End time
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Subject teacher
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <RenderTable currentItems={people} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassSchedule;
