import { Link, useNavigate } from "react-router-dom";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { Input, MultipleSelect, Select } from "../../../../components/fields";
import { useState } from "react";
import Breadnav from "../../../../components/Breadnav";
import Break from "../../../../components/Break";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Class schedule",
    href: "/admin/class-schedule/",
    current: false,
  },
  {
    name: "Class 1 'A'",
    href: "/admin/class-schedule/add/class-1-a",
    current: true,
  },
];
function AddClassShedule() {
  const arrayTeachers = ["hi", "hlo"];
  const arrayDays = ["Sun", "Mon", "Tue", "Thur", "Fri", "Sat"];
  const arraySubjects = ["Sun", "Mon", "Tue", "Thur", "Fri", "Sat"];

  const [days, setDays] = useState([]); //array for multiple
  const [subject, setSubject] = useState("Select"); //single select has one item so no array
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [teacher, setTeacher] = useState("Select");

  const [daysError, setDaysError] = useState(false);
  const [startTimeError, setStartTimeError] = useState(false);
  const [endTimeError, setEndTimeError] = useState(false);
  const [errorSubject, setErrorSubject] = useState(false);
  const [errorTeacher, setErrorTeacher] = useState(false);
  //
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ days, subject, startTime, endTime, teacher });
    let temp = false;
    days.length === 0 && (temp = true) && setDaysError(true);
    subject === "Select" && (temp = true) && setErrorSubject(true);
    teacher === "Select" && (temp = true) && setErrorTeacher(true);
    !startTime && (temp = true) && setStartTimeError(true);
    !endTime && (temp = true) && setEndTimeError(true);

    temp || navigate("/admin/class-schedule");
  };
  return (
    <>
      <div>
        <Breadnav pages={pages} />
        {/* details */}
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
        <Break title="Class schedule" />
        <form
          className="form-solid w-full my-6 rounded-md"
          onSubmit={() => {
            console.log({ days });
          }}
        >
          <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
            {/* multiple select */}
            <div className="col-span-full">
              <MultipleSelect
                id="days"
                name="days"
                label="Days*"
                error={daysError}
                setError={setDaysError}
                value={arrayDays}
                selected={days}
                setSelected={setDays}
              ></MultipleSelect>

              <div className="mt-3">
                *Note:You can select multiple items at once.
              </div>
            </div>
            <div>
              <Select
                id="subject"
                name="subject"
                label="Subject*"
                error={errorSubject}
                setError={setErrorSubject}
                value={arraySubjects}
                selected={subject}
                setSelected={setSubject}
              ></Select>
            </div>
            <div>
              <Input
                id="startTimer"
                name="startTimer"
                type="time"
                label="Start time*"
                value={startTime}
                setValue={setStartTime}
                error={startTimeError}
                setError={setStartTimeError}
              />
              {/*cannot not place placeholder for type time */}
            </div>
            {/* input without placeholder */}
            <div>
              <Input
                id="endTimer"
                name="endTimer"
                type="time"
                label="End time*"
                value={endTime}
                setValue={setEndTime}
                error={endTimeError}
                setError={setEndTimeError}
              />
            </div>
            {/* select */}
            <div>
              <Select
                id="subject-teacher"
                name="subject-teacher"
                label="Subject teacher*"
                error={errorTeacher}
                setError={setErrorTeacher}
                value={arrayTeachers}
                selected={teacher}
                setSelected={setTeacher}
              ></Select>
            </div>
            <div className="col-span-full flex">
              Add subject
              <Link to="/admin/data-setup/subject/add">
                <div className="outline outline-1 outline-primary-grey-700 mx-2 rounded cursor-pointer">
                  <AddOutlinedIcon
                    text="sm"
                    className="text-primary-grey-700"
                  />
                </div>
              </Link>
            </div>

            <div className="col-span-full ml-auto">
              <div className=" w-fit my-auto">
                <Link
                  to="/admin/class-schedule"
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
      </div>
    </>
  );
}

export default AddClassShedule;
