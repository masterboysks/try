import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/logoHeader.png";
import man from "./man-pic.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const location = useLocation().pathname;
  return (
    <>
      <div className=" fixed top-0 z-[100] w-screen">
        <Disclosure
          as="nav"
          className="sm:border-none bg-white border-2 border-b shadow-md"
        >
          {({ open }) => (
            <div className="">
              <div className="sm:px-4 px-4">
                <div className="md:justify-between flex h-16">
                  <div className=" flex justify-between w-screen px-2">
                    <div className="md:flex-shrink-0 flex items-center">
                      <img
                        className=" block w-auto h-10"
                        src={logo}
                        alt="Kinder garden school logo"
                      />
                      <Link
                        className="w-36 text-logo sm:block hidden ml-2 text-base font-medium"
                        to="/"
                      >
                        Kindergarden Secondary School
                      </Link>
                    </div>
                    <div className="lg:flex lg:space-x-8 hidden">
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      <Link
                        to="/dashboard"
                        className={`${
                          location.includes("dashboard")
                            ? "text-primary-grey-700 font-medium"
                            : "text-primary-grey-600 font-normal hover:text-primary-grey-700"
                        }  inline-flex items-center px-1 pt-1  text-base `}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/event-calender"
                        className={`${
                          location.includes("event-calender")
                            ? "text-primary-grey-700 font-medium"
                            : "text-primary-grey-600 font-normal hover:text-primary-grey-700"
                        }  inline-flex items-center px-1 pt-1  text-base `}
                      >
                        Event calander
                      </Link>
                      <Link
                        to="/push-notification"
                        className={`${
                          location.includes("push-notification")
                            ? "text-primary-grey-700 font-medium"
                            : "text-primary-grey-600 font-normal hover:text-primary-grey-700"
                        }  inline-flex items-center px-1 pt-1  text-base `}
                      >
                        Push Notification
                      </Link>
                      <Link
                        to="fee/fee-payment"
                        className={`${
                          location.includes("fee/fee-payment")
                            ? "text-primary-grey-700 font-medium"
                            : "text-primary-grey-600 font-normal hover:text-primary-grey-700"
                        }  inline-flex items-center px-1 pt-1  text-base `}
                      >
                        Fee Payment
                      </Link>
                      <Link
                        to="fee/student-logsheet"
                        className={`${
                          location.includes("fee/student-logsheet")
                            ? "text-primary-grey-700 font-medium"
                            : "text-primary-grey-600 font-normal hover:text-primary-grey-700"
                        }  inline-flex items-center px-1 pt-1  text-base `}
                      >
                        Logsheet
                      </Link>
                    </div>
                    <div className="sm:flex lg:ml-0 lg:flex items-center hidden mx-2 ml-auto">
                      <button
                        type="button"
                        className="text-primary-grey-600 hover:text-primary-grey-700 focus:outline-none flex-shrink-0 p-1 bg-white rounded-full"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative flex-shrink-0 ml-4">
                        <div>
                          <Menu.Button className="focus:outline-none ring-2 ring-offset-1 ring-primary-profile-circle flex text-base bg-white rounded-full">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="w-8 h-8 rounded-full"
                              src={man}
                              alt="man"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-sm">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  to="/profile"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-base text-gray-700"
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  to="/settings"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-base text-gray-700"
                                  )}
                                >
                                  Settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-base text-gray-700"
                                  )}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <Popover className="lg:hidden flex items-center">
                      {/* Mobile menu button */}
                      <Popover.Button className=" hover:text-primary-grey-700 focus:outline-primary-grey-200 focus:outline inline-flex items-center justify-center p-2 rounded-md">
                        <span className="sr-only">Open main menu</span>

                        <MenuIcon
                          className=" block w-6 h-6"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Popover.Panel className="lg:hidden absolute right-0 top-[66px] w-40 h-screen">
                        <div className="h-5/6 min-h-fit bg-primary-grey-100 pt-2 pb-3 space-y-1 shadow-md">
                          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: " text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                          <Popover.Button
                            as="a"
                            className={`${
                              location.includes("dashboard")
                                ? "bg-primary-grey-200 border-primary-grey-300 font-normal-700 cursor-pointer w-full text-primary-grey-700 block py-2 pl-3 pr-4 text-base border-l-4"
                                : "bg-primary-grey-100 font-normal-700  hover:bg-primary-grey-200 w-full hover:border-primary-grey-300  cursor-pointer text-primary-grey-600 block py-2 pl-3 pr-4 text-base hover:border-l-4"
                            }  inline-flex items-center px-1 pt-1  text-base `}
                          >
                            <Link to="/"> Dashboard</Link>
                          </Popover.Button>
                          <Popover.Button
                            as="a"
                            className={`${
                              location.includes("event-calender")
                                ? "bg-primary-grey-200 border-primary-grey-300 font-normal-700 cursor-pointer w-full text-primary-grey-700 block py-2 pl-3 pr-4 text-base border-l-4"
                                : "bg-primary-grey-100 font-normal-700  hover:bg-primary-grey-200 w-full hover:border-primary-grey-300  cursor-pointer text-primary-grey-600 block py-2 pl-3 pr-4 text-base hover:border-l-4"
                            }  inline-flex items-center px-1 pt-1  text-base `}
                          >
                            <Link to="/"> Event</Link> Calender
                          </Popover.Button>
                          <Popover.Button
                            as="a"
                            className={`${
                              location.includes("projects")
                                ? "bg-primary-grey-200 border-primary-grey-300 font-normal-700 cursor-pointer w-full text-primary-grey-700 block py-2 pl-3 pr-4 text-base border-l-4"
                                : "bg-primary-grey-100 font-normal-700  hover:bg-primary-grey-200 w-full hover:border-primary-grey-300  cursor-pointer text-primary-grey-600 block py-2 pl-3 pr-4 text-base hover:border-l-4"
                            }  inline-flex items-center px-1 pt-1  text-base `}
                          >
                            <Link to="/"> Projects</Link>
                          </Popover.Button>
                          <Popover.Button
                            as="a"
                            className={`${
                              location.includes("push-notification")
                                ? "bg-primary-grey-200 border-primary-grey-300 font-normal-700 cursor-pointer w-full text-primary-grey-700 block py-2 pl-3 pr-4 text-base border-l-4"
                                : "bg-primary-grey-100 font-normal-700  hover:bg-primary-grey-200 w-full hover:border-primary-grey-300  cursor-pointer text-primary-grey-600 block py-2 pl-3 pr-4 text-base hover:border-l-4"
                            }  inline-flex items-center px-1 pt-1  text-base `}
                          >
                            <Link to="/"> Push</Link> Notification
                          </Popover.Button>
                          <Popover.Button
                            as="a"
                            className={`${
                              location.includes("fee-payment")
                                ? "bg-primary-grey-200 border-primary-grey-300 font-normal-700 cursor-pointer w-full text-primary-grey-700 block py-2 pl-3 pr-4 text-base border-l-4"
                                : "bg-primary-grey-100 font-normal-700  hover:bg-primary-grey-200 w-full hover:border-primary-grey-300  cursor-pointer text-primary-grey-600 block py-2 pl-3 pr-4 text-base hover:border-l-4"
                            }  inline-flex items-center px-1 pt-1  text-base `}
                          >
                            <Link to="/"> Fee</Link> Payment
                          </Popover.Button>
                          <Popover.Button
                            as="a"
                            className={`${
                              location.includes("logsheet")
                                ? "bg-primary-grey-200 border-primary-grey-300 font-normal-700 cursor-pointer w-full text-primary-grey-700 block py-2 pl-3 pr-4 text-base border-l-4"
                                : "bg-primary-grey-100 font-normal-700  hover:bg-primary-grey-200 w-full hover:border-primary-grey-300  cursor-pointer text-primary-grey-600 block py-2 pl-3 pr-4 text-base hover:border-l-4"
                            }  inline-flex items-center px-1 pt-1  text-base `}
                          >
                            <Link to="/"> Logsheet</Link>
                          </Popover.Button>
                        </div>
                        {/* <div className="pt-4 pb-3 border-t border-gray-200">
                      <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div font-normal>
                        <div className="ml-3">
                          <div className="text-gray font-normal-800 text-base">
                            Tom Cook
                          </div>
                          <div className="text-base text-gray-500">
                            tom@example.com
                          </div>
                        </div>
                        <button
                          type="button"
                          className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 space-y-1">
                        <Popover.Button
                          as font-normal="a"
                          
                          className="hover:text-gray-800 hover:bg-gray-100 block px-4 py-2 text-base text-gray-500"
                        >
                          Your Profile
                        </.Button>
                        <Popover.Button
                          as font-normal="a"Popover.Button                    
                          className="hover:text-gray-800 hover:bg-gray-100 block px-4 py-2 text-base text-gray-500"
                        >
                          Settings
                        </.Button>
                        <Popover.Button
                          as font-normal="a"Popover.Button                    
                          className="hover:text-gray-800 hover:bg-gray-100 block px-4 py-2 text-base text-gray-500"
                        >
                          Sign out
                        </.Button>
                      </div>
                    </div> */}
                      </Popover.Panel>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Disclosure>
      </div>
      <div className="mb-16"></div>
    </>
  );
}
