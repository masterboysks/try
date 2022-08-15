import React, { useState } from "react";
import Search from "@mui/icons-material/SearchOutlined";
import { Select } from "../../../../components/fields";

const Form = () => {
  const arrayLevel = ["dskjhg", "djkgh", "ajsguyew"];
  const arrayClass = ["dskjhg", "djkgh", "ajsguyew"];
  const arrayFaculty = ["dskjhg", "djkgh", "ajsguyew"];
  const [level, setLevel] = useState("Select");
  const [classSemester, setClassSemester] = useState("Select");
  const [faculty, setFaculty] = useState("Select");
  const handleSearch = () => {
    console.log({ level, classSemester, faculty });
  };
  return (
    <div className="lg:w-11/12 mb-14 w-full">
      <div className="xl:flex ring-black ring-opacity-5 ring-1 form-solid p-4 my-6 rounded-md shadow">
        <div className="md:grid-cols-2 xl:grid-cols-3 grid flex-1 grid-cols-1 gap-4">
          <div className="">
            <Select
              label="Select date*"
              value={arrayLevel}
              setSelected={setLevel}
              selected={level}
            />
          </div>
          <div className="">
            <Select
              label="Select date*"
              value={arrayClass}
              setSelected={setClassSemester}
              selected={classSemester}
            />
          </div>
          <div className="">
            <Select
              label="Status"
              value={arrayFaculty}
              setSelected={setFaculty}
              selected={faculty}
            />
          </div>
          <div className="md:mx-0 md:ml-auto h-fit w-fit bg-primary-btn md:box-content xl:hidden box-border px-4 py-3 mt-auto ml-auto text-center text-white rounded cursor-pointer">
            {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
            <Search className="w-4 mx-auto"></Search>
          </div>
        </div>
        <div className="w-fit h-fit bg-primary-btn xl:block box-border hidden px-2 py-2 mt-auto ml-3 text-center text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 mx-auto"></Search>
        </div>
      </div>
    </div>
  );
};

export default Form;
