import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import { SiAuthy } from "react-icons/si";
import { logoutAction } from "../../redux/slice/authSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PrivateNavbar() {
  //Dispatch
  const dispatch = useDispatch();
  //Logout handler
  const logoutHandler = () => {
    dispatch(logoutAction());
    //remove the user from storage
    localStorage.removeItem("userInfo");
  };

  return (
    <Disclosure as="nav" id="Disclosure">
      {({ open }) => (
        <>
          <div id="pr1">
            <div id="pr2">
              <div id="pr3">
                <div cid="pr4">
                  {/* Mobile menu button */}
                  <Disclosure.Button id="Disclosure.Button">
                    <span id="pr5" />
                    <span id="pr6">Open main menu</span>
                    {open ? (
                      <XMarkIcon id="XMarkIcon " aria-hidden="true" />
                    ) : (
                      <Bars3Icon id="Bars3Icon" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div id="pr7">
                  {/* Logo */}
                  <SiAuthy id="SiAuthy" />
                </div>
                <div id="pr8">
                  <Link
                    to="/"
                    id="pr9"
                  >
                    Budget Manager
                  </Link>
                </div>
                <div id="pr10">
                  <Link
                    to="/add-transaction"
                    id="pr11"
                  >
                    Add Transaction
                  </Link>
                  <Link
                    to="/add-category"
                    id="pr12"
                  >
                    Add Category
                  </Link>
                  <Link
                    to="/categories"
                    id="pr13"
                  >
                    Categories
                  </Link>
                  <Link
                    to="/profile"
                    id="pr14"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    id="pr15"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
              <div id="pr16">
                <div id="pr17">
                  <button
                    onClick={logoutHandler}
                    type="button"
                    id="pr18"
                  >
                    <IoLogOutOutline id="IoLogOutOutline" aria-hidden="true" />
                    <span>Logout</span>
                  </button>
                </div>
                <div id="pr19">
                  {/* Profile dropdown */}
                  <Menu as="div" id="pr20">
                    <div>
                      <Menu.Button id="Menu.Button">
                        <span id="pr21" />
                        <span id="pr22">Open user menu</span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items id="pr23">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/student-dashboard"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              My Dashboard
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={logoutHandler}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Navs  private links*/}
          <Disclosure.Panel id="Disclosure.Panel">
            <div id="pr24">
              <Link to="/">
                <Disclosure.Button
                  as="button"
                  id="pr25"
                >
                  MasyncTracker
                </Disclosure.Button>
              </Link>
              <Link to="/add-transaction">
                <Disclosure.Button
                  as="button"
                  id="pr26"
                >
                  Add Transaction
                </Disclosure.Button>
              </Link>
              <Link to="/add-category">
                <Disclosure.Button
                  as="button"
                  id="pr27"
                >
                  Add Category
                </Disclosure.Button>
              </Link>
              <Link to="/categories">
                <Disclosure.Button
                  as="button"
                  id="pr29"
                >
                  Categories
                </Disclosure.Button>
              </Link>
              <Link to="/profile">
                <Disclosure.Button
                  as="button"
                  id="pr30"
                >
                  Profile
                </Disclosure.Button>
              </Link>
              <Link to="/dashboard">
                <Disclosure.Button
                  as="button"
                  id="pr31"
                >
                  My Dashboard
                </Disclosure.Button>
              </Link>
            </div>
            {/* Profile links */}
            <div id="pr32">
              <div id="pr33">
                <Disclosure.Button
                  as="button"
                  // onClick={logoutHandler}
                  id="pr34"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
