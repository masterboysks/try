import React, { useEffect, useState } from "react";
import { Select } from "../../../../components/fields";

export default function Filter() {
  const arrayLevel = ["hfjgk", "dsfjhg", "jkhfd"];
  const arrayClassSemester = ["hfjgk", "dsfjhg", "jkhfd"];
  const arrayFaculty = ["hfjgk", "dsfjhg", "jkhfd"];
  const arraySection = ["hfjgk", "dsfjhg", "jkhfd"];
  const [level, setLevel] = useState("Select");
  const [classSemester, setClassSemester] = useState("Select");
  const [faculty, setFaculty] = useState("Select");
  const [section, setSection] = useState("Select");
  useEffect(() => {
    let temp = false;
    level === "Select" && (temp = true);
    classSemester === "Select" && (temp = true);
    section === "Select" && (temp = true);
    temp || console.log({ level, classSemester, faculty, section });
  }, [level, classSemester, section, faculty]);

  return (
    <>
      <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-2 mb-6 rounded-md shadow ">
        <div className="">
          <Select
            label="Level*"
            value={arrayLevel}
            selected={level}
            setSelected={setLevel}
          />
        </div>
        <div className="">
          <Select
            label="Class/Semester*"
            value={arrayClassSemester}
            selected={classSemester}
            setSelected={setClassSemester}
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
          />
        </div>
      </form>
    </>
  );
}
