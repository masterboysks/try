import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadnav from "../../../../../components/Breadnav";
import { Input } from "../../../../../components/fields";
import Break from "../../../break";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Department",
    href: "/admin/data-setup/department",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/data-setup/department/add",
    current: true,
  },
];
const AddDepartment = () => {
  const [department, setDepartment] = useState("");
  //
  const [errorDepartment, setErrorDepartment] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ department });

    department
      ? navigate("/admin/data-setup/department")
      : setErrorDepartment(true);
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add department" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Input
              value={department}
              setValue={setDepartment}
              label="Department*"
              error={errorDepartment}
              setError={setErrorDepartment}
              placeholder="Non-academic"
              type="text"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/data-setup/department"
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

export default AddDepartment;
