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
    name: "Fiscal year",
    href: "/admin/data-setup/fiscal-year",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/data-setup/fiscal-year/add",
    current: true,
  },
];
const AddFiscalYear = () => {
  return (
    <>
      <Breadcurm pages={pages} />
      <Break title="Add fiscal year" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Fiscal year start*
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="text"
              placeholder="2072"
            />
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Fiscal year end*
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="text"
              placeholder="2073"
            />
          </div>
          <div className="col-span-full">
            <input type="checkbox" className=" mx-1 mr-3 rounded" />
            is running?
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row sm:col-span-2 w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/data-setup/fiscal-year"
                className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
              >
                Cancel
              </Link>
              <Link
                to="/admin/data-setup/fiscal-year"
                className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
              >
                Save
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddFiscalYear;
