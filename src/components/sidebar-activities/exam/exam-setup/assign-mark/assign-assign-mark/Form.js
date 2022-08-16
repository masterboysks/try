import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
const people = [
  { name: "sun" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
export default function Form() {
  const [selectedPeople, setSelectedPeople] = useState([]);
  return (
    <form className="form-solid w-full my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Class/semester*
          </label>
          <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>

        <div className="col-span-full xl:col-span-3">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Exam names*
          </label>
          <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
            <div className="relative mt-[6px]">
              <Listbox.Button className="  h-[38px]  p- rounded focus:ring-primary-btn focus:ring-2 border px-2   border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm relative w-full text-left  ">
                <span className="block pr-2 truncate">
                  {selectedPeople.map((person) => person.name).join(", ")}
                </span>
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
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-blue-400 text-white "
                            : "text-primary-grey-600"
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
                            <span className=" absolute inset-y-0 left-0 flex items-center pl-3">
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
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
          <div className="mt-3">
            *Note:You can select multiple items at once.
          </div>
        </div>
      </div>
    </form>
  );
}
