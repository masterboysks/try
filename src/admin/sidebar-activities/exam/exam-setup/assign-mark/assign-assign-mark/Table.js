import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
const subject = ["Physic", "Maths", "Opt maths", "Chemistry"];

export default function Example() {
  //   const itemsOnPage = 5;
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [currentItems, setCurrentItems] = useState(
  //     people.slice(0, itemsOnPage)
  //   );
  //   const [indexOfLastItem, setIndexOfLastItem] = useState(
  //     currentPage * itemsOnPage
  //   );
  //   const [indexOfFirstItem, setIndexOfFirstItem] = useState(
  //     indexOfLastItem - itemsOnPage
  //   );
  //   const [message, setmessage] = useState("Showing 1 to 2 of 2 results");

  //   const onNextPage = () => {
  //     setCurrentPage((curr) => curr + 1);
  //   };

  //   const onPreviousPage = () => {
  //     setCurrentPage((curr) => curr - 1);
  //   };
  //   useEffect(() => {
  //     setIndexOfLastItem(currentPage * itemsOnPage);
  //   }, [currentPage]);
  //   useEffect(() => {
  //     setIndexOfFirstItem(indexOfLastItem - itemsOnPage);
  //   }, [indexOfLastItem]);
  //   useEffect(() => {
  //     setmessage(
  //       `Showing ${indexOfFirstItem + 1} to ${
  //         people.length <= indexOfLastItem ? people.length : indexOfLastItem
  //       } of ${people.length}`
  //     );
  //     setCurrentItems(people.slice(indexOfFirstItem, indexOfLastItem));
  //   }, [indexOfFirstItem]);

  return (
    <div className="mt-11">
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50 divide-y">
                  <tr className="divide-x">
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  w-40   "
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      colSpan="4"
                      className="px-3    py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Full marks
                    </th>
                    <th
                      scope="col"
                      colSpan="4"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Pass marks
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                    ></th>

                    <th
                      scope="col"
                      className="px-3 border-l py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]  "
                    >
                      Theory
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                    >
                      Pratical
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                    >
                      Assest
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                    >
                      Total
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 border-l text-left text-sm font-medium text-primary-grey-700 min-w-[72px]  "
                    >
                      Theory
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                    >
                      Pratical
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                    >
                      Assest
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable subject={subject} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full my-6">
        <div className=" w-fit ml-auto">
          <Link
            to="/exam/exam-setup/assign-mark"
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
          >
            Cancel
          </Link>
          <Link
            to="/exam/exam-setup/assign-mark"
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Save
          </Link>
        </div>
      </div>
      {/* <nav
        className=" flex items-center justify-between py-3 bg-white border-t border-gray-200"
        aria-label="Pagination"
      >
        <div className="sm:block hidden">
          <p className="text-sm text-gray-700">{message}</p>
        </div>
        <div className="sm:justify-end flex justify-between flex-1">
          <button
            disabled={indexOfFirstItem === 0}
            onClick={onPreviousPage}
            className="disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
          >
            Previous
          </button>
          <button
            disabled={indexOfLastItem >= people.length}
            onClick={onNextPage}
            className="disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
          >
            Next
          </button>
        </div>
      </nav> */}
    </div>
  );
}
