import { CheckIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Break from "./Break";

const Steps = ({ steps, title }) => {
  return (
    <>
      <nav
        aria-label="Progress"
        className="border-primary-grey-300 md:pb-0 -z-20 pb-2 my-8 overflow-x-auto overflow-y-hidden border rounded-md"
      >
        <ol role="list" className=" md:flex md:divide-y-0">
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className="md:flex-1 md:flex sm:h-14 -z-10 relative"
            >
              {step.status === "complete" ? (
                <Link to={step.href} className="group flex items-center w-full">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="bg-primary-btn flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full">
                      <CheckIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-primary-grey-600 ml-4 text-sm font-medium">
                      {step.name}
                    </span>
                  </span>
                </Link>
              ) : step.status === "current" ? (
                <Link
                  to={step.href}
                  className="flex items-center px-6 py-4 text-sm font-medium"
                  aria-current="step"
                >
                  <span className="border-primary-grey-600 flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 rounded-full">
                    <span className="text-primary-grey-600">{step.id}</span>
                  </span>
                  <span className="text-primary-grey-600 ml-4 text-sm font-medium">
                    {step.name}
                  </span>
                </Link>
              ) : (
                <Link to={step.href} className="group flex items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="group-hover:border-gray-400 flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-gray-300 rounded-full">
                      <span className="group-hover:text-gray-900 text-gray-500">
                        {step.id}
                      </span>
                    </span>
                    <span className="group-hover:text-gray-900 ml-4 text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                  </span>
                </Link>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    className="md:block absolute top-0 right-0 hidden w-5 h-full"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-full h-full text-gray-300"
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
      <Break title="General details" />
    </>
  );
};

export default Steps;
