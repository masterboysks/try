import RenderTable from "./RenderAttendenceTable";
const currentItems = [
  {
    stdId: "Lindsay Walton",
    stdName: "Front-end Developer",
    presentDays: "lindsay.walton@example.com",
    absentDays: "Member",
    schoolDays: "Lindsay Walton",
  },
  {
    stdId: "Lindsa",
    stdName: "Front-end Developer",
    presentDays: "lindsay.walton@example.com",
    absentDays: "Member",
    schoolDays: "Lindsay Walton",
  },
  {
    stdId: "Lindsay Wa",
    stdName: "Front-end Developer",
    presentDays: "lindsay.walton@example.com",
    absentDays: "Member",
    schoolDays: "Lindsay Walton",
  },
];

export default function AttendenceTopper() {
  return (
    <div className="mt-6">
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Student ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Student Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Total present days
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Total absent days
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Total school days
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable currentItems={currentItems} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
