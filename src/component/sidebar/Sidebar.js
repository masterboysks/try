import React from "react";

import "./sidebar.css";
import Button from "./Button";

import admin from "./img/admin.png";
import student from "./img/student.png";
import staff from "./img/staff.png";
import billing from "./img/billing.png";
import account from "./img/account.png";
import libary from "./img/libary.png";
import inventory from "./img/inventory.png";
import exam from "./img/exam.png";
import lms from "./img/lms.png";
import transport from "./img/transport.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="buttons">
        <Button logo={admin} title={"Admin"} />
        <div className="active-sid">
          <Button logo={student} title={"Student"} />
        </div>
        <Button logo={staff} title={"Staff"} />
        <Button logo={billing} title={"Billing"} />
        <Button logo={account} title={"Account"} />
        <Button logo={libary} title={"Libary"} />
        <Button logo={inventory} title={"Inventory"} />
        <Button logo={exam} title={"Exam"} />
        <Button logo={lms} title={"LMS"} />
        <Button logo={transport} title={"Transport"} />
      </div>
    </div>
  );
};

export default Sidebar;
