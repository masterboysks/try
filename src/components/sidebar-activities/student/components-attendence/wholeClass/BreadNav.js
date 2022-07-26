import { ChevronRightIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Student", href: "/student/", current: false },
  {
    name: "Student Attendence",
    href: "/student/student-attendence/",
    current: false,
  },
  {
    name: "Class 11 - Science - Bio -B",
    href: "/student/student-attendence/Class-11-Science-Bio-A",
    current: true,
  },
];

const BreadNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden breadNav sm:block">
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
      <div
        className="absolute w-10 rotate-180 -top-10 right-2 text-primary-grey-700"
        onClick={() => navigate(-1)}
      >
        <ChevronRightIcon />
      </div>
    </>
  );
};

export default BreadNav;
