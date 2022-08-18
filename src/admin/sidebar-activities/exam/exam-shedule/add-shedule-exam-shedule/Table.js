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
  return (
    <div className="">
      {/* Table */}
      <div className="mt-6">
        <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className=" py-3.5 px-3 text-left text-sm font-semibold text-primary-grey-700"
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
                    <RenderTable key={index} person={person} />
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
