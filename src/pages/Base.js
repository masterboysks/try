import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar className=" " />
      <div className=" md:flex  w-full ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
