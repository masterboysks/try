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
    name: "Assign Subject",
    href: "/admin/data-setup/assign-subject",

    current: false,
  },

  {
    name: "Add",
    href: "#",
    current: true,
  },
];
const AddAssignSubject = () => {
  return (
    <>
      <Breadcurm pages={pages} />
      <Break title="Add subject" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Level*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>{" "}
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Class/Semester*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>{" "}
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Faculty*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>{" "}
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Sub-faculty
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>{" "}
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Section
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>
          <div className="col-span-full text-primary-grey-600 text-xs">
            *Note:You can select multiple section at once
          </div>
        </div>
        <div className="sm:grid-cols-2 lg:grid-cols-3 lg:w-2/3 mt-9 grid grid-cols-1 gap-4">
          <div className="col-span-full pt-5">
            Select for compulsary Subject*
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div className="col-span-full pt-5">Select for elective Subject*</div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
            <input
              type="checkbox"
              name="faculty"
              id="faculty"
              className="mr-2 rounded"
            />
            Has faculty
          </div>
          <div>
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
          <div className="w-fit col-span-full my-6 ml-auto">
            <div className=" w-fit flex">
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

export default AddAssignSubject;
