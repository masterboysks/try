import Upload from "@mui/icons-material/UploadOutlined";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className="form-solid md:w-10/12 lg:w-8/12 w-full my-6 rounded-md">
      <div className="sm:grid-cols-2 grid grid-cols-1 gap-4">
        <div className="">
          <label className="my-6 text-sm" htmlFor="Staff Id">
            Staff Id
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn mt-[6px]    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
            type="text"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label htmlFor="cover-photo" className=" block text-sm">
            Birth/Citizenship Certificate*
          </label>
          <div className=" mt-[6px] sm:col-span-2 ">
            <div className=" flex w-full px-3 py-2 border-2 border-gray-300 border-dashed rounded-md">
              <div className=" w-full space-y-1">
                <div className=" w-full text-sm">
                  <label
                    htmlFor="file-upload"
                    className="text-primary-grey-700 -indigo-600 hover:text-focus-within:outline-none focus-within:ring- focus-within:ring-offset-0 flex items-center justify-between w-full text-sm bg-white rounded-md cursor-pointer"
                  >
                    <div>Upload here</div>
                    <div className="text-primary-btn">
                      <Upload />
                    </div>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-full">
          <div className=" w-fit ml-auto">
            <Link
              to="/staff/staff-information/add-staff/documents"
              className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
            >
              Cancel
            </Link>
            <Link
              to="/staff/staff-information/add-staff/documents"
              className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
