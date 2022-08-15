import React, { useState } from "react";
import { Input, Select } from "../../../../components/fields";
import Search from "@mui/icons-material/SearchOutlined";
export default function Form() {
  const arrayDepartment = ["sdjkh", "jhd", "djsh"];
  const arrayDesignation = ["sdjkh", "jhd", "djsh"];
  const [fromDate, setFromDate] = useState("");
  const [errorFromDate, setErrorFromDate] = useState(false);
  const [errorToDate, setErrorToDate] = useState(false);
  const [toDate, setToDate] = useState("");
  const [department, setDepartment] = useState("Select");
  const [designation, setDesignation] = useState("Select");
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const handleSearch = () => {
    console.log({ fromDate, toDate, department, designation, name });
    toDate || setErrorToDate(true);
    fromDate || setErrorFromDate(true);
    name || setErrorName(true);
  };
  return (
    <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
      <div className="">
        <Input
          value={name}
          setValue={setName}
          error={errorName}
          setError={setErrorName}
          label="Name*"
          placeholder="Roshan"
        />
      </div>
      <div className="">
        <Input
          value={fromDate}
          setValue={setFromDate}
          error={errorFromDate}
          setError={setErrorFromDate}
          type="date"
          label="From date*"
        />
      </div>
      <div className="">
        <Input
          value={toDate}
          setValue={setToDate}
          error={errorToDate}
          setError={setErrorToDate}
          type="date"
          label="To date*"
        />
      </div>
      <div className="">
        <Select
          value={arrayDepartment}
          selected={department}
          setSelected={setDepartment}
          label="Department"
        />
      </div>
      <div className="">
        <Select
          value={arrayDesignation}
          selected={designation}
          setSelected={setDesignation}
          label="Designation"
        />
      </div>
      <div className="h-fit w-fit bg-primary-btn xl:col-span-3 sm:box-content box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
        {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
        <Search className="w-4 mx-auto" onClick={handleSearch}></Search>
      </div>
    </form>
  );
}
