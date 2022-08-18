import { useLayoutEffect, useRef, useState } from "react";
import RenderTable from "./RenderTable";

const people = [
  {
    level: "School level",
    faculty: "",
    noOfStd: 40,
    invoiceStatus: "Unplublished",

    class: "Front-end Developer",
    section: "lindsay.walton@example.com",
  },
  {
    level: "School level",
    faculty: "",
    noOfStd: 40,
    invoiceStatus: "Unplublished",

    class: "Front-end Developer",
    section: "lindsay.walton@examplfdgbf.com",
  },
];

export default function Example() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className=" ring-1 ring-black ring-opacity-5 mb-9 min-w-full mt-4 overflow-x-auto rounded-lg shadow">
      <div className="w-fit ml-auto"></div>
      <div className=" flex flex-col w-full rounded">
        <div className=" overflow-x-auto">
          <table className=" min-w-full divide-y divide-gray-300 table-fixed">
            <thead className="bg-gray-50">
              <tr className="text-primary-grey-700">
                <th scope="col" className="sm:w-16 sm:px-8 relative w-12 px-6">
                  <input
                    type="checkbox"
                    className="left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md"
                    ref={checkbox}
                    checked={checked}
                    onChange={toggleAll}
                  />
                </th>
                <th
                  scope="col"
                  className=" py-3.5 pr-3 text-left text-sm font-semibold text-primary-active"
                >
                  Class/Semester
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                >
                  Level
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                >
                  Faculty
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                >
                  Section
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                >
                  Number of std
                </th>
                <th
                  scope="col"
                  className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-left "
                >
                  Invoice status
                </th>
                <th
                  scope="col"
                  className="relative w-10 py-3.5 pl-3 pr-4 sm:pr-6 text-left"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white divide-y divide-gray-200">
              {people.map((person, index, table) => (
                <RenderTable
                  key={`${person.class}-${person.section}`}
                  person={person}
                  selectedPeople={selectedPeople}
                  setSelectedPeople={setSelectedPeople}
                  table={table}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
