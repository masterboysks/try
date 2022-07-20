import "./App.css";
// import ReactIcon from "./ReactIcon";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Student from "./components/sidebar-activities/student/Student";

function App() {
  return (
    <>
      <Navbar />
      <div className="inline-flex">
        <Sidebar />
        <Student />
      </div>
    </>
  );
}

export default App;
