import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
import Search from "@mui/icons-material/SearchOutlined";
import { SearchBar, Select } from "../../../../components/fields";
import { useState } from "react";
import SearchIcon from "../../../../components/SearchIcon";
const people = [
  {
    examName: "First term  examination",
  },
  {
    examName: "Bsc.CSIT Preboard examination",
  },
];
export default function Table() {
  const arrayLevel = ["jkhdsa", "sdahg", "fdh"];
  const [level, setLevel] = useState("Select");
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <>
      <div className="md:flex-row flex flex-col justify-between my-6">
        <div className="sm:grid-cols-2 grid grid-cols-1 gap-4">
          <div>
            <Select
              value={arrayLevel}
              selected={level}
              setSelected={setLevel}
              label="Level*"
            />
          </div>
          <div className="h-fit mt-auto -mb-1">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="mt-11 lg:w-2/3 w-full">
        <div className="sm:flex sm:items-center justify-between">
          <div className="w-72 relative max-w-full">
            <SearchBar value={searchFilter} setValue={setSearchFilter} />
          </div>
        </div>
        <div className="my-6">
          <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
            <div className="inline-block w-full align-middle">
              <div className=" w-full rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 table-fixed">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                      >
                        Exam name
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  "
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
      </div>
    </>
  );
}
