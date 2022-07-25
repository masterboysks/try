import { ChevronRightIcon } from "@heroicons/react/solid";
import { ReactComponent as Search } from "./search.svg";

const pages = [
  { name: "Student", href: "#", current: false },
  { name: "Student Information", href: "#", current: true },
];

const Form = () => {
  return (
    <>
      <div className="breadNav">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center ">
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  {pages.indexOf(page) === 0 ? (
                    <a
                      href={page.href}
                      className={` text-${
                        page.current ? "base font-medium" : "sm font-normal"
                      }  text-primary-grey-600`}
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                  ) : (
                    <>
                      <ChevronRightIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <a
                        href={page.href}
                        className={`ml-2 text-${
                          page.current ? "base font-medium" : "sm font-normal"
                        }  text-primary-grey-600`}
                        aria-current={page.current ? "page" : undefined}
                      >
                        {page.name}
                      </a>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-md  my-6 p-4 shadow ring-1 ring-black ring-opacity-5 form-solid">
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Student Id
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
            type="text"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Name">
            Student Name
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
            type="text"
            placeholder="Student Name"
          />{" "}
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Class / Semester">
            Class / Semester
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Faculty">
            Faculty
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Section">
            Section
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Status">
            Status
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Order By">
            Order By
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded  focus:ring-primary-btn     border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="mx-auto sm:mx-0 sm:ml-auto px-4 py-3 mt-auto h-fit w-1/2 box-border sm:w-fit text-center cursor-pointer bg-primary-btn sm:box-content rounded lg:col-span-2 xl:col-span-1">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 mx-auto"></Search>
        </div>
      </form>
    </>
  );
};

export default Form;
