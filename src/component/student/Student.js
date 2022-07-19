import React from "react";

import "./student.css";
import Sidebar from "./component/SecondarySidebar";
import Main from "./component/Main";

const Student = () => {
  return (
    <div className="container-student flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Student;
