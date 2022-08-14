import { Link, useNavigate } from "react-router-dom";

import {
  Input,
  InputDisabled,
  MultipleSelect,
  Textarea,
  Upload,
} from "../../../../components/fields";
import { useState } from "react";

function Form({ date }) {
  const arraySendTo = ["All", ...["jkdsf", "jfhdgf", "jhfdg"]];
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [sendTo, setSendTo] = useState([arraySendTo[0]]);
  const [document, setDocument] = useState("");

  const [errorEventTitle, setErrorEventTitle] = useState(false);
  const [errorEventDescription, setErrorEventDescription] = useState(false);
  const [errorStartTime, setErrorStartTime] = useState(false);
  const [errorEndTime, setErrorEndTime] = useState(false);
  const [errorSendTo, setErrorSendTo] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({
      eventTitle,
      eventDescription,
      startTime,
      endTime,
      sendTo,
      document,
    });
    let temp = false;
    eventTitle || ((temp = true) && setErrorEventTitle(true));
    eventDescription || ((temp = true) && setErrorEventDescription(true));
    startTime || ((temp = true) && setErrorStartTime(true));
    endTime || ((temp = true) && setErrorEndTime(true));
    sendTo.length === 0 && (temp = true) && setErrorSendTo(true);

    temp || navigate("/admin/event-calender");
  };
  return (
    <div>
      <form className="form-solid w-full my-4 space-y-4 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <InputDisabled label="Selected date" value={date} type="date" />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <Input
              label="Event title*"
              value={eventTitle}
              setValue={setEventTitle}
              error={errorEventTitle}
              setError={setErrorEventTitle}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <Textarea
              label="Event description*"
              placeholder=" Description here"
              id="event_description"
              value={eventDescription}
              setValue={setEventDescription}
              error={errorEventDescription}
              setError={setErrorEventDescription}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Input
              label="Start time*"
              type="time"
              id="start_time"
              value={startTime}
              setValue={setStartTime}
              error={errorStartTime}
              setError={setErrorStartTime}
            />
          </div>
          <div>
            <Input
              label="End time*"
              type="time"
              id="end_time"
              value={endTime}
              setValue={setEndTime}
              error={errorEndTime}
              setError={setErrorEndTime}
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
          <div>
            <Upload
              label="Document"
              id="document_form"
              value={document}
              setValue={setDocument}
            />

            <br />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/event-calender "
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

export default Form;
