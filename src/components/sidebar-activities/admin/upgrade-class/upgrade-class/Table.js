import { useLayoutEffect, useRef, useState } from "react";

const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    class: "Front-end Developer",
    section: "lindsay.walton@example.com",
    mob: "Member",
  },
  {
    id: 12,
    name: "Lindsay Walton",
    class: "Front-end Developer",
    section: "lindsay.walton@examplfdgbf.com",
    mob: "Member",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
    <div className=" ring-1 ring-black ring-opacity-5 my-9 min-w-full overflow-x-auto rounded-lg shadow">
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
                  Stu.Id
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                >
                  Stu.Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                >
                  Class/Semester
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
                  Mob Number
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white divide-y divide-gray-200">
              {people.map((person) => (
                <tr
                  key={person.email}
                  className={
                    selectedPeople.includes(person) ? "bg-gray-50" : undefined
                  }
                >
                  <td className="sm:w-16 sm:px-8 relative w-12 px-6">
                    {selectedPeople.includes(person) && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-primary-btn" />
                    )}
                    <input
                      type="checkbox"
                      className="left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md"
                      value={person.email}
                      checked={selectedPeople.includes(person)}
                      onChange={(e) =>
                        setSelectedPeople(
                          e.target.checked
                            ? [...selectedPeople, person]
                            : selectedPeople.filter((p) => p !== person)
                        )
                      }
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    {person.id}
                  </td>
                  <td
                    className={classNames(
                      "whitespace-nowrap py-4 px-3 text-sm ",
                      selectedPeople.includes(person)
                        ? "text-primary-grey-700"
                        : "text-primary-grey-600"
                    )}
                  >
                    {person.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.class}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.section}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.mob}
                  </td>
                  <td className="w-72">
                    <select className="focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-grey-700 w-64 px-2 py-1 text-sm rounded shadow-md cursor-pointer">
                      <option value="Active">Active</option>
                      <option value="Inactive">inactive</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
