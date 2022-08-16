import Break from "../../../break";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Select } from "../../../../../components/fields";
import Breadnav from "../../../../../components/Breadnav";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Sub-Faculty",
    href: "/admin/data-setup/sub-faculty",
    current: false,
  },
  {
    name: "Add",
    href: "#",
    current: true,
  },
];
const AddSubFaculty = () => {
  const arrayFaculty = ["dhfjg", "hfdjg", "djfsh"];
  const [faculty, setFaculty] = useState("Select");
  const [subFaculty, setSubFaculty] = useState("");
  const [errorFaculty, setErrorFaculty] = useState(false);
  const [errorSubFaculty, setErrorSubFaculty] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ faculty, subFaculty });
    let temp = false;
    subFaculty || ((temp = true) && setErrorSubFaculty(true));
    faculty === "Select" && (temp = true) && setErrorFaculty(true);

    temp || navigate("/admin/data-setup/sub-faculty");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add Sub-faculty" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Select
              value={arrayFaculty}
              label="Faculty*"
              error={errorFaculty}
              setError={setErrorFaculty}
              selected={faculty}
              setSelected={setFaculty}
            />
          </div>
          <div>
            <Input
              label="Sub-faculty*"
              placeholder="Bio"
              id="subFaculty"
              setError={setErrorSubFaculty}
              error={errorSubFaculty}
              value={subFaculty}
              setValue={setSubFaculty}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/data-setup/sub-faculty"
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

export default AddSubFaculty;
