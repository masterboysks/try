import BreadNav from "./BreadNav";
import Profile from "./Profile";
import Form from "./Form";
import Table from "./Table";

const StudentProfile = () => {
  return (
    <div className=" sm:ml-[72px] box-border md:ml-0 md:w-full  md:min-w-0 flex-1">
      <div className="absolute left-0 w-full top-28 sm:mt-9 md:block sm:static -z-10">
        <div className="w-11/12 mx-auto text-sm -z-10">
          <BreadNav />
          <Profile />
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
