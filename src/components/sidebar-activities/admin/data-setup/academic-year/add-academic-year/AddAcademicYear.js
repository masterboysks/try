import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadnav from "../../../../../components/Breadnav";
import Break from "../../../../../components/Break";
import { Checkbox, Input } from "../../../../../components/fields";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Academic year",
    href: "/admin/data-setup/academic-year",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/data-setup/academic-year/add",
    current: true,
  },
];
const AddAcademicYear = () => {
  const [year, setYear] = useState("");
  const [running, setRunning] = useState(false);

  //
  const [errorYear, setErrorYear] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ year, running });

    year ? navigate("/admin/data-setup/academic-year") : setErrorYear(true);
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add Academic year" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Input
              id="year"
              name="year"
              placeholder="2075"
              type="text"
              value={year}
              setValue={setYear}
              label="Academic year*"
              error={errorYear}
              setError={setErrorYear}
            ></Input>
          </div>
          <div className="col-span-full">
            <Checkbox
              value="running"
              name="running"
              label="is running?"
              selected={running}
              setSelected={setRunning}
              id="running-year"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/data-setup/academic-year"
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

export default AddAcademicYear;
