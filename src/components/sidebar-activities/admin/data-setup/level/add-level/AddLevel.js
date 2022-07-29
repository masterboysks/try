import { Link } from "react-router-dom";
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
    href: "add",
    current: true,
  },
];
const AddLevel = () => {
  return (
    <>
      <Breadcurm pages={pages} />
      <Break title="Add Level and Board details" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              University/Board*
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="number"
              placeholder="National Education Board"
            />
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Level*
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="number"
              placeholder="+2"
            />
          </div>
          <div className="col-span-full">
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
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
              <Link
                to="/admin/data-setup/level"
                className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddLevel;
