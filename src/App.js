import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddStudent from "./components/sidebar-activities/student/components/add-student/AddStudent";

// import Main from "./components/sidebar-activities/index";
import Slidebar from "./components/sidebar-activities/student/components/slidebar/Slidebar";
import Student from "./components/sidebar-activities/student/Student";
// import Toggler from "./components/sidebar-activities/student/components/add-student/Toggler";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
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
              <AddStudent />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
