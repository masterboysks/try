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
    name: "Sub-Faculty",
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
  return (
    <>
      <Breadcurm pages={pages} />
      <Break title="Add university/Board details" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Department*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Designation*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
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
              <Link
                to="/admin/data-setup/university-board"
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

export default AddDesignation;
