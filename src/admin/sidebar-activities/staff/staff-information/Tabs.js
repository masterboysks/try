import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ tabs }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(
    tabs.filter((curr) => {
      return curr.current ? curr : "";
    })[0]
  );
  useEffect(() => {
    navigate(selected.href);
  }, [selected]);
  return (
    <div className="my-6">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-grey-200 sm:text-sm relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="hidden"
              leaveTo="block"
            >
              <Listbox.Options className="max-h-fit ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm absolute z-10 block w-full py-1 mt-1 text-base bg-white rounded-md shadow-lg">
                {tabs.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-primary-grey-200 text-primary-700"
                          : "text-primary-600"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="text-primary-grey-700 absolute inset-y-0 left-0 flex items-center pl-3">
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="sm:block hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.href}
                className={classNames(
                  tab.current
                    ? "border-primary-grey-600 text-primary-grey-600  font-medium"
                    : "border-transparent text-primary-grey-500  hover:border-primary-grey-300",
                  "w-1/3 py-4 px-1 text-center border-b-2  text-sm"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
