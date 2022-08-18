/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const days = [
  { date: "2021-12-27", events: [] },
  { date: "2021-12-28", events: [] },
  { date: "2021-12-29", events: [] },
  { date: "2021-12-30", events: [] },
  { date: "2021-12-31", events: [] },
  { date: "2022-01-01", isCurrentMonth: true, events: [] },
  { date: "2022-01-02", isCurrentMonth: true, events: [] },
  {
    date: "2022-01-03",
    isCurrentMonth: true,
    events: [
      {
        id: 1,
        name: "Design review",
        time: "10AM",
        datetime: "2022-01-03T10:00",
        href: "#",
      },
      {
        id: 2,
        name: "Sales meeting",
        time: "2PM",
        datetime: "2022-01-03T14:00",
        href: "#",
      },
    ],
  },
  { date: "2022-01-04", isCurrentMonth: true, events: [] },
  { date: "2022-01-05", isCurrentMonth: true, events: [] },
  { date: "2022-01-06", isCurrentMonth: true, events: [] },
  {
    date: "2022-01-07",
    isCurrentMonth: true,
    events: [
      {
        id: 3,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  { date: "2022-01-08", isCurrentMonth: true, events: [] },
  { date: "2022-01-09", isCurrentMonth: true, events: [] },
  { date: "2022-01-10", isCurrentMonth: true, events: [] },
  { date: "2022-01-11", isCurrentMonth: true, events: [] },
  {
    date: "2022-01-12",
    isCurrentMonth: true,
    isToday: true,
    events: [
      {
        id: 6,
        name: "Sam's birthday party",
        time: "2PM",
        datetime: "2022-01-25T14:00",
        href: "#",
      },
    ],
  },
  { date: "2022-01-13", isCurrentMonth: true, events: [] },
  { date: "2022-01-14", isCurrentMonth: true, events: [] },
  { date: "2022-01-15", isCurrentMonth: true, events: [] },
  { date: "2022-01-16", isCurrentMonth: true, events: [] },
  { date: "2022-01-17", isCurrentMonth: true, events: [] },
  { date: "2022-01-18", isCurrentMonth: true, events: [] },
  { date: "2022-01-19", isCurrentMonth: true, events: [] },
  { date: "2022-01-20", isCurrentMonth: true, events: [] },
  { date: "2022-01-21", isCurrentMonth: true, events: [] },
  {
    date: "2022-01-22",
    isCurrentMonth: true,
    isSelected: true,
    events: [
      {
        id: 4,
        name: "Maple syrup museum",
        time: "3PM",
        datetime: "2022-01-22T15:00",
        href: "#",
      },
      {
        id: 5,
        name: "Hockey game",
        time: "7PM",
        datetime: "2022-01-22T19:00",
        href: "#",
      },
    ],
  },
  { date: "2022-01-23", isCurrentMonth: true, events: [] },
  { date: "2022-01-24", isCurrentMonth: true, events: [] },
  { date: "2022-01-25", isCurrentMonth: true, events: [] },
  { date: "2022-01-26", isCurrentMonth: true, events: [] },
  { date: "2022-01-27", isCurrentMonth: true, events: [] },
  { date: "2022-01-28", isCurrentMonth: true, events: [] },
  { date: "2022-01-29", isCurrentMonth: true, events: [] },
  { date: "2022-01-30", isCurrentMonth: true, events: [] },
  { date: "2022-01-31", isCurrentMonth: true, events: [] },
  { date: "2022-02-01", events: [] },
  { date: "2022-02-02", events: [] },
  {
    date: "2022-02-03",
    events: [
      {
        id: 7,
        name: "Cinema with friends",
        time: "9PM",
        datetime: "2022-02-04T21:00",
        href: "#",
      },
    ],
  },
  { date: "2022-02-04", events: [] },
  { date: "2022-02-05", events: [] },
  { date: "2022-02-06", events: [] },
];
const selectedDay = days.find((day) => day.isSelected);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
  return (
    <div className="lg:flex lg:h-full lg:flex-col rounded-3xl overflow-hidden border">
      <header className="lg:flex-none relative flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="sm:w-40 w-fit flex">
          <h1 className=" text-lg font-semibold text-gray-900">
            <time dateTime="2022-01" className="">
              January2022
            </time>
          </h1>
          <ChevronLeftIcon className="sm:block hidden"></ChevronLeftIcon>
          <ChevronRightIcon className="sm:block hidden"></ChevronRightIcon>
        </div>
        <div className="flex items-center">
          <div className="md:ml-4 md:flex md:items-center hidden">
            <Menu as="div" className="relative">
              <Menu.Button
                type="button"
                className="hover:bg-gray-50 flex items-center py-2 pl-3 pr-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm"
              >
                Month view
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="focus:outline-none w-36 ring-1 ring-black ring-opacity-5 absolute right-0 z-10 mt-3 overflow-hidden origin-top-right bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Day view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Week view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Month view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Year view
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <Menu as="div" className="md:hidden relative ml-6">
            <Menu.Button className="hover:text-gray-500 flex items-center p-2 -mx-2 text-gray-400 border border-transparent rounded-full">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="w-5 h-5" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="focus:outline-none w-36 ring-1 ring-black ring-opacity-5 absolute right-0 z-10 mt-3 overflow-hidden origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Create event
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Go to today
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Day view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Week view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Month view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Year view
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      <div className="ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col lg:rounded-b-3xl shadow">
        <div className="lg:flex-none grid grid-cols-7 gap-px text-xs font-semibold leading-6 text-center text-gray-700 bg-gray-200 border-b border-gray-300">
          <div className="py-2 bg-white">
            M<span className="sm:not-sr-only sr-only">on</span>
          </div>
          <div className="py-2 bg-white">
            T<span className="sm:not-sr-only sr-only">ue</span>
          </div>
          <div className="py-2 bg-white">
            W<span className="sm:not-sr-only sr-only">ed</span>
          </div>
          <div className="py-2 bg-white">
            T<span className="sm:not-sr-only sr-only">hu</span>
          </div>
          <div className="py-2 bg-white">
            F<span className="sm:not-sr-only sr-only">ri</span>
          </div>
          <div className="py-2 bg-white">
            S<span className="sm:not-sr-only sr-only">at</span>
          </div>
          <div className="py-2 bg-white">
            S<span className="sm:not-sr-only sr-only">un</span>
          </div>
        </div>
        <div className="lg:flex-auto rounded-b-3xl flex text-xs leading-6 text-gray-700 bg-gray-200">
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px hidden w-full">
            {days.map((day) => (
              <Link
                to={`/admin/event-calender/add/${day.date}`}
                key={day.date}
                className={classNames(
                  day.isCurrentMonth
                    ? "bg-white"
                    : "bg-gray-50 text-gray-50 pointer pointer-events-none ",
                  "relative py-2 px-3"
                )}
              >
                <time
                  dateTime={day.date}
                  className={
                    day.isToday
                      ? "flex h-6 w-6 items-center justify-center rounded-full bg-primary-grey-200  text-primary-grey-700"
                      : undefined
                  }
                >
                  {day.date.split("-").pop().replace(/^0/, "")}
                </time>
                {day.events.length > 0 && (
                  <ol className="mt-2">
                    {day.events.slice(0, 2).map((event) => (
                      <li key={event.id}>
                        <span className="group flex">
                          <p className=" flex-auto font-medium truncate">
                            {event.name}
                          </p>
                          <time
                            dateTime={event.datetime}
                            className=" xl:block flex-none hidden ml-3"
                          >
                            {event.time}
                          </time>
                        </span>
                      </li>
                    ))}
                    {day.events.length > 2 && (
                      <li className="text-gray-500">
                        + {day.events.length - 2} more
                      </li>
                    )}
                  </ol>
                )}
              </Link>
            ))}
          </div>
          <div className="isolate lg:hidden grid w-full grid-cols-7 grid-rows-6 gap-px">
            {days.map((day) => (
              <Link
                to={`/admin/event-calender/add/${day.date}`}
                key={day.date}
                type="button"
                className={classNames(
                  day.isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-50",
                  (day.isSelected || day.isToday) && "font-semibold",

                  !day.isSelected &&
                    day.isToday &&
                    "text-primary-grey-700 font-bold",

                  !day.isSelected &&
                    !day.isCurrentMonth &&
                    !day.isToday &&
                    "text-gray-500",
                  "flex h-14 flex-col py-2 px-3 hover:bg-gray-100"
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    day.isSelected &&
                      "flex h-6 w-6 items-center justify-center rounded-full text-gray-500",

                    "ml-auto"
                  )}
                >
                  {day.date.split("-").pop().replace(/^0/, "")}
                </time>
                <span className="sr-only">{day.events.length} events</span>
                {day.events.length > 0 && (
                  <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                    {day.events.map((event) => (
                      <span
                        key={event.id}
                        className={`mx-0.5 mb-1 h-1.5 w-1.5 rounded-full ${
                          day.isCurrentMonth ? " bg-gray-400 " : " "
                        }`}
                      />
                    ))}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {selectedDay?.events.length > 0 && (
        <div className="sm:px-6 lg:hidden px-4 py-10">
          <ol className="ring-1 ring-black ring-opacity-5 overflow-hidden text-sm bg-white divide-y divide-gray-100 rounded-lg shadow">
            {selectedDay.events.map((event) => (
              <li
                key={event.id}
                className="group focus-within:bg-gray-50 hover:bg-gray-50 flex p-4 pr-6"
              >
                <div className="flex-auto">
                  <p className="font-semibold text-gray-900">{event.name}</p>
                  <time
                    dateTime={event.datetime}
                    className=" flex items-center mt-2 text-gray-700"
                  >
                    <ClockIcon
                      className="w-5 h-5 mr-2 text-gray-400"
                      aria-hidden="true"
                    />
                    {event.time}
                  </time>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
