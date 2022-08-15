import LanguageIcon from "@mui/icons-material/Language";
import Table from "./Table";
import Breadnav from "../../../../components/Breadnav";
import Form from "./Form";

const pages = [
  { name: "Report", href: "#", current: false },
  {
    name: "Fee Report",
    href: "/report/fee-report",
    current: true,
  },
];
export default function FeeStatement() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <div className="text-primary-btn w-full">
        <div className="w-fit flex items-center ml-auto">
          <div className="">Publish invoice</div>
          <div className=" text-primary-btn ml-2">
            <LanguageIcon />
          </div>
        </div>
      </div>
      <Table></Table>
    </>
  );
}
