import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/solid";
import { useLayoutEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RenderTable from "./RenderTable";
const people = [
  {
    subject: "lindsay.walton@example.com",
    type: "Member",
  },
  {
    subject: "lindsay.walton@example.com",
    type: "Member",
  },
  {
    subject: "lindsay.walton@example.com",
    type: "Member",
  },
  {
    subject: "lindsay.walton@example.com",
    type: "Member",
  },
];
export default function Table() {
  const { examName } = useParams();
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
    <div className="">
      {/* Table */}
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="sm:w-16 sm:px-8 relative w-12 px-6"
                    >
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
                      Subject
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Subject type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Exam date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Exam day
                    </th>
                  </tr>
                </thead>
                <tbody className=" bg-white divide-y divide-gray-200">
                  {people.map((person, index, table) => (
                    <RenderTable
                      key={"1"}
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
      </div>
      {/* links */}
    </div>
  );
}
