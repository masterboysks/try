import { useNavigate, Link } from "react-router-dom";
import Break from "./Break";

function AddressForm() {
  const navigate = useNavigate();
  return (
    <form className="form-solid my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-6">
        <div>
          <label className="py-6 text-sm" htmlFor="Student Id">
            Country*
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Province*
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            District*
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Municipality/VDC*
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Ward number*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="number"
            placeholder="11"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Tole
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Ason tole"
          />
        </div>
      </div>
      <Break title=" Temporary address" />
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-6">
        <div className="col-span-full">
          <input type="checkbox" id="same" className="mr-3 rounded" />
          <label htmlFor="same"> Same as permenant address</label>
        </div>
        <div>
          <label className="py-6 text-sm" htmlFor="Student Id">
            Country*
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Province*
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            District*
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Municipality/VDC*
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Ward number*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="number"
            placeholder="11"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Tole
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Ason tole"
          />
        </div>
      </div>
      <div className="w-full">
        <div className=" w-fit ml-auto">
          <div
            onClick={() => {
              navigate(-1);
            }}
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm cursor-pointer"
          >
            Back
          </div>
          <Link
            to={`/student/student-information/add-class-details`}
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Next
          </Link>
        </div>
      </div>
    </form>
  );
}

export default AddressForm;
