import Breadcurm from "../../breadnav";
import Break from "../../break";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Input,
  MultipleSelect,
  Textarea,
  Upload,
} from "../../../../components/fields";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Push notification",
    href: "/admin/notice",
    current: false,
  },
  {
    name: "New notice",
    href: "/admin/notice/new",
    current: true,
  },
];
function NewNotice() {
  const arraySendTo = ["All", "Student", "Teachers"];
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeDescription, setNoticeDescription] = useState("");
  const [document, setDocument] = useState("");
  const [sendTo, setSendTo] = useState([arraySendTo[0]]);
  const [noticeExpireDate, setNoticeExpireDate] = useState("");

  const [errorNoticeTitle, setErrorNoticeTitle] = useState(false);
  const [errorNoticeDescription, setErrorNoticeDescription] = useState(false);
  const [errorSendTo, setErrorSendTo] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({
      noticeTitle,
      noticeDescription,
      noticeExpireDate,
      sendTo,
      document,
    });
    let temp = false;
    noticeTitle || ((temp = true) && setErrorNoticeTitle(true));
    noticeDescription || ((temp = true) && setErrorNoticeDescription(true));
    sendTo.length === 0 && (temp = true) && setErrorSendTo(true);

    temp || navigate("/admin/notice");
  };
  return (
    <div>
      <Breadcurm pages={pages}></Breadcurm>
      <Break title="New notice"></Break>
      <form className="form-solid w-full my-4 space-y-4 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <Input
              label="Notice title*"
              value={noticeTitle}
              setValue={setNoticeTitle}
              error={errorNoticeTitle}
              setError={setErrorNoticeTitle}
              placeholder="National Education Board"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <Textarea
              label="Notice description*"
              placeholder=" Description here"
              id="notice_description"
              value={noticeDescription}
              setValue={setNoticeDescription}
              error={errorNoticeDescription}
              setError={setErrorNoticeDescription}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Upload
              label="Document"
              id="document_form"
              value={document}
              setValue={setDocument}
            />
          </div>
          <div>
            <Input
              label="Notice expire date"
              type="date"
              value={noticeExpireDate}
              setValue={setNoticeExpireDate}
              id="expire_date"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <MultipleSelect
              value={arraySendTo}
              label="Send to*"
              selected={sendTo}
              setSelected={setSendTo}
              error={errorSendTo}
              setError={setErrorSendTo}
            />
            Note:You can select to multiple items
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/notice"
                className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
              >
                Cancel
              </Link>
              <div
                onClick={handleSubmit}
                className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewNotice;
