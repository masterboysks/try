import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddStudent from "./components/sidebar-activities/student/components/add-student/AddStudent";

import Main from "./components/sidebar-activities/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Main />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Route>
    </Routes>
  );
}

export default App;
