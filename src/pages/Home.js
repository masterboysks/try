import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/sidebar-activities/index";

const Home = () => {
  return (
    <>
      <Navbar className=" " />
      <div className=" md:flex  w-full ">
        <Sidebar />

        <Main />
      </div>
    </>
  );
};

export default Home;
