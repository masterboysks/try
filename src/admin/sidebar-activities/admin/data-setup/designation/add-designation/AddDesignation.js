import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadnav from "../../../../../components/Breadnav";
import Break from "../../../../../components/Break";
import { Input, Select } from "../../../../../components/fields";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Designation",
    href: "/admin/data-setup/designation",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/data-setup/designation/add",
    current: true,
  },
];

const AddDesignation = () => {
  const arrayDepartment = ["jdskhf", "djshjh"];
  const [department, setDepartment] = useState("Select");
  const [designation, setDesignation] = useState("");

  //
  const [errorDepartment, setErrorDepartment] = useState(false);
  const [errorDesignation, setErrorDesignation] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ department, designation });
    let temp = false;
    department === "Select" && (temp = true) && setErrorDepartment(true);
    designation || setErrorDesignation(true) || (temp = true);
    temp || navigate("/admin/data-setup/designation");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add designation" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Select
              label="Department*"
              value={arrayDepartment}
              selected={department}
              setSelected={setDepartment}
              error={errorDepartment}
              setError={setErrorDepartment}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Designation*"
              value={designation}
              setValue={setDesignation}
              placeholder="Manager"
              error={errorDesignation}
              setError={setErrorDesignation}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit sm:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/data-setup/university-board"
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
    </>
  );
};

export default AddDesignation;
