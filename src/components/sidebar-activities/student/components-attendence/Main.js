import React from "react";
import ClassTable from "./classTable/ClassTable";

import Form from "./Form";
import Breadnav from "../../../components/Breadnav";
const pages = [
  { name: "Student", href: "#", current: false },
  {
    name: "Student Attendence",
    href: "/student/student-attendence/",
    current: true,
  },
];

const Main = () => {
  return (
    <div>
      <Breadnav pages={pages} />
      <Form />
      <ClassTable />
    </div>
  );
};

export default Main;
