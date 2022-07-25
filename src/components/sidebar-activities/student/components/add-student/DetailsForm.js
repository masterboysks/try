import Upload from "@mui/icons-material/UploadOutlined";
const DetailsForm = () => {
  return (
    <form className="rounded-md  my-6 p-4 shadow ring-1 ring-black ring-opacity-5 form-solid">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div>
          <label className="my-6 text-sm" htmlFor="Student Id">
            First Name*
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400text-primary-grey-700 text-sm"
            type="text"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Middle Name
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400text-primary-grey-700 text-sm"
            type="text"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Last Name*
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400text-primary-grey-700 text-sm"
            type="text"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Mobile Number
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400text-primary-grey-700 text-sm"
            type="text"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Email
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400text-primary-grey-700 text-sm"
            type="text"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Class / Semester">
            Gender*
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Faculty">
            Blood Group
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>{" "}
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Date Of Birth
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400text-primary-grey-700 text-sm"
            type="date"
            placeholder="Id"
          />
        </div>{" "}
        <div className="">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium text-gray-700 "
          >
            Birth/Citizenship Certificate*
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
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
                <div className=" text-sm text-gray-600 w-full">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-white flex justify-between w-full rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <div>Upload here</div>
                    <div>
                      {" "}
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
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Photo
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="flex items-center">
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
                className="ml-5 bg-white py-2 px-3 rounded-md  text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring- focus:ring-offset-2 focus:ring-"
              />
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
            className="focus:ring- h-4 w-4 text-primary-btn focus:ring-0 focus:ring-offset-0 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            Has another child admitted
          </label>
        </div>
      </div>
      <div className="w-full">
        <div className=" ml-auto w-fit">
          <div
            to="/student/add-student-details"
            className="inline-flex items-center mr-3     justify-center rounded-md border border-transparent bg-primary-grey-200 px-4 py-3 text-sm font-medium text-primary-grey-700 shadow-sm hover: focus:outline-none focus:ring- focus:ring- focus:ring-offset-2 sm:w-auto"
          >
            Cancle
          </div>
          <div
            to="/student/add-student-details"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-btn px-4 py-3 text-sm font-medium text-white shadow-sm hover: focus:outline-none focus:ring- focus:ring- focus:ring-offset-2 sm:w-auto"
          >
            Next
          </div>
        </div>
      </div>
    </form>
  );
};

export default DetailsForm;