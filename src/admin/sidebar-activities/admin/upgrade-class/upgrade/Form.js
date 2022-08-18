import { useState } from "react";
import { Select } from "../../../../components/fields";
import SearchIcon from "../../../../components/SearchIcon";

export default function Form() {
  const arrayLevel = ["hfjgk", "dsfjhg", "jkhfd"];
  const arrayClassSemester = ["hfjgk", "dsfjhg", "jkhfd"];
  const arrayFaculty = ["hfjgk", "dsfjhg", "jkhfd"];
  const arraySection = ["hfjgk", "dsfjhg", "jkhfd"];
  const [level, setLevel] = useState("Select");
  const [classSemester, setClassSemester] = useState("Select");
  const [faculty, setFaculty] = useState("Select");
  const [section, setSection] = useState("Select");
  const [errorLevel, setErrorLevel] = useState(false);
  const [errorClassSemester, setErrorClassSemester] = useState(false);
  const [errorSection, setErrorSection] = useState(false);

  const handleSubmit = () => {
    console.log({ level, classSemester, faculty, section });
    let temp = false;
    level === "Select" && (temp = true) && setErrorLevel(true);
    classSemester === "Select" && (temp = true) && setErrorClassSemester(true);
    section === "Select" && (temp = true) && setErrorSection(true);
  };
  return (
    <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
      <div className="">
        <Select
          label="Level*"
          value={arrayLevel}
          selected={level}
          setSelected={setLevel}
          error={errorLevel}
          setError={setErrorLevel}
        />
      </div>
      <div className="">
        <Select
          label="Class/Semester*"
          value={arrayClassSemester}
          selected={classSemester}
          setSelected={setClassSemester}
          error={errorClassSemester}
          setError={setErrorClassSemester}
        />
      </div>
      <div className="">
        <Select
          label="Faculty"
          value={arrayFaculty}
          selected={faculty}
          setSelected={setFaculty}
        />
      </div>
      <div className="">
        <Select
          label="Section*"
          value={arraySection}
          selected={section}
          setSelected={setSection}
          error={errorSection}
          setError={setErrorSection}
        />
      </div>
      <SearchIcon
        className=" lg:col-span-2 xl:col-span-full sm:box-content col-span-full  mt-auto ml-auto "
        onClick={handleSubmit}
      />
    </form>
  );
}
