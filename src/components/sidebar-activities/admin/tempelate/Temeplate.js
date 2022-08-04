import React from "react";
import Breadcurm from "../breadnav";
import Break from "../break";
import photo from "./Rectangle 4369.png";
import photo1 from "./Rectangle 4370.png";
import View from "./View";
import { Link } from "react-router-dom";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Template",
    href: "/admin/template",
    current: true,
  },
];
function Temeplate() {
  return (
    <>
      <Breadcurm pages={pages}></Breadcurm>
      <Break title="Exam routine"></Break>
      Select a template :
      <form className=" md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 gap-4 my-6 rounded-md">
        <View
          templateName="exam-routine"
          templateId="exam_routine1"
          photo={photo}
        />
        <View
          templateName="exam-routine"
          templateId="exam_routine2"
          photo={photo}
        />
      </form>
      <Break title="Admin card"></Break>
      Select a template :
      <form className=" md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 gap-4 my-6 rounded-md">
        <View
          templateId="admin_card1"
          templateName="admin_card"
          photo={photo}
        />
        <View
          templateId="admin_card2"
          templateName="admin_card"
          photo={photo}
        />
      </form>
      <Break title="Marksheet"></Break>
      Select a template :
      <form className=" md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 gap-4 my-6 rounded-md">
        <View templateId="marksheet1" templateName="marksheet" photo={photo} />
        <View templateId="marksheet2" templateName="marksheet" photo={photo} />
        <View templateId="marksheet3" templateName="marksheet" photo={photo} />
      </form>
      <Break title="Class routine"></Break>
      Select a template :
      <form className=" md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 gap-4 my-6 rounded-md">
        <View
          templateName="class_routine"
          templateId="class_routine1"
          photo={photo}
        />
        <View
          templateName="class_routine"
          templateId="class_routine2"
          photo={photo}
        />
      </form>
      <Break title="Teacher ID card"></Break>
      Select a template :
      <form className=" md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 gap-4 my-6 rounded-md">
        <View
          templateName="teacher_id_card"
          templateId="teacher_id_card1"
          photo={photo}
        />
        <View
          templateName="teacher_id_card"
          templateId="teacher_id_card2"
          photo={photo}
        />
      </form>
      <Break title="Student ID card"></Break>
      Select a template :
      <form className=" md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 gap-4 my-6 rounded-md">
        <View
          templateName="student_id_card"
          templateId="student_id_card1"
          photo={photo}
        />
        <View
          templateName="student_id_card"
          templateId="student_id_card2"
          photo={photo}
        />
      </form>
      <Break title="Invoice"></Break>
      Select a template :
      <form className=" md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 gap-4 my-6 rounded-md">
        <View templateName="invoice" templateId="invoice1" photo={photo1} />
        <View templateName="invoice" templateId="invoice2" photo={photo1} />

        <View templateName="invoice" templateId="invoice3" photo={photo1} />
        <View templateName="invoice" templateId="invoice4" photo={photo1} />
        <View templateName="invoice" templateId="invoice5" photo={photo1} />
      </form>
      <Break title="Reciept"></Break>
      Select a template :
      <form className=" md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 gap-4 my-6 rounded-md">
        <View templateName="reciept" templateId="reciept1" photo={photo} />
        <View templateName="reciept" templateId="reciept2" photo={photo} />
      </form>
      <div className="w-full">
        <div className=" w-fit my-auto ml-auto">
          <Link
            to="/admin/template"
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
          >
            Cancel
          </Link>
          <Link
            to="/admin/template"
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Save
          </Link>
        </div>
      </div>
    </>
  );
}

export default Temeplate;
