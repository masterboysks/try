import { useLayoutEffect, useRef, useState } from "react";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@examplfdgbf.com",
    role: "Member",
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
    <div className=" text-primary-textC text-inherit min-w-0">
      <div className="ml-auto w-fit">
        <button
          type="button"
          className="inline-flex items-center  justify-center rounded-md border border-transparent bg-primary-btn px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add user
        </button>
      </div>
      <div className="my-8 flex flex-col rounded w-full ">
        <div className="overflow-x-auto  ">
          <table className=" table-fixed divide-y divide-gray-300 w-max">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                  <input
                    type="checkbox"
                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                    ref={checkbox}
                    checked={checked}
                    onChange={toggleAll}
                  />
                </th>
                <th
                  scope="col"
                  className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-primary-active"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                >
                  Role
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white ">
              {people.map((person) => (
                <tr
                  key={person.email}
                  className={
                    selectedPeople.includes(person) ? "bg-gray-50" : undefined
                  }
                >
                  <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                    {selectedPeople.includes(person) && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                    )}
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
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
                  <td
                    className={classNames(
                      "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                      selectedPeople.includes(person)
                        ? "text-indigo-600"
                        : "text-primary-active"
                    )}
                  >
                    {person.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.title}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.role}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
