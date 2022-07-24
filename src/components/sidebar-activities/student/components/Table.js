import React, { useEffect, useState } from "react";
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
  {
    stdId: "Lindsay Walton1",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsa1",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Wa1",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Walton2",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsa2",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Wa2",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Walton3",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsa3",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Wa3",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Walton4",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsa4",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay W4a",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Walto5n",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind5sa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay 5Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Wa6lton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Linds87a",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay 87Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay 76Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind23sa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay11 Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind1say Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lin2dsa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Linds12ay Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsa211`3y Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind54sa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsa453y Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind64say Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Linds43a",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind43say Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind34say Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind34sa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay1 Wa",

    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay 34Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsahgs",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsaysfg Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsaysawe Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsafdsa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Linddfsay Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindfadsersay Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindatregasa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindafretsay Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindartfgreafvsay Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind sa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Linafgfadsay Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsagreay Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindatrsa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lintgrdfedsay Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lingaertdsay Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Linreagbfgdsa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindgvzregvrfc csay Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind4365say Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Linds464556a",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lin2645345dsay Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Linds26453ay Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lin46345bngfdsa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lin543543dsay Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lin453453fgfdsdsay Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind45543 ggsa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindffd5343643dsay Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lind543443fghdfsay Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Linstrewrtredsa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindswertrewway Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Linrterwt45redsay Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lintre6tretrdsa",
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

export default function Example() {
  const itemOnPage = 5;
  const [page, setpage] = useState(1);
  const [currentItems, setCurrentItems] = useState(people.slice(itemOnPage));
  const table = () => {
    {
      currentItems.map((person, index) => (
        <tr key={person.stdId}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500    ">
            {person.stdId}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.stdName}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.class}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.faculty}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.sec}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.gen}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.numb}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.status}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  ">
            Edit
          </td>
        </tr>
      ));
    }
  };

  return (
    <div className="mt-11">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-primary-grey-700">
            Student Details
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-btn px-4 py-3 text-sm font-medium text-white shadow-sm hover: focus:outline-none focus:ring- focus:ring- focus:ring-offset-2 sm:w-auto"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="my-6">
        <div className=" overflow-x-auto min-w-full rounded-lg shadow ring-1 ring-black ring-opacity-5 ">
          <div className="inline-block align-middle  w-full">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y table-auto divide-gray-300">
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
                      {" "}
                      Student Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Class/Semester
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Faculty
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Section
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Mobile Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">50</span> of{" "}
            <span className="font-medium">52</span> results
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </a>
        </div>
      </nav>
    </div>
  );
}

//
//

//

// import { useLayoutEffect, useRef, useState } from "react";

// import { Link } from "react-router-dom";

// const people = [
//   {
//     stdId: "Lindsay Walton",
//     stdName: "Front-end Developer",
//     class: "lindsay.walton@example.com",
//     faculty: "Member",
//     sec: "Lindsay Walton",
//     gen: "Front-end Developer",
//     numb: "lindsay.walton@example.com",
//     status: "Member",
//   },
//   {
//     stdId: "Lindsa",
//     stdName: "Front-end Developer",
//     class: "lindsay.walton@example.com",
//     faculty: "Member",
//     sec: "Lindsay Walton",
//     gen: "Front-end Developer",
//     numb: "lindsay.walton@example.com",
//     status: "Member",
//   },
//   {
//     stdId: "Lindsay Wa",
//     stdName: "Front-end Developer",
//     class: "lindsay.walton@example.com",
//     faculty: "Member",
//     sec: "Lindsay Walton",
//     gen: "Front-end Developer",
//     numb: "lindsay.walton@example.com",
//     status: "Member",
//   },
//   // More people...
// ];

// // function classNames(...classes) {
// //   return classes.filter(Boolean).join(" ");
// // }

// export default function Example() {
//   // const checkbox = useRef();
//   // const [checked, setChecked] = useState(false);
//   // const [indeterminate, setIndeterminate] = useState(false);
//   // const [selectedPeople, setSelectedPeople] = useState([]);

//   // useLayoutEffect(() => {
//   //   const isIndeterminate =
//   //     selectedPeople.length > 0 && selectedPeople.length < people.length;
//   //   setChecked(selectedPeople.length === people.length);
//   //   setIndeterminate(isIndeterminate);
//   //   checkbox.current.indeterminate = isIndeterminate;
//   // }, [selectedPeople]);

//   // function toggleAll() {
//   //   setSelectedPeople(checked || indeterminate ? [] : people);
//   //   setChecked(!checked && !indeterminate);
//   //   setIndeterminate(false);
//   // }

//   return (
//     <div className=" text-primary-grey-600 text-inherit w-full mt-11 ">
//       {/* <div className="space w-full ">
//         Student Details
//         <Link
//           className=" text-primary-grey-100 inline-flex items-center
//           w-full sm:w-fit justify-center rounded-md border border-transparent
//            bg-primary-btn px-4 py-2 text-sm font-medium  shadow-sm
//             hover: focus:outline-none focus:ring-2 focus:ring-
//             focus:ring-offset-2 "
//           to="/add-student"
//         >
//           Add user
//         </Link>
//       </div> */}
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto text-center sm:text-left ">
//           <h1 className="text-xl font-semibold text-primary-grey-600">
//             Student Details
//           </h1>
//         </div>
//         <div className="mt-4 sm:my-auto ">
//           <button
//             type="button"
//             className="inline-flex items-center w-full  justify-center rounded-md border border-transparent bg-primary-btn px-4 py-2 text-sm font-medium text-white shadow-sm hover: focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 sm:w-auto"
//           >
//             Add user
//           </button>
//         </div>
//       </div>
//       <div className="overflow-x-auto border-[1px] border-primary-grey-300 rounded-md my-6">
//         <table className="min-w-full  divide-y divide-primary-grey-300   ">
//           <thead className="bg-primary-grey-100">
//             <tr>
//               <th
//                 scope="col"
//                 className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-600    "
//               >
//                 Student ID
//               </th>

//               <th
//                 scope="col"
//                 className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-600   "
//               >
//                 Student Name
//               </th>
//               <th
//                 scope="col"
//                 className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-600   "
//               >
//                 Class/Semester
//               </th>
//               <th
//                 scope="col"
//                 className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-600   "
//               >
//                 Faculty
//               </th>
//               <th
//                 scope="col"
//                 className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-600   "
//               >
//                 Section
//               </th>
//               <th
//                 scope="col"
//                 className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-600   "
//               >
//                 Gender
//               </th>
//               <th
//                 scope="col"
//                 className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-600   "
//               >
//                 Mobile Number
//               </th>
//               <th
//                 scope="col"
//                 className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-600   "
//               >
//                 Status
//               </th>
//               <th
//                 scope="col"
//                 className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-600  "
//               >
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-primary-grey-300">
//             {people.map((person, personIdx) => (
//
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
