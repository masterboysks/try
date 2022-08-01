import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import ClassTable from "./classTable/ClassTable";
import { useNavigate } from "react-router-dom";

import Form from "./Form";
const pages = [
  { name: "Student", href: "#", current: false },
  {
    name: "Student Attendence",
    href: "/student/student-attendence/",
    current: true,
  },
];

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="breadNav sm:block hidden">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className=" flex items-center">
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
                        className="flex-shrink-0 w-5 h-5 text-gray-400"
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
      <span className="left-3 text-primary-grey-700 -top-6 absolute font-semibold">
        {pages[pages.length - 1].name}
      </span>
      <div
        className="-top-10 right-2 text-primary-grey-700 absolute w-10 rotate-180"
        onClick={() => navigate(-1)}
      >
        <ChevronRightIcon />
      </div>
      <Form />
      <ClassTable />
    </div>
  );
};

export default Main;
