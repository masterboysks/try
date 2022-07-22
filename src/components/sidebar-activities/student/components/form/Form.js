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
                      }  text-primary-textC`}
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
                        }  text-primary-textC`}
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
      <form className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-md border-2 my-6 p-4 border-primary-logo form-solid">
        <div className="">
          <label className="text-sm" htmlFor="Student Id">
            Student Id
          </label>
          <br />
          <input
            className="w-full p-2 rounded focus:border-[1px] focus:border-primary-active focus:ring-primary-active    outline-primary-icon"
            type="text"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label className="text-sm" htmlFor="Student Name">
            Student Name
          </label>
          <br />
          <input
            className="w-full p-2 rounded focus:border-[1px] focus:border-primary-active focus:ring-primary-active    outline-primary-icon"
            type="text"
            placeholder="Student Name"
          />{" "}
        </div>
        <div className="">
          <label className="text-sm" htmlFor="Class / Semester">
            Class / Semester
          </label>
          <br />
          <select className="w-full p-2 rounded focus:border-[1px] focus:border-primary-active focus:ring-primary-active    outline-primary-icon">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="text-sm" htmlFor="Faculty">
            Faculty
          </label>
          <br />
          <select className="w-full p-2 rounded focus:border-[1px] focus:border-primary-active focus:ring-primary-active    outline-primary-icon">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="text-sm" htmlFor="Section">
            Section
          </label>
          <br />
          <select className="w-full p-2 rounded focus:border-[1px] focus:border-primary-active focus:ring-primary-active    outline-primary-icon">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="text-sm" htmlFor="Status">
            Status
          </label>
          <br />
          <select className="w-full p-2 rounded focus:border-[1px] focus:border-primary-active focus:ring-primary-active    outline-primary-icon">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="text-sm" htmlFor="Order By">
            Order By
          </label>
          <br />
          <select className="w-full p-2 rounded focus:border-[1px] focus:border-primary-active focus:ring-primary-active    outline-primary-icon">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="ml-auto px-4 py-3 mt-auto h-fit w-full box-border sm:w-fit text-center  bg-primary-btn sm:box-content rounded lg:col-span-2 xl:col-span-1">
          <span className="sm:hidden text-primary-bg text-sm">Search</span>
          <Search className="w-4 hidden sm:block"></Search>
        </div>
      </form>
    </>
  );
};

export default Form;