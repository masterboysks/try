import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../../../components/Buttons";
import { Input, Select, SelectDisabled } from "../../../../components/fields";

export default function Form({ children }) {
  const navigate = useNavigate();
  const arrayClassSemester = ["jkfdh", "dsfjhk"];
  const arrayFaculty = ["jkfdh", "dsfjhk"];
  const [level, setLevel] = useState("Select");
  const [classSemester, setClassSemester] = useState("Select");
  const [faculty, setFaculty] = useState("Select");
  const [examStartTime, setExamStartTime] = useState("");
  const [examEndTime, setExamEndTime] = useState("");
  const [errorClassSemester, setErrorClassSemester] = useState(false);
  const [errorExamStartTime, setErrorExamStartTime] = useState(false);
  const [errorExamEndTime, setErrorExamEndTime] = useState(false);
  const handleSubmit = () => {
    console.log({ classSemester, examEndTime, faculty, examStartTime });
    let temp = false;
    classSemester === "Select" && (temp = true) && setErrorClassSemester(true);
    examStartTime || ((temp = true) && setErrorExamStartTime(true));
    examEndTime || ((temp = true) && setErrorExamEndTime(true));
    temp || navigate(-1);
  };
  return (
    <>
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="">
            {/* disabled text */}
            <SelectDisabled value={level} label="Level" />
          </div>
          <div className="">
            <Select
              label="Class/Semester*"
              error={errorClassSemester}
              setError={setErrorClassSemester}
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
            <Input
              label="Exam start time*"
              type="time"
              value={examStartTime}
              setValue={setExamStartTime}
              error={errorExamStartTime}
              setError={setErrorExamStartTime}
            />
          </div>
          <div className="">
            <Input
              label="Exam end time*"
              type="time"
              value={examEndTime}
              setValue={setExamStartTime}
              error={errorExamEndTime}
              setError={setErrorExamEndTime}
            />
          </div>
        </div>
      </form>
      {children}
      <div className="w-fit ml-auto my-6 flex">
        <div onClick={() => navigate(-1)}>
          <SecondaryButton>Cancel</SecondaryButton>
        </div>
        <PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
      </div>
    </>
  );
}
