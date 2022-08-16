import Profile from "./Profile";
import Form from "./Form";
import Table from "./Table";
import Breadnav from "../../../../components/Breadnav";
import { useParams } from "react-router-dom";

const StudentProfile = () => {
  const { classOfSchool, section, studentName } = useParams();
  const pages = [
    { name: "Student", href: "#", current: false },
    {
      name: "Student Attendence",
      href: "/student/student-attendence/",
      current: false,
    },
    {
      name: `${classOfSchool}-${section}`,
      href: `/student/student-attendence/${classOfSchool}/${section}`,
      current: false,
    },
    {
      name: `${studentName}`,
      href: `/student/student-attendence/${classOfSchool}/${section}/${studentName}`,
      current: true,
    },
  ];
  return (
    <div className=" sm:ml-[72px] box-border md:ml-0 md:w-full  md:min-w-0 flex-1">
      <div className="absolute left-0 w-full top-28 sm:mt-9 md:block sm:static -z-10">
        <div className="w-11/12 mx-auto text-sm -z-10">
          <div className="pt-9">
            <Breadnav pages={pages} />
          </div>
          <Profile />
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
