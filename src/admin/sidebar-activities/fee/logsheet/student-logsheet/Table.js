import RenderTable from "./RenderTable";

const people = [
  {
    id: 557663,
    name: "pweson",
    level: "Primary level",
    class: "1",
    faculty: "",
    section: "B",
    due: 50,
  },
];

export default function Table() {
  return (
    <div className="my-6">
      <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
        <div className="inline-block w-full align-middle">
          <div className=" w-full rounded-lg">
            <table className="min-w-full divide-y divide-gray-300 table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    "
                  >
                    Std.ID
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                  >
                    Stu.Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                  >
                    Level
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                  >
                    Class/Semester
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                  >
                    Faculty
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                  >
                    Section
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                  >
                    Total Due
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <RenderTable currentItems={people} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
