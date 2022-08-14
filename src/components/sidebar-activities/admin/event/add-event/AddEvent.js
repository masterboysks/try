import { useParams } from "react-router-dom";
import Breadcurm from "../../breadnav";
import Break from "../../break";
import Form from "./Form";

function AddEvent() {
  const { date } = useParams();
  const pages = [
    { name: "Admin", href: "#", current: false },
    {
      name: "Event",
      href: "/admin/event-calender",
      current: false,
    },
    {
      name: "Add",
      href: "#",
      current: false,
    },
    {
      name: date,
      href: `/admin/event/add/${date}`,
      current: true,
    },
  ];

  return (
    <div>
      <Breadcurm pages={pages}></Breadcurm>
      <Break title="Add event"></Break>
      <Form date={date} />
    </div>
  );
}

export default AddEvent;
