import "./App.css";
// import ReactIcon from "./ReactIcon";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/sidebar-activities/index";

function App() {
  return (
    <>
      <Navbar className=" " />
      <div className=" md:inline-flex  w-full ">
        <Sidebar />

        <Main />
      </div>
    </>
  );
}

export default App;
