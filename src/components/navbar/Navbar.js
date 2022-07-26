import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "./logoHeader.png";
import man from "./man-pic.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const location = useLocation().pathname;
  return (
    <Disclosure
      as="nav"
      className="z-50 bg-white border-2 border-b shadow-md  sm:border-none"
    >
      {({ open }) => (
        <div className="">
          <div className="px-4 sm:px-4">
            <div className="flex h-16 md:justify-between ">
              <div className="flex justify-between w-screen px-2 ">
                <div className="flex items-center md:flex-shrink-0">
                  <img
                    className="block w-auto h-10 "
                    src={logo}
                    alt="Kinder garden school logo"
                  />
                  <Link
                    className="hidden ml-2 text-base font-medium w-36 text-logo sm:block"
                    to="/"
                  >
                    Kindergarden Secondary School
                  </Link>
                </div>
                <div className="hidden lg:flex lg:space-x-8">
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
                    to="fee-payment"
                    className={`${
                      location.includes("fee-payment")
                        ? "text-primary-grey-700 font-medium"
                        : "text-primary-grey-600 font-normal hover:text-primary-grey-700"
                    }  inline-flex items-center px-1 pt-1  text-base `}
                  >
                    Fee Payment
                  </Link>
                  <Link
                    to="logsheet"
                    className={`${
                      location.includes("logsheet")
                        ? "text-primary-grey-700 font-medium"
                        : "text-primary-grey-600 font-normal hover:text-primary-grey-700"
                    }  inline-flex items-center px-1 pt-1  text-base `}
                  >
                    Logsheet
                  </Link>
                </div>
                <div className="items-center hidden mx-2 ml-auto sm:flex lg:ml-0 lg:flex">
                  <button
                    type="button"
                    className="flex-shrink-0 p-1 bg-white rounded-full text-primary-grey-600 hover:text-primary-grey-700 focus:outline-none "
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0 ml-4">
                    <div>
                      <Menu.Button className="flex text-base bg-white rounded-full focus:outline-none ring-2 ring-offset-1 ring-primary-profile-circle">
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
                      <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary-grey-600 hover:text-primary-grey-700 hover:bg-primary-grey-200 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="lg:hidden absolute right-0 top-[66px] h-5/6  bg-primary-grey-100 shadow-md">
                    <div className="pt-2 pb-3 space-y-1">
                      {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: " text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="py-2 pl-3 pr-4 text-base border-l-4 bg-primary-grey-200 border-primary-grey-100-grey font-normal-700text-primary-grey-700block "
                      >
                        Dashboard
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block py-2 pl-3 pr-4 text-base border-l-4 border-transparent text-primary-grey-600 hover:bg-primary-grey-200 hover:border-primary-grey-100-grey-600 font-sm"
                      >
                        Event Calender
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block py-2 pl-3 pr-4 text-base border-l-4 border-transparent text-primary-grey-600 hover:bg-primary-grey-200 hover:border-primary-grey-100-grey-600 font-sm"
                      >
                        Projects
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block py-2 pl-3 pr-4 text-base border-l-4 border-transparent text-primary-grey-600 hover:bg-primary-grey-200 hover:border-primary-grey-100-grey-600 font-sm"
                      >
                        Push Notification
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block py-2 pl-3 pr-4 text-base border-l-4 border-transparent text-primary-grey-600 hover:bg-primary-grey-200 hover:border-primary-grey-100-grey-600 font-sm"
                      >
                        Fee Payment
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block py-2 pl-3 pr-4 text-base border-l-4 border-transparent text-primary-grey-600 hover:bg-primary-grey-200 hover:border-primary-grey-100-grey-600 font-sm"
                      >
                        Logsheet
                      </Disclosure.Button>
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
                          <div className="text-base text-gray font-normal-800">
                            Tom Cook
                          </div>
                          <div className="text-base text-gray-500">
                            tom@example.com
                          </div>
                        </div>
                        <button
                          type="button"
                          className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 space-y-1">
                        <Disclosure.Button
                          as font-normal="a"
                          href="#"
                          className="block px-4 py-2 text-base text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                        >
                          Your Profile
                        </Disclosure.Button>
                        <Disclosure.Button
                          as font-normal="a"
                          href="#"
                          className="block px-4 py-2 text-base text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                        >
                          Settings
                        </Disclosure.Button>
                        <Disclosure.Button
                          as font-normal="a"
                          href="#"
                          className="block px-4 py-2 text-base text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                        >
                          Sign out
                        </Disclosure.Button>
                      </div>
                    </div> */}
                  </Disclosure.Panel>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
