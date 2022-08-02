import Breadcurm from "../../breadnav";
import Calendar from "./Calendar";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Event",
    href: "/admin/event",
    current: true,
  },
];
function Event() {
  return (
    <div>
      <Breadcurm pages={pages}></Breadcurm>
      <Calendar />
    </div>
  );
}

export default Event;
