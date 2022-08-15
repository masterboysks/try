import { Routes, Route } from "react-router-dom";
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
import AddStaffGeneralBase from "./components/sidebar-activities/staff/staff-information/general/Base";
import AddStaffAcademicBase from "./components/sidebar-activities/staff/staff-information/academic/base.js";
import AddStaffDocumentBase from "./components/sidebar-activities/staff/staff-information/documents/base.js";

// Admin Imports
import AdminSlidebar from "./components/sidebar-activities/admin/slidebar";
import OrginazationSetup from "./components/sidebar-activities/admin/organization-setup/OrginazationSetup";
import UniversityBoard from "./components/sidebar-activities/admin/data-setup/university-board/university-board/UniversityBoard";
import AddUniversityBoard from "./components/sidebar-activities/admin/data-setup/university-board/add-university-board/AddUniversityBoard";
import Level from "./components/sidebar-activities/admin/data-setup/level/level/Level";
import AddLevel from "./components/sidebar-activities/admin/data-setup/level/add-level/AddLevel";
import Faculty from "./components/sidebar-activities/admin/data-setup/faculty/faculty/Faculty";
import AddFaculty from "./components/sidebar-activities/admin/data-setup/faculty/add-faculty/AddFaculty";
import SubFaculty from "./components/sidebar-activities/admin/data-setup/sub-faculty/sub-faculty/SubFaculty";
import AddSubFaculty from "./components/sidebar-activities/admin/data-setup/sub-faculty/add-sub-faculty/AddSubFaculty";
import Section from "./components/sidebar-activities/admin/data-setup/section/section/Section";
import AddSection from "./components/sidebar-activities/admin/data-setup/section/add-section/AddSection";
import Subject from "./components/sidebar-activities/admin/data-setup/subject/subject/Subject";
import AddSubject from "./components/sidebar-activities/admin/data-setup/subject/add-subject/AddSubject";
import ClassSemester from "./components/sidebar-activities/admin/data-setup/class-semester/class-semester/ClassSemester";
import AddClassSemester from "./components/sidebar-activities/admin/data-setup/class-semester/add-class-semester/AddClassSemester";
import AssignSubject from "./components/sidebar-activities/admin/data-setup/assign-subject/assign-subject/AssignSubject";
import AddAssiginSubject from "./components/sidebar-activities/admin/data-setup/assign-subject/add-assign-subject/AddAssiginSubject";
import Department from "./components/sidebar-activities/admin/data-setup/department/department/Department";
import AddDepartment from "./components/sidebar-activities/admin/data-setup/department/add-department/AddDepartment";
import Designation from "./components/sidebar-activities/admin/data-setup/designation/designation/Designation";
import AddDesignation from "./components/sidebar-activities/admin/data-setup/designation/add-designation/AddDesignation";
import AcademicYear from "./components/sidebar-activities/admin/data-setup/academic-year/academic-year/AcademicYear";
import AddAcademicYear from "./components/sidebar-activities/admin/data-setup/academic-year/add-academic-year/AddAcademicYear";
import FiscalYear from "./components/sidebar-activities/admin/data-setup/fiscal-year/fiscal-year/FiscalYear";
import AddFiscalYear from "./components/sidebar-activities/admin/data-setup/fiscal-year/add-fiscal-year/AddFiscalYear";
import AddClassShedule from "./components/sidebar-activities/admin/class-shedule/add-class-shedule/AddClassShedule";
import UpgradeClass from "./components/sidebar-activities/admin/upgrade-class/upgrade-class/UpgradeClass";
import ClassSchedule from "./components/sidebar-activities/admin/class-shedule/class-shedule/ClassShedule";
import Upgrade from "./components/sidebar-activities/admin/upgrade-class/upgrade/Upgrade";
import Notice from "./components/sidebar-activities/admin/notice/notice/Notice";
import NewNotice from "./components/sidebar-activities/admin/notice/new-notice/NewNotice";
import Event from "./components/sidebar-activities/admin/event/event/Event";
import AddEvent from "./components/sidebar-activities/admin/event/add-event/AddEvent";
import Temeplate from "./components/sidebar-activities/admin/tempelate/Temeplate";
import AddAddress from "./components/sidebar-activities/student/components/add-student/AddAddress";
import AddClassDetails from "./components/sidebar-activities/student/components/add-student/AddClassDetails";
import AddFeeDetails from "./components/sidebar-activities/student/components/add-student/AddFeeDetails";
import StaffAttendence from "./components/sidebar-activities/staff/staff-attendence/main/StaffAttendence";
import TeacherAssign from "./components/sidebar-activities/staff/teacher-assign/teacher-assign/TeacherAssign";
import AssignTeacher from "./components/sidebar-activities/staff/teacher-assign/assign-teacher/AssignTeacher";
import FeeSlidebar from "./components/sidebar-activities/fee/slidebar";
import FeeType from "./components/sidebar-activities/fee/fee-type/fee-type/FeeType";
import AddFeeType from "./components/sidebar-activities/fee/fee-type/add-fee-type/AddFeeType";
import FeeAssign from "./components/sidebar-activities/fee/fee-assign/fee-assign/FeeAssign";
import Assign from "./components/sidebar-activities/fee/fee-assign/assign/Assign";
import StudentLogsheet from "./components/sidebar-activities/fee/logsheet/student-logsheet/StudentLogsheet";
import Logsheet from "./components/sidebar-activities/fee/logsheet/logsheet/Logsheet";
import FeePayment from "./components/sidebar-activities/fee/fee-payment/fee-payment/FeePayment";
import MiscAssign from "./components/sidebar-activities/fee/miscellaneous-fee-assign/assign/MiscAssign";
import MiscellaneousFeeAssign from "./components/sidebar-activities/fee/miscellaneous-fee-assign/miscellaneous-fee-assign/MiscellaneousFeeAssign";
import FeeStudent from "./components/sidebar-activities/fee/fee-payment/fee-student/FeeStudent";
import ClassFeeStatement from "./components/sidebar-activities/fee/fee-statement/class-fee-statement/class-fee-statement/ClassFeeStatement";
import StudentFeeStatement from "./components/sidebar-activities/fee/fee-statement/student-fee-statement/student-fee-statement/StudentFeeStatement";
import ClassStatement from "./components/sidebar-activities/fee/fee-statement/class-fee-statement/class-statement/ClassStatement";
import StudentStatement from "./components/sidebar-activities/fee/fee-statement/student-fee-statement/student-statement/StudentStatement";
import ClassStatementMonthly from "./components/sidebar-activities/fee/fee-statement/class-fee-statement/class-statement-monthly/ClassStatementMonthly";
import ExamSlidebar from "./components/sidebar-activities/exam/ExamSlidebar";
import ExamName from "./components/sidebar-activities/exam/exam-setup/exam-name/exam-name/ExamName";
import AddExamName from "./components/sidebar-activities/exam/exam-setup/exam-name/add-exam-name/AddExamName";
import GradeSystem from "./components/sidebar-activities/exam/exam-setup/grade-system/grade-system/GradeSystem";
import AddGradeSystem from "./components/sidebar-activities/exam/exam-setup/grade-system/add-grade-system/AddGradeSystem";
import ExamMarksName from "./components/sidebar-activities/exam/exam-setup/exam-marks-name/exam-marks-name/ExamMarksName";
import AddExamMarksName from "./components/sidebar-activities/exam/exam-setup/exam-marks-name/add-exam-marks-name/AddExamMarksName";
import AssignExam from "./components/sidebar-activities/exam/exam-setup/assign-exam/assign-exam/AssignExam";
import AssignAssignExam from "./components/sidebar-activities/exam/exam-setup/assign-exam/assign-assign-exam/AssignAssignExam";
import Marksheet from "./components/sidebar-activities/exam/exam-report/marksheet/marksheet/Marksheet";
import OpenMarksheet from "./components/sidebar-activities/exam/exam-report/marksheet/open-marksheet/OpenMarksheet";
import MarkLedger from "./components/sidebar-activities/exam/exam-report/mark-ledger/mark-ledger/MarkLedger";
import ViewMarkLedger from "./components/sidebar-activities/exam/exam-report/mark-ledger/view-mark-ledger/ViewMarkLedger";
import ExamShedule from "./components/sidebar-activities/exam/exam-shedule/exam-shedule/ExamShedule";
import SheduleExamShedule from "./components/sidebar-activities/exam/exam-shedule/shedule-exam-shedule/SheduleExamShedule";
import AddSheduleExamShedule from "./components/sidebar-activities/exam/exam-shedule/add-shedule-exam-shedule/AddSheduleExamShedule";
import AdmitCard from "./components/sidebar-activities/exam/admit-card/admit-card/AdmitCard";
import AssignAdmitCard from "./components/sidebar-activities/exam/admit-card/assign-admit-card/AssignAdmitCard";
// routes of report
import StudentAttendenceReportClasses from "./components/sidebar-activities/report/attendence-report/student-attendence-report/classes/StudentAttendenceReportClasses";
import ReportSlidebar from "./components/sidebar-activities/report/slidebar";
import StudentAttendenceReportClass from "./components/sidebar-activities/report/attendence-report/student-attendence-report/class/StudentAttendenceReportClass";
import StaffAttendenceReport from "./components/sidebar-activities/report/attendence-report/staff-sttendence-report/StaffAttendenceReport";
import ExamReportClasses from "./components/sidebar-activities/report/exam-report/exam-report-classes/ExamReportClasses";
import ExamReportClass from "./components/sidebar-activities/report/exam-report/exam-report-class/ExamReportClass";
import FeeReport from "./components/sidebar-activities/report/fee-report/fee-report/FeeReport";
import MonthlyFeeStatementReport from "./components/sidebar-activities/report/fee-report/monthly-fee-statement-report/MonthlyFeeStatementReport";
import FeeStatementReport from "./components/sidebar-activities/report/fee-report/fee-statement-report/FeeStatementReport";
import TopperReportClasses from "./components/sidebar-activities/report/topper-report/topper-report-classes/TopperReportClasses";
import TopperReportClass from "./components/sidebar-activities/report/topper-report/topper-report-class/TopperReportClass";

