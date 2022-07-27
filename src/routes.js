import { Routes, Route, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Base from "./pages/Base";
import AddStudent from "./components/sidebar-activities/student//components/add-student/AddStudent";

// import Main from "./components/sidebar-activities/index";
import Home from "./pages/Home";
// student import
import StudentSlidebar from "./components/sidebar-activities/student/components/slidebar/Slidebar";
import StudentInformation from "./components/sidebar-activities/student/Student-information";
import StudentAttendence from "./components/sidebar-activities/student/Student-attendence";
import AddguardianTrue from "./components/sidebar-activities/student/components/add-student/AddGuardianTrue";
import AddguardianFalse from "./components/sidebar-activities/student/components/add-student/AddGuardianFalse";
import WholeClass from "./components/sidebar-activities/student/components-attendence/wholeClass/WholeClass";
import StudentProfile from "./components/sidebar-activities/student/components-attendence/studentProfile/StudentProfile";
// Staff immport
import StaffSlidebar from "./components/sidebar-activities/staff/slidebar.js";
import StaffInformation from "./components/sidebar-activities/staff/staff-information/main/staff-information.js";
import AddStaffGeneralPersonal from "./components/sidebar-activities/staff/staff-information/add-staff-general-personal/AddStaffGeneralPersonal";

const classes = [
  {
    semester: "Class-11",
    level: "+2",
    faculty: "Science-Bio",
    section: "A",
  },
];

function App() {
  const [HasAnotherChild, setHasAnotherChild] = useState(false);
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route path="/" element={<Home />} />
        {/* Student Routes reside here */}
        <Route
          path="/student"
          element={
            <>
              <StudentSlidebar />
            </>
          }
        >
          <Route
            path="/student/student-information"
            element={<StudentInformation />}
          />
          <Route
            path="/student/student-information/add-student-details"
            element={
              <AddStudent
                HasAnotherChild={HasAnotherChild}
                setHasAnotherChild={setHasAnotherChild}
              />
            }
          />
          <Route
            path="/student/student-information/add-student-details/guardian-true"
            element={<AddguardianTrue />}
          />
          <Route
            path="/student/student-information/add-student-details/guardian-false"
            element={<AddguardianFalse />}
          />
          <Route
            path="/student/student-attendence"
            element={<StudentAttendence />}
          ></Route>
          {classes.map((classs, index) => {
            return (
              <Route
                key={index}
                path={`/student/student-attendence/${classs.semester}-${classs.faculty}-${classs.section}`}
                element={<WholeClass />}
              />
            );
          })}
          <Route
            path="/student/student-attendence/Class-11-Science-Bio-A/ranjit"
            element={<StudentProfile />}
          />
        </Route>
        {/* Staff Routes reside here */}
        <Route path="/staff" element={<StaffSlidebar></StaffSlidebar>}>
          <Route
            path="staff-information"
            element={<StaffInformation />}
          ></Route>
          <Route
            path="/staff/staff-information/add-staff/general/personal-details"
            element={<AddStaffGeneralPersonal />}
          />
        </Route>
        <Route
          path="*"
          element={
            <div className="text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center">
              Page not found-{location.pathname.replace("/", " ")}
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
