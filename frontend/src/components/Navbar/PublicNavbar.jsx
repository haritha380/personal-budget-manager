import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SiAuthy } from "react-icons/si";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa";

export default function PublicNavbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow"id="p1">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"id="p2">
            <div className="flex h-16 justify-between"id="p3">
              <div className="flex"id="p28">
                <div className="-ml-2 mr-2 flex items-center md:hidden"id="p4">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"id="p5">
                    <span className="absolute -inset-0.5"id="p6" />
                    <span className="sr-only"id="p7">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6"id="p8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6"id="p9" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center"id="p10">
               {/* Logo */}
                  <img 
                   src="images (16).jpeg"  // Replace with the path to your logo image
                   alt="Logo"                   // Add alt text for accessibility
                   className="h-8 w-9"id="p11"       // Apply Tailwind classes for sizing
                 />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8"id="p12">
                  <Link
                    to="/"
                    
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"id="p13"
                    style={{fontSize: "20px"}}
                  >
                    Budget Manager
                  </Link>
                </div>
              </div>
              <div className="flex items-center"id="p14">
                <div className="flex-shrink-0"id="p15">
                  <Link
                    to="/register"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "id="p16"
                  >
                    <FaRegUser className="-ml-0.5 h-5 w-5"id="p17" aria-hidden="true" />
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="relative ml-2 inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "id="p18"
                  >
                    <RiLoginCircleLine
                      className="-ml-0.5 h-5 w-5"id="p19"
                      aria-hidden="true"
                    />
                    Login
                  </Link>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center"id="p20">
                  <button
                    type="button"
                    className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"id="p21"
                  >
                    <span className="absolute -inset-1.5"id="p22" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden"id="p23">
            <div className="space-y-1 pb-3 pt-2"id="p24">
              <Link to="/">
                <Disclosure.Button
                  as="button"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"id="p25"
                >
                  Budget Manager
                </Disclosure.Button>
              </Link>

              <Link to="/register">
                <Disclosure.Button
                  as="button"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"id="p26"
                >
                  Register
                </Disclosure.Button>
              </Link>
              <Link to="/login">
                <Disclosure.Button
                  as="button"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"id="p27"
                >
                  Login
                </Disclosure.Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