const classes = [
  {
    semester: "Class-11",
    level: "+2",
    faculty: "Science-Bio",
    section: "A",
  },
];
function App() {
  const [hasAnotherChild, setHasAnotherChild] = useState(false);
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route path="/" element={<Home />} />
        {/* Report route */}
        <Route path="/report" element={<ReportSlidebar />}>
          <Route
            path="attendence-report/student-attendence-report"
            element={<StudentAttendenceReportClasses />}
          />
          <Route
            path="attendence-report/student-attendence-report/:classOfSchool/:section"
            element={<StudentAttendenceReportClass />}
          />
          <Route
            path="attendence-report/staff-attendence-report"
            element={<StaffAttendenceReport />}
          />
          <Route path="exam-report" element={<ExamReportClasses />} />
          <Route
            path="exam-report/:classOfSchool/:section"
            element={<ExamReportClass />}
          />
          <Route path="fee-report" element={<FeeReport />} />
          <Route
            path="fee-report/fee-statement-monthly/:classOfSchool/:section"
            element={<MonthlyFeeStatementReport />}
          />
          <Route
            path="fee-report/fee-statement/:classOfSchool/:section"
            element={<FeeStatementReport />}
          />
          <Route path="topper-report" element={<TopperReportClasses />} />
          <Route
            path="topper-report/:classOfSchool/:section"
            element={<TopperReportClass />}
          />
        </Route>
        {/* Exam Routes reside here */}
        <Route path="/exam" element={<ExamSlidebar />}>
          <Route path="exam-setup">
            <Route path="exam-name" element={<ExamName />}></Route>
            <Route path="exam-name/add" element={<AddExamName />}></Route>
            <Route path="grading-system" element={<GradeSystem />}></Route>
            <Route
              path="grading-system/add"
              element={<AddGradeSystem />}
            ></Route>
            <Route path="exam-marks-name" element={<ExamMarksName />}></Route>
            <Route
              path="exam-marks-name/add"
              element={<AddExamMarksName />}
            ></Route>
            <Route path="assign-exam" element={<AssignExam />}></Route>
            <Route
              path="assign-exam/assign/:classOfSchool/:section"
              element={<AssignAssignExam />}
            ></Route>
          </Route>
          <Route path="exam-report">
            <Route path="marksheet" element={<Marksheet />}></Route>
            <Route
              path="marksheet/open/:studentName/:studentId"
              element={<OpenMarksheet />}
            ></Route>
            <Route path="marks-ledger" element={<MarkLedger />}></Route>
            <Route
              path="marks-ledger/view/:classOfSchool/:section"
              element={<ViewMarkLedger />}
            ></Route>
          </Route>
          <Route path="exam-shedule" element={<ExamShedule />}></Route>
          <Route
            path="exam-shedule/shedule/:examName"
            element={<SheduleExamShedule />}
          ></Route>
          <Route
            path="exam-shedule/shedule/:examName/add"
            element={<AddSheduleExamShedule />}
          ></Route>
          <Route path="admit-card" element={<AdmitCard />}></Route>
          <Route
            path="admit-card/assign/:classOfschool/:section"
            element={<AssignAdmitCard />}
          ></Route>
        </Route>
        {/* Admin Routes reside here */}
        <Route path="/admin" element={<AdminSlidebar></AdminSlidebar>}>
          <Route path="template" element={<Temeplate />}></Route>
          <Route path="event-calender" element={<Event />}></Route>
          <Route path="event-calender/add/:date" element={<AddEvent />}></Route>

          <Route path="notice" element={<Notice />}></Route>
          <Route path="notice/new" element={<NewNotice />}></Route>
          <Route path="upgrade" element={<Upgrade />}></Route>
          <Route
            path="upgrade/class/:classname"
            element={<UpgradeClass />}
          ></Route>
          <Route path="class-schedule" element={<ClassSchedule />}></Route>
          <Route
            path="class-schedule/add"
            element={<AddClassShedule />}
          ></Route>
          <Route
            path="/admin/organization-setup"
            element={<OrginazationSetup />}
          />
          <Route
            path="/admin/data-setup/university-board"
            element={<UniversityBoard></UniversityBoard>}
          />
          <Route
            path="/admin/data-setup/university-board/add"
            element={<AddUniversityBoard></AddUniversityBoard>}
          />
          <Route path="/admin/data-setup/level" element={<Level></Level>} />
          <Route
            path="/admin/data-setup/level/add"
            element={<AddLevel></AddLevel>}
          />
          <Route
            path="/admin/data-setup/faculty"
            element={<Faculty></Faculty>}
          />
          <Route
            path="/admin/data-setup/faculty/add"
            element={<AddFaculty />}
          />
          <Route
            path="/admin/data-setup/sub-faculty"
            element={<SubFaculty />}
          />
          <Route
            path="/admin/data-setup/sub-faculty/add"
            element={<AddSubFaculty />}
          />
          <Route path="/admin/data-setup/section" element={<Section />} />
          <Route
            path="/admin/data-setup/section/add"
            element={<AddSection />}
          />
          <Route path="/admin/data-setup/subject" element={<Subject />} />
          <Route
            path="/admin/data-setup/subject/add"
            element={<AddSubject />}
          />
          <Route
            path="/admin/data-setup/class-semester"
            element={<ClassSemester />}
          />
          <Route
            path="/admin/data-setup/class-semester/add"
            element={<AddClassSemester />}
          ></Route>
          <Route
            path="/admin/data-setup/assign-subject"
            element={<AssignSubject />}
          />

          <Route
            path="/admin/data-setup/assign-subject/add"
            element={<AddAssiginSubject />}
          ></Route>

          <Route path="/admin/data-setup/department" element={<Department />} />
          <Route
            path="/admin/data-setup/department/add"
            element={<AddDepartment />}
          />
          <Route
            path="/admin/data-setup/designation"
            element={<Designation />}
          />
          <Route
            path="/admin/data-setup/designation/add"
            element={<AddDesignation />}
          />
          <Route
            path="/admin/data-setup/academic-year"
            element={<AcademicYear />}
          />
          <Route
            path="/admin/data-setup/academic-year/add"
            element={<AddAcademicYear />}
          />
          <Route
            path="/admin/data-setup/fiscal-year"
            element={<FiscalYear />}
          />
          <Route
            path="/admin/data-setup/fiscal-year/add"
            element={<AddFiscalYear />}
          />
        </Route>
        {/* Staff Routes reside here */}
        <Route path="/staff" element={<StaffSlidebar></StaffSlidebar>}>
          <Route
            path="teacher-assign/assign-teacher"
            element={<AssignTeacher />}
          ></Route>
          <Route path="teacher-assign" element={<TeacherAssign />}></Route>
          <Route path="staff-attendence" element={<StaffAttendence />}></Route>
          <Route
            path="staff-information"
            element={<StaffInformation />}
          ></Route>
          <Route
            path="/staff/staff-information/add-staff/general"
            element={<AddStaffGeneralBase />}
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
          <Route element={<AddStaffAcademicBase />}>
            <Route
              path="/staff/staff-information/add-staff/academic"
              element={<StaffAcademicDetails />}
            />
            <Route
              path="/staff/staff-information/add-staff/academic/add-academic-details"
              element={<AddStaffAcademicDetails />}
            />
          </Route>
          <Route element={<AddStaffDocumentBase />}>
            <Route
              path="/staff/staff-information/add-staff/documents"
              element={<StaffDocument />}
            />
            <Route
              path="/staff/staff-information/add-staff/documents/add-documents"
              element={<AddStaffDocument />}
            />
          </Route>
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
                HasAnotherChild={hasAnotherChild}
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
            path="/student/student-information/add-address-details"
            element={<AddAddress />}
          />
          <Route
            path="/student/student-information/add-class-details"
            element={<AddClassDetails />}
          />
          <Route
            path="/student/student-information/add-fee-details"
            element={<AddFeeDetails />}
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
        {/* Fee Routes reside here */}
        <Route path="/fee" element={<FeeSlidebar />}>
          <Route
            path="miscellaneous-fee-assign"
            element={<MiscellaneousFeeAssign />}
          ></Route>
          <Route
            path="miscellaneous-fee-assign/assign"
            element={<MiscAssign />}
          ></Route>

          <Route
            path="fee-statement/student-fee-statement/:student"
            element={<StudentStatement />}
          ></Route>
          <Route
            path="fee-statement/student-fee-statement"
            element={<StudentFeeStatement />}
          ></Route>
          <Route
            path="fee-statement/class-fee-statement/:classOfSchool/monthly"
            element={<ClassStatementMonthly />}
          ></Route>
          <Route
            path="fee-statement/class-fee-statement/:classOfSchool"
            element={<ClassStatement />}
          ></Route>
          <Route
            path="fee-statement/class-fee-statement"
            element={<ClassFeeStatement />}
          ></Route>
          <Route path="fee-payment" element={<FeePayment />}></Route>
          <Route path="fee-payment/:student" element={<FeeStudent />}></Route>
          <Route path="fee-type" element={<FeeType />}></Route>
          <Route path="fee-type/add" element={<AddFeeType />}></Route>
          <Route path="fee-assign" element={<FeeAssign />}></Route>
          <Route path="fee-assign/assign" element={<Assign />}></Route>
          <Route path="student-logsheet" element={<StudentLogsheet />}></Route>
          <Route
            path="student-logsheet/:student"
            element={<Logsheet />}
          ></Route>
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
