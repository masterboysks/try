import { ChevronRightIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";

const Breadcurm = ({ pages }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="breadNav sm:block hidden">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className=" flex items-center">
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
                        className="flex-shrink-0 w-5 h-5 text-gray-400"
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
      <div
        className="-top-10 right-2 text-primary-grey-700 absolute w-10 rotate-180"
        onClick={() => navigate(-1)}
      >
        <ChevronRightIcon />
      </div>
    </>
  );
};

export default Breadcurm;
