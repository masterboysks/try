import Breadcurm from "../../breadcurm";
import Break from "../../../break";
import { Link } from "react-router-dom";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Subject",
    href: "/admin/data-setup/subject",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/data-setup/subject/add",
    current: true,
  },
];
const subjectType = [
  { id: "compulsary", title: "Compulsary subject" },
  { id: "optinal", title: "Elective subject" },
];
const AddSubject = () => {
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
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Subject*
            </label>

            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="text"
              placeholder="Science"
            />
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Credit hours*
            </label>

            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="number"
              placeholder="80"
            />
          </div>
          <div className="col-span-full flex my-3 space-x-4">
            {subjectType.map((notificationMethod) => (
              <div key={notificationMethod.id} className="flex items-center">
                <input
                  id={notificationMethod.id}
                  name="notification-method"
                  type="radio"
                  defaultChecked={notificationMethod.id === "email"}
                  className="focus:ring-primary-btn text-primary-btn w-4 h-4 border-gray-300"
                />
                <label
                  htmlFor={notificationMethod.id}
                  className="text-primary-grey-600 block ml-3 text-sm"
                >
                  {notificationMethod.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row col-span-full xl:col-span-3 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/data-setup/subject"
                className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
              >
                Cancel
              </Link>
              <Link
                to="/admin/data-setup/subject"
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

export default AddSubject;
