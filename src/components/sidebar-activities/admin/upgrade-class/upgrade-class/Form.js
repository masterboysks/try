import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";

const Form = () => {
  return (
    <>
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="flex">
            <label className="my-6 text-sm" htmlFor="Student Id">
              From*:
            </label>
            <div className="flex-1 ml-1">
              <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
                <option value="Test">School level</option>
              </select>
              <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
                <option value="Test">2078</option>
              </select>
            </div>
          </div>
          <div className="flex">
            <label className="my-6 text-sm" htmlFor="Student Id">
              To*:
            </label>
            <div className="flex-1 ml-1">
              <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
                <option value="Test">School level</option>
              </select>
              <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
                <option value="Test">2079</option>
              </select>
            </div>
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-4">
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Class/Semester*
            </label>

            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="number"
              placeholder="Science"
            />
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Class/Semester*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-4">
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Available sections
            </label>

            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="number"
              placeholder="Science"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label className="" htmlFor="Student Id">
                Available sections
              </label>
              <Link
                to="/admin/data-setup/section/add"
                className=" text-primary-btn lg:hidden flex mr-1"
              >
                <AiOutlineEdit className=" top-1 relative mx-2 cursor-pointer"></AiOutlineEdit>
                <span>Manage</span>
              </Link>
            </div>

            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn   border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="number"
              placeholder="Science"
            />
          </div>
          <div className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 h-fit w-fit lg:block items-center justify-center hidden px-3 py-2 mt-auto text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer">
            <Link to="/admin/data-setup/section/add">Manage section</Link>
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-4">
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Selected section*
            </label>

            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="number"
              placeholder="Science"
            />
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Selected section*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
