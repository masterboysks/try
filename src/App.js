import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Student from "./component/student/Student";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex width">
        <Sidebar />
        <Student />
      </div>
    </>
  );
}

export default App;
