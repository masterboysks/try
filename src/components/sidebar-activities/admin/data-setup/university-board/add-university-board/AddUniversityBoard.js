import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadnav from "../../../../../components/Breadnav";
import Break from "../../../../../components/Break";
import { Input } from "../../../../../components/fields";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "University/Board",
    href: "/admin/data-setup/university-board",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/data-setup/university-board/add",
    current: true,
  },
];
const AddUniversityBoard = () => {
  const [university, setUniversity] = useState("");
  const [errorUniversity, setErrorUniversity] = useState(false);
  const [shorthand, setShorthand] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ university, shorthand });

    university
      ? navigate("/admin/data-setup/university-board")
      : setErrorUniversity(true);
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add university/Board details" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Input
              label="University/Board*"
              placeholder="National Education Board"
              value={university}
              setValue={setUniversity}
              error={errorUniversity}
              setError={setErrorUniversity}
            />
          </div>
          <div>
            <Input
              label="ShortHand"
              placeholder="NEB"
              value={shorthand}
              setValue={setShorthand}
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

export default AddUniversityBoard;
