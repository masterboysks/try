import React, { useState } from "react";

import Search from "@mui/icons-material/SearchOutlined";
import { Input, Select } from "../../../../components/fields";
export default function Form() {
  //
  const arrayGradingSystem = ["GPA", "Percentage"];
  const arrayResultStatus = ["kjdhf", "jhgd"];
  const arrayRemark = ["jhfgd", "fdjkh"];
  const [academicYear, setAcademicYear] = useState("");
  const [examName, setExamName] = useState("");
  const [gradingSystem, setGradingSystem] = useState("GPA");
  const [resultStatus, setResultStatus] = useState("Select");
  const [remark, setRemark] = useState("Select");
  const [errorAcademicYear, setErrorAcademicYear] = useState(false);
  const [errorExamName, setErrorExamName] = useState(false);
  //
  const handleSubmit = () => {
    console.log({
      academicYear,
      examName,
      gradingSystem,
      resultStatus,
      remark,
    });
    academicYear || setErrorAcademicYear(true);
    examName || setErrorExamName(true);
  };
  return (
    <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
      <div className="">
        <Input
          value={academicYear}
          setValue={setAcademicYear}
          error={errorAcademicYear}
          setError={setErrorAcademicYear}
          placeholder="2078"
          label="Academic Year*"
        />
      </div>
      <div className="">
        <Input
          value={examName}
          setValue={setExamName}
          error={errorExamName}
          setError={setErrorExamName}
          placeholder="First term examination"
          label="Exam name*"
        />
      </div>
      <div className="">
        <Select
          label="Grading system"
          value={arrayGradingSystem}
          setSelected={setGradingSystem}
          selected={gradingSystem}
        />
      </div>
      <div className="">
        <Select
          label="Result status"
          value={arrayResultStatus}
          setSelected={setResultStatus}
          selected={resultStatus}
        />
      </div>
      <div className="">
        <Select
          label="Remark"
          value={arrayRemark}
          setSelected={setRemark}
          selected={remark}
        />
      </div>

      <div className="h-fit w-fit bg-primary-btn sm:box-content xl:col-span-3 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
        {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
        <Search className="w-4 mx-auto" onClick={handleSubmit}></Search>
      </div>
    </form>
  );
}
