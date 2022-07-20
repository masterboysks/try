import { ChevronRightIcon } from "@heroicons/react/solid";

const pages = [
  { name: "Student", href: "#", current: false },
  { name: "Student Information", href: "#", current: true },
];

const Form = () => {
  return (
    <div className="top-24 left-6 absolute sm:static -z-10 text-sm">
      <div className="breadNav">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  {pages.indexOf(page) === 0 ? (
                    ""
                  ) : (
                    <ChevronRightIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                  <a
                    href={page.href}
                    className={`ml-2 text-${
                      page.current ? "base font-medium" : "sm font-normal"
                    }  text-primary-textC`}
                    aria-current={page.current ? "page" : undefined}
                  >
                    {page.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <form className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4">
        <div className="form-element">
          <label htmlFor="Student Id">Student Id</label>
          <br />
          <input className="input-field" type="text" placeholder="Id" />
        </div>
        <div className="form-element">
          <label htmlFor="Student Name">Student Name</label>
          <br />
          <input
            className="input-field"
            type="text"
            placeholder="Student Name"
          />{" "}
        </div>
        <div className="form-element">
          <label htmlFor="Class / Semester">Class / Semester</label>
          <br />
          <select className="input-field">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="Faculty">Faculty</label>
          <br />
          <select className="input-field">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="Section">Section</label>
          <br />
          <select className="input-field">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="Status">Status</label>
          <br />
          <select className="input-field">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="Order By">Order By</label>
          <br />
          <select className="input-field">
            <option value="Test">Select</option>
          </select>
        </div>
        <input type="submit" value="Search" className="button-search" />
      </form>
    </div>
  );
};

export default Form;
