import React from "react";

import "./main.css";

import Form from "./Form";
import Table from "./Table";

const Main = () => {
  return (
    <div className="main">
      <div className="text-nav flex">
        <span className="sm-hide">Student</span>{" "}
        <div className="arrow-sm"></div>
        <span className="bold">Student information</span>
      </div>
      <Form />
      <div className="utilities lg-hide">
        <span className="refresh"></span>
        <span className="add-button">Add student</span>
      </div>
      <Table />
    </div>
  );
};

export default Main;
