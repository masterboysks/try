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
import AddStaffGeneralPersonal from "./components/sidebar-activities/staff/staff-information/general/add-staff-general-personal/AddStaffGeneralPersonal";
import AddStaffGeneralAddress from "./components/sidebar-activities/staff/staff-information/general/add-staff-general-address/AddStaffGeneralAddress";
import AddStaffGeneralOffice from "./components/sidebar-activities/staff/staff-information/general/add-staff-general-office/AddStaffGeneralOffice";
import StaffAcademicDetails from "./components/sidebar-activities/staff/staff-information/academic/academic-details/AcademicDetails";
import AddStaffAcademicDetails from "./components/sidebar-activities/staff/staff-information/academic/add-acedimic-details/AddAcademicDetails";
import AddStaffDocument from "./components/sidebar-activities/staff/staff-information/documents/add-document/AddDocument";
import StaffDocument from "./components/sidebar-activities/staff/staff-information/documents/documents/Document";
import StaffBase from "./components/sidebar-activities/staff/staff-information/general/Base";

// Admin Imports
import AdminSlidebar from "./components/sidebar-activities/admin/slidebar";
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
        {/* Admin Routes reside here */}
        <Route path="/admin" element={<AdminSlidebar></AdminSlidebar>}>
          <Route path="/admin/organization-setup" element={<></>} />
          <Route path="/admin/data-setup/university-board" element={<></>} />
          <Route path="/admin/data-setup/level" element={<></>} />
          <Route path="/admin/data-setup/faculty" element={<></>} />
          <Route path="/admin/data-setup/sub-faculty" element={<></>} />
          <Route path="/admin/data-setup/section" element={<></>} />
          <Route path="/admin/data-setup/subject" element={<></>} />
          <Route path="/admin/data-setup/class-semester" element={<></>} />
          <Route path="/admin/data-setup/department" element={<></>} />
          <Route path="/admin/data-setup/designation" element={<></>} />
        </Route>
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
            path="/staff/staff-information/add-staff/general"
            element={<StaffBase />}
          >
            <Route
              path="/staff/staff-information/add-staff/general/personal-details"
              element={<AddStaffGeneralPersonal />}
            />
            <Route
              path="/staff/staff-information/add-staff/general/address-details"
              element={<AddStaffGeneralAddress />}
            />
            <Route
              path="/staff/staff-information/add-staff/general/office-details"
              element={<AddStaffGeneralOffice />}
            />
          </Route>

          <Route
            path="/staff/staff-information/add-staff/academic"
            element={<StaffAcademicDetails />}
          />
          <Route
            path="/staff/staff-information/add-staff/academic/add-academic-details"
            element={<AddStaffAcademicDetails />}
          />
          <Route
            path="/staff/staff-information/add-staff/documents"
            element={<StaffDocument />}
          />
          <Route
            path="/staff/staff-information/add-staff/documents/add-documents"
            element={<AddStaffDocument />}
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
