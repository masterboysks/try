import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, Input } from "../../../../../components/fields";
import Break from "../../../break";
import Breadcurm from "../../breadcurm";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Level",
    href: "/admin/data-setup/level",
    current: false,
  },
  {
    name: "Add",
    href: "#",
    current: true,
  },
];
const AddLevel = () => {
  const [university, setUniversity] = useState("");
  const [level, setLevel] = useState("");
  const [hasFaculty, setHasFaculty] = useState(false);
  const [errorUniversity, setErrorUniversity] = useState(false);
  const [errorLevel, setErrorLevel] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ university, level, hasFaculty });
    let temp = false;
    university || ((temp = true) && setErrorUniversity(true));
    level || ((temp = true) && setErrorLevel(true));

    temp || navigate("/admin/data-setup/level");
  };
  return (
    <>
      <Breadcurm pages={pages} />
      <Break title="Add Level and Board details" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Input
              label="University/Board*"
              type="text"
              value={university}
              setValue={setUniversity}
              error={errorUniversity}
              setError={setErrorUniversity}
              placeholder="NEB"
            />
          </div>
          <div>
            <Input
              label="Level*"
              type="text"
              value={level}
              setValue={setLevel}
              error={errorLevel}
              setError={setErrorLevel}
              placeholder="+2"
            />
          </div>
          <div className="col-span-full">
            <Checkbox
              label="Has faculty"
              selected={hasFaculty}
              setSelected={setHasFaculty}
              id="hasFaculty"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/data-setup/level"
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

export default AddLevel;
