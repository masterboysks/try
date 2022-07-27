import BreadNav from "./BreadNav";
import Details from "./Details";
import Form from "./Form";
import Table from "./Table";

const WholeClass = () => {
  return (
    <div className=" sm:ml-[72px] box-border md:ml-0 md:w-full  md:min-w-0 flex-1">
      <div className="top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
        <div className="-z-10 w-11/12 mx-auto text-sm">
          <BreadNav />
          <Details />
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default WholeClass;
