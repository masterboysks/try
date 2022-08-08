import Breadcurm from "../../breadnav";
import Break from "../../break";
import { Link } from "react-router-dom";
import Upload from "@mui/icons-material/UploadOutlined";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Push notification",
    href: "/admin/notice",
    current: false,
  },
  {
    name: "New notice",
    href: "/admin/notice/new",
    current: true,
  },
];
function NewNotice() {
  return (
    <div>
      <Breadcurm pages={pages}></Breadcurm>
      <Break title="New notice"></Break>
      <form className="form-solid w-full my-4 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <label className="my-6 text-sm" htmlFor="Student Id">
              Notice title*
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="text"
              placeholder="National Education Board"
            />
          </div>
        </div>
      </form>
      <form className="form-solid w-full my-4 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <label className="my-6 text-sm" htmlFor="Student Id">
              Notice description*
            </label>
            <br />
            <textarea
              name="notice"
              id="notice"
              row={20}
              placeholder=" Description here"
              className="resize-none  mt-[6px] w-full p- rounded  focus:ring-primary-btn  h-52  border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            ></textarea>
          </div>
        </div>
      </form>
      <form className="form-solid w-full my-4 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="cover-photo" className=" block text-sm">
              Document
            </label>
            <div className=" mt-[6px] sm:col-span-2 ">
              <div className=" flex w-full px-3 py-1.5 border-2 border-gray-300 border-dashed rounded-md">
                <div className=" w-full space-y-1">
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
            <br />
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Send to*
            </label>
            <br />
            <select className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
              <option value="all">All</option>
              <option value="students">Students</option>
              <option value="staffs">Staffs</option>
            </select>
          </div>
        </div>
      </form>
      <form className="form-solid w-full my-4 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Notice expiry date*
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="date"
              placeholder=""
            />
          </div>
        </div>
      </form>
      <form className="form-solid w-full my-4 mb-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/notice"
                className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
              >
                Cancel
              </Link>
              <Link
                to="/admin/notice"
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

export default NewNotice;
