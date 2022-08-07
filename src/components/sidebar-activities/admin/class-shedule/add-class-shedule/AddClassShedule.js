import { Link } from "react-router-dom";
import Break from "../../break";
import Breadcurm from "../../breadnav";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Class schedule",
    href: "/admin/class-schedule/",
    current: false,
  },
  {
    name: "Class 1 'A'",
    href: "/admin/class-schedule/add/class-1-a",
    current: true,
  },
];
function AddClassShedule() {
  return (
    <div>
      <Breadcurm pages={pages} />
      <div className="lg:flex my-12">
        <div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow">
          <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Class:</span>
              <span className="text-primary-grey-700">1</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Section:</span>
              <span className="text-primary-grey-700">B</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Level:</span>
              <span className="text-primary-grey-700">School level</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">No of students:</span>
              <span className="text-primary-grey-700">1</span>
            </div>
            <div className=" flex justify-between py-2">
              <span className="text-primary-grey-600">Faculty:</span>
              <span className="text-primary-grey-700"></span>
            </div>
          </div>
        </div>
      </div>
      <Break title="Class schedule" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-full">
            <label className="my-6 text-sm" htmlFor="Student Id">
              Days*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Subject*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Start time*
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="time"
              placeholder="11:45"
            />
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              End time*
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="time"
              placeholder="11:50"
            />
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Subject teacher*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>
          <div className="col-span-full flex">
            Add subject
            <Link to="/admin/data-setup/subject/add">
              <div className="outline outline-1 outline-primary-grey-700 mx-2 rounded cursor-pointer">
                <AddOutlinedIcon text="sm" className="text-primary-grey-700" />
              </div>
            </Link>
          </div>

          <div className="col-span-full ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/class-schedule"
                className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
              >
                Cancel
              </Link>
              <Link
                to="/admin/class-schedule"
                className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
              >
                Save
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddClassShedule;
