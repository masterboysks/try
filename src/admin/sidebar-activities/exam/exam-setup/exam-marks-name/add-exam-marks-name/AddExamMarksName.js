import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadnav from "../../../../../components/Breadnav";
import Break from "../../../../../components/Break";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../../../components/Buttons";
import { Input } from "../../../../../components/fields";

const pages = [
  { name: "Exam", href: "#", current: false },
  {
    name: "Exam setup",
    href: "#",
    current: false,
  },
  {
    name: "Exam marks name",
    href: "/exam/exam-setup/exam-marks-name",
    current: false,
  },
  {
    name: "add",
    href: "/exam/exam-setup/exam-marks-name/add",
    current: true,
  },
];
export default function ExamMarksName() {
  const [examMarksName, setExamMarksName] = useState("");
  const [errorExamMarksName, setErrorExamMarksName] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ examMarksName });

    examMarksName
      ? navigate("/exam/exam-setup/exam-marks-name")
      : setErrorExamMarksName(true);
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add"></Break>
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Input
              label="Exam marks name*"
              value={examMarksName}
              setValue={setExamMarksName}
              error={errorExamMarksName}
              setError={setErrorExamMarksName}
              placeholder="Partical marks"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link to="/exam/exam-setup/exam-marks-name">
                <SecondaryButton>Cancel</SecondaryButton>
              </Link>
              <span onClick={handleSubmit}>
                <PrimaryButton>Save</PrimaryButton>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
