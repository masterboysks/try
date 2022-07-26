import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Select } from "../../../../../components/fields";
import Breadnav from "../../../../../components/Breadnav";
import Break from "../../../../../components/Break";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Faculty",
    href: "/admin/data-setup/faculty",
    current: false,
  },
  {
    name: "Add",
    href: "#",
    current: true,
  },
];
const AddFaculty = () => {
  const arrayLevel = ["Seljhdfg", "kjdhsfuj", "khdsafjkh", "fdjkhfc"];
  const [level, setLevel] = useState("Select");
  const [faculty, setFaculty] = useState("");

  const navigate = useNavigate();
  const [errorFaculty, setErrorFaculty] = useState(false);
  const [errorLevel, setErrorLevel] = useState(false);

  const handleSubmit = () => {
    console.log({ level, faculty });
    let temp = false;
    faculty || ((temp = true) && setErrorFaculty(true));

    level === "Select" && (temp = true) && setErrorLevel(true);
    console.log();
    temp || navigate("/admin/data-setup/faculty");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add faculty" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Select
              label="Level*"
              value={arrayLevel}
              selected={level}
              setSelected={setLevel}
              error={errorLevel}
              setError={setErrorLevel}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Science"
              label="Faculty*"
              error={errorFaculty}
              setError={setErrorFaculty}
              value={faculty}
              setValue={setFaculty}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/data-setup/faculty"
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

export default AddFaculty;
