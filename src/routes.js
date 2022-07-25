import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Base from "./pages/Base";
import AddStudent from "./components/sidebar-activities/student/components/add-student/AddStudent";

// import Main from "./components/sidebar-activities/index";
import Slidebar from "./components/sidebar-activities/student/components/slidebar/Slidebar";
import Student from "./components/sidebar-activities/student/Student";
import AddguardianTrue from "./components/sidebar-activities/student/components/add-student/AddGuardianTrue";
import AddguardianFalse from "./components/sidebar-activities/student/components/add-student/AddGuardianFalse";
import Home from "./pages/Home";

function App() {
  const [HasAnotherChild, setHasAnotherChild] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/student"
          element={
            <>
              <Slidebar />
              <Student />
            </>
          }
        ></Route>
        <Route
          path="/student/add-student-details"
          element={
            <>
              <Slidebar />
              <AddStudent
                HasAnotherChild={HasAnotherChild}
                setHasAnotherChild={setHasAnotherChild}
              />
            </>
          }
        />
        <Route
          path="/student/add-student-details/guardian-true"
          element={
            <>
              <Slidebar />
              <AddguardianTrue />
            </>
          }
        />
        <Route
          path="/student/add-student-details/guardian-false"
          element={
            <>
              <Slidebar />
              <AddguardianFalse />
            </>
          }
        />
        <Route path="*" element={<>Page not found</>} />
      </Route>
    </Routes>
  );
}

export default App;
