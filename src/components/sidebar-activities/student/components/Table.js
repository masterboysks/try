// import { useLayoutEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

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
  {
    stdId: "Lindsa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Wa",
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

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

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
    <div className=" text-primary-textC text-inherit w-full mt-11 ">
      <div className="ml-auto w-full sm:w-fit">
        <Link
          className=" text-primary-bg inline-flex items-center 
          w-full sm:w-fit justify-center rounded-md border border-transparent
           bg-primary-btn px-4 py-2 text-sm font-medium  shadow-sm
            hover: focus:outline-none focus:ring-2 focus:ring-
            focus:ring-offset-2 "
          to="/add-student"
        >
          Add user
        </Link>
      </div>
      <div className="overflow-x-auto border-[1px] border-primary-icon rounded-md my-6">
        <table className="min-w-full  border-collapse  divide-y divide-">
          <thead className="bg-primary-bg">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-medium text-primary-textC border-primary-icon    "
              >
                Student ID
              </th>

              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-medium text-primary-textC border-primary-icon   "
              >
                Student Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-medium text-primary-textC border-primary-icon   "
              >
                Class/Semester
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-medium text-primary-textC border-primary-icon   "
              >
                Faculty
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-medium text-primary-textC border-primary-icon   "
              >
                Section
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-medium text-primary-textC border-primary-icon   "
              >
                Gender
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-medium text-primary-textC border-primary-icon   "
              >
                Mobile Number
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-medium text-primary-textC border-primary-icon   "
              >
                Status
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-medium text-primary-textC border-primary-icon  "
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {people.map((person, personIdx) => (
              <tr
                key={person.stdId}
                className={personIdx % 2 === 0 ? undefined : "bg-primary-bg"}
              >
                <td className="whitespace-nowrap px-3 py-4 text-sm text-primary-active border-primary-icon   ">
                  {person.stdId}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-primary-active border-primary-icon  ">
                  {person.stdName}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-primary-active border-primary-icon  ">
                  {person.class}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-primary-active border-primary-icon  ">
                  {person.faculty}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-primary-active border-primary-icon  ">
                  {person.sec}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-primary-active border-primary-icon  ">
                  {person.gen}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-primary-active border-primary-icon  ">
                  {person.numb}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-primary-active border-primary-icon  ">
                  {person.status}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-primary-active border-primary-icon ">
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
