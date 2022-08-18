import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full md:flex ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
