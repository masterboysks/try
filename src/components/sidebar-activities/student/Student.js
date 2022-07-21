import React from "react";
import Slidebar from "./components/slidebar/Slidebar";
import Main from "./components/Main";

const Student = () => {
  return (
    <div className="box-border ml-[72px]  md:m-0 md:flex md:flex-1 overflow-auto ">
      <Slidebar />
      <Main />
    </div>
  );
};

export default Student;
