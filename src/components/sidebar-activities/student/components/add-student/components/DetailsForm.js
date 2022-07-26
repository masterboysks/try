import Upload from "@mui/icons-material/UploadOutlined";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const DetailsForm = ({ anotherChildToggle, anotherChild }) => {
  return (
    <form className="rounded-md  my-6 form-solid">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div>
          <label className="my-6 text-sm" htmlFor="Student Id">
            First Name*
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="First name"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Middle Name
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Middle name"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Last Name*
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Mobile Number
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Mobile number"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Email
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="mail@gmail.com"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Class / Semester">
            Gender*
          </label>
          <br />
          <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Faculty">
            Blood Group
          </label>
          <br />
          <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>{" "}
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Date Of Birth
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-40 text-primary-grey-700 text-sm"
            type="date"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label htmlFor="cover-photo" className="block text-sm   ">
            Birth/Citizenship Certificate*
          </label>
          <div className=" mt-[6px] sm:col-span-2 ">
            <div className="w-full flex border-2  py-2 px-3 border-gray-300 border-dashed rounded-md ">
              <div className="space-y-1 w-full ">
                {/* <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
            > */}
                {/* <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                /> */}
                {/* </svg> */}
                <div className=" text-sm  w-full">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer  bg-white flex items-center justify-between w-full rounded-md text-sm text-primary-grey-700 -indigo-600 hover:text-focus-within:outline-none focus-within:ring- focus-within:ring-offset-0 focus-within:ring-"
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
        <div className="sm:col-span-2">
          <label htmlFor="photo" className="block text-sm  ">
            Photo
          </label>
          <div className="mt-[6px] sm:mt-0 sm:col-span-2">
            <div className="flex items-center text-primary-gray-700">
              <span className="h-12 w-12 rounded-full overflow-hidden ">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <input
                type="file"
                className="ml-5 bg-white py-2 px-3 rounded-md  text-sm leading-4 font-medium text-primary-gray- hidden hover:bg-gray-50 focus:outline-none focus:ring- focus:ring-offset-2 focus:ring-"
                name="file"
              />
              <label
                htmlFor="file"
                className="bg-primary-grey-200 border-primary-field border-[1px] rounded ml-2 p-1 text-primary-grey-700"
              >
                Choose a file to upload
              </label>
            </div>
          </div>
        </div>
      </div>
      `
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            checked={anotherChild}
            className="focus:ring- h-4 w-4 text-primary-btn focus:ring-0 focus:ring-offset-0 border-gray-300 rounded"
            onChange={() => {
              anotherChildToggle(!anotherChild);
            }}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-sm text-primary-grey-700">
            Has another child admitted
          </label>
        </div>
      </div>
      <div className="w-full">
        <div className=" ml-auto w-fit">
          <Link
            to="/student/student-information/"
            className="inline-flex items-center mr-3     justify-center rounded-md border border-transparent bg-primary-grey-50 px-4 py-3 text-sm font-medium text-primary-grey-700 shadow-sm hover: focus:outline-none focus:ring- focus:ring- focus:ring-offset-2 sm:w-auto"
          >
            Cancel
          </Link>
          <Link
            to={`/student/student-information/add-student-details/guardian-${anotherChild}`}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-btn px-4 py-3 text-sm font-medium text-white shadow-sm hover: focus:outline-none focus:ring- focus:ring- focus:ring-offset-2 sm:w-auto"
          >
            Next
          </Link>
        </div>
      </div>
    </form>
  );
};

export default DetailsForm;
