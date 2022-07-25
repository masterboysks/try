import { CheckIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Break from "./Break";
import { Link } from "react-router-dom";

const pages = [
  { name: "Student", href: "#", current: false },
  { name: "Student Information", href: "/student/", current: false },
  { name: "Add Student", href: "#", current: true },
];

const AboveForm = ({ steps, title }) => {
  return (
    <>
      <div className="breadNav">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center ">
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  {pages.indexOf(page) === 0 ? (
                    <Link
                      to={page.href}
                      className={` text-${
                        page.current ? "base font-medium" : "sm font-normal"
                      }  text-primary-grey-600`}
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </Link>
                  ) : (
                    <>
                      <ChevronRightIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <Link
                        to={page.href}
                        className={`ml-2 text-${
                          page.current ? "base font-medium" : "sm font-normal"
                        }  text-primary-grey-600`}
                        aria-current={page.current ? "page" : undefined}
                      >
                        {page.name}
                      </Link>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <nav
        aria-label="Progress"
        className="my-8 overflow-x-auto overflow-y-hidden border border-primary-grey-300 rounded-md"
      >
        <ol
          role="list"
          className=" divide-y divide-primary-grey-300 md:flex md:divide-y-0 "
        >
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex-1 md:flex sm:h-14 ">
              {step.status === "complete" ? (
                <Link to={step.href} className="group flex items-center w-full">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-btn rounded-full ">
                      <CheckIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-4 text-sm font-medium text-primary-grey-600">
                      {step.name}
                    </span>
                  </span>
                </Link>
              ) : step.status === "current" ? (
                <Link
                  to={step.href}
                  className="px-6 py-4 flex items-center text-sm font-medium"
                  aria-current="step"
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-primary-grey-600 rounded-full">
                    <span className="text-primary-grey-600">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-primary-grey-600">
                    {step.name}
                  </span>
                </Link>
              ) : (
                <Link to={step.href} className="group flex items-center">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </Link>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    className="hidden md:block absolute top-0 right-0 h-full w-5"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>

      <Break title={title} />
    </>
  );
};

export default AboveForm;
