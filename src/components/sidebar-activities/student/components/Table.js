import { useLayoutEffect, useRef, useState } from "react";

const people = [
  {
    stdId: "Lindsay Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  // const checkbox = useRef();
  // const [checked, setChecked] = useState(false);
  // const [indeterminate, setIndeterminate] = useState(false);
  // const [selectedPeople, setSelectedPeople] = useState([]);

  // useLayoutEffect(() => {
  //   const isIndeterminate =
  //     selectedPeople.length > 0 && selectedPeople.length < people.length;
  //   setChecked(selectedPeople.length === people.length);
  //   setIndeterminate(isIndeterminate);
  //   checkbox.current.indeterminate = isIndeterminate;
  // }, [selectedPeople]);

  // function toggleAll() {
  //   setSelectedPeople(checked || indeterminate ? [] : people);
  //   setChecked(!checked && !indeterminate);
  //   setIndeterminate(false);
  // }

  return (
    <div className=" text-primary-textC text-inherit w-full ">
      <div className="ml-auto w-full sm:w-fit">
        <button
          type="button"
          className=" text-primary-bg inline-flex items-center w-full sm:w-fit justify-center rounded-md border border-transparent bg-primary-btn px-4 py-2 text-sm font-medium  shadow-sm hover: focus:outline-none focus:ring-2 focus:ring-focus:ring-offset-2 "
        >
          Add user
        </button>
      </div>
      <div className="overflow-scroll border-2 border-primary-textC rounded-md mt-8">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Student ID
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              ></th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Student Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Class/Semester
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Faculty
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Section
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Gender
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Mobile Number
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {people.map((person, personIdx) => (
              <tr
                key={person.stdId}
                className={
                  personIdx % 2 === 0 ? undefined : "bg-primary-bgActive"
                }
              >
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
                  {person.stdId}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {person.stdName}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {person.class}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {person.faculty}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {person.sec}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {person.gen}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {person.numb}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {person.status}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
