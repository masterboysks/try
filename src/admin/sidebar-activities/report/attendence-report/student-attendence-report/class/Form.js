import React, { useState } from "react";
import Search from "@mui/icons-material/SearchOutlined";
import { Input } from "../../../../../components/fields";
export default function Form() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [errorFromDate, setErrorFromDate] = useState(false);
  const [errorToDate, setErrorToDate] = useState(false);
  const handleSubmit = () => {
    console.log({ fromDate, toDate });
    fromDate || setErrorFromDate(true);
    toDate || setErrorToDate(true);
  };
  return (
    <div className="mt-11 lg:w-2/3 w-full">
      <div className="xl:flex ring-black ring-opacity-5 ring-1 form-solid p-4 my-6 rounded-md shadow">
        <div className="md:grid-cols-2 grid flex-1 grid-cols-1 gap-4">
          <div className="">
            <Input
              value={fromDate}
              setValue={setFromDate}
              error={errorFromDate}
              setError={setErrorFromDate}
              label="From date*"
              type="date"
            />
          </div>
          <div className="">
            <Input
              value={toDate}
              setValue={setToDate}
              error={errorToDate}
              setError={setErrorToDate}
              label="To date*"
              type="date"
            />
          </div>

          <div className="md:mx-0 md:ml-auto h-fit w-fit md:col-span-2 bg-primary-btn md:box-content xl:hidden box-border px-4 py-3 mt-auto ml-auto text-center text-white rounded cursor-pointer">
            {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
            <Search className="w-4 mx-auto" onClick={handleSubmit}></Search>
          </div>
        </div>
        <div className="w-fit h-fit bg-primary-btn xl:block box-border hidden px-2 py-2 mt-auto ml-3 text-center text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 ml-auto" onClick={handleSubmit}></Search>
        </div>
      </div>
    </div>
  );
}
