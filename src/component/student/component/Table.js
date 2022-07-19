import React from "react";

import "./table.css";

const Table = () => {
  const Student = [
    {
      id: 1234,
      name: "kushal",
      class: 12,
      faculty: "Science",
      seaction: "A",
      gender: "male",
      mobile: "1234569875",
      status: "",
    },
    {
      id: 12384,
      name: "kushal",
      class: 12,
      faculty: "Science",
      seaction: "A",
      gender: "male",
      mobile: "1234569875",
      status: "",
    },
  ];
  return (
    <div className="table-container lg-hide">
      <div className="table">
        <table>
          <thead className="heading-table">
            <tr>
              <th className="id-row flex">
                <input type="checkbox" />
                Student Id
              </th>
              <th className="name-row">Stu.name</th>
              <th className="class-row">Class/Semester</th>
              <th className="faculty-row">Faculty</th>
              <th className="seaction-row">Seaction</th>
              <th className="gender-row">Gender</th>
              <th className="mobile-row">Mobile Number</th>
              <th className="status-row">Status</th>
              <th className="action-row">Action</th>
            </tr>
          </thead>
          <tbody className="data-table">
            {Student.map((curr) => {
              return (
                <tr key={curr.id}>
                  <td className="id-row flex">
                    <input type="checkbox" />
                    {curr.id}
                  </td>
                  <td>{curr.name}</td>
                  <td>{curr.class}</td>
                  <td>{curr.faculty}</td>
                  <td>{curr.seaction}</td>
                  <td>{curr.gender}</td>
                  <td>{curr.mobile}</td>
                  <td>{curr.status}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
