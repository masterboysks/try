import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "./logoHeader.png";
import man from "./man-pic.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="bg-white shadow-lg z-50 border-b-2 border-red border-b-primary-textC"
    >
      {({ open }) => (
        <div className=" ">
          <div className=" px-4 sm:px-4 ">
            <div className="flex md:justify-between h-16">
              <div className="flex px-2 justify-between  w-screen">
                <div className="md:flex-shrink-0 flex items-center">
                  <img
                    className="block  h-10 w-auto "
                    src={logo}
                    alt="Kinder garden school logo"
                  />
                  <span className="w-36 ml-2 font-medium text-base text-logo">
                    Kindergarden Secondary School
                  </span>
                </div>
                <div className="hidden lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className=" text-primary-active inline-flex items-center px-1 pt-1  text-base font-medium"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-primary-textC hover:text-primary-active inline-flex items-center px-1 pt-1  text-base font-medium"
                  >
                    Event calander
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-primary-textC hover:text-primary-active inline-flex items-center px-1 pt-1  text-base font-medium"
                  >
                    Push Notification
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-primary-textC hover:text-primary-active inline-flex items-center px-1 pt-1  text-base font-medium"
                  >
                    Fee Payment
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-primary-textC hover:text-primary-active inline-flex items-center px-1 pt-1  text-base font-medium"
                  >
                    Logsheet
                  </a>
                </div>
                <div className=" hidden sm:flex mx-2 ml-auto lg:ml-0 lg:flex items-center">
                  <button
                    type="button"
                    className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none   "
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-4 relative flex-shrink-0">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-base focus:outline-none ring-2 ring-offset-1  ring-primary-circle">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-sm py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
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
                              href="#"
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
                <div className=" items-center flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary-textC hover:text-primary-active hover:bg-primary-bgActive focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="lg:hidden absolute right-0 top-[66px] h-5/6  bg-primary-bg shadow-md">
                    <div className="pt-2 pb-3 space-y-1">
                      {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="bg-primary-bgActive border-primary-active text-primary-active block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      >
                        Dashboard
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="border-transparent text-primary-textC hover:bg-primary-bgActive hover:border-primary-textC block pl-3 pr-4 py-2 border-l-4 text-base font-sm"
                      >
                        Event Calender
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="border-transparent text-primary-textC hover:bg-primary-bgActive hover:border-primary-textC block pl-3 pr-4 py-2 border-l-4 text-base font-sm"
                      >
                        Projects
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="border-transparent text-primary-textC hover:bg-primary-bgActive hover:border-primary-textC block pl-3 pr-4 py-2 border-l-4 text-base font-sm"
                      >
                        Push Notification
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="border-transparent text-primary-textC hover:bg-primary-bgActive hover:border-primary-textC block pl-3 pr-4 py-2 border-l-4 text-base font-sm"
                      >
                        Fee Payment
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="border-transparent text-primary-textC hover:bg-primary-bgActive hover:border-primary-textC block pl-3 pr-4 py-2 border-l-4 text-base font-sm"
                      >
                        Logsheet
                      </Disclosure.Button>
                    </div>
                    {/* <div className="pt-4 pb-3 border-t border-gray-200">
                      <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium text-gray-800">
                            Tom Cook
                          </div>
                          <div className="text-base font-medium text-gray-500">
                            tom@example.com
                          </div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 space-y-1">
                        <Disclosure.Button
                          as="a"
                          href="#"
                          className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                        >
                          Your Profile
                        </Disclosure.Button>
                        <Disclosure.Button
                          as="a"
                          href="#"
                          className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                        >
                          Settings
                        </Disclosure.Button>
                        <Disclosure.Button
                          as="a"
                          href="#"
                          className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
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
