import React from "react";
import { NavLink } from "react-router";

export default function Navber() {
  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-[18px] font-semibold ${isActive && "border-2 text-green-600 border-green-600 rounded"}`
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-[18px] font-semibold ${isActive && "border-2 text-green-600 border-green-600 rounded"}`
                }
                to={"/books"}
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-[18px] font-semibold ${isActive && "border-2 text-green-600 border-green-600 rounded"}`
                }
                to={"/page-read"}
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 className="text-3xl font-bold">Book Vibe</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-[18px] font-semibold ${isActive && "border-2 text-green-600 border-green-600 rounded"}`
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-[18px] font-semibold ${isActive && "border-2 text-green-600 border-green-600 rounded"}`
              }
              to={"/books"}
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-[18px] font-semibold ${isActive && "border-2 text-green-600 border-green-600 rounded"}`
              }
              to={"/page-read"}
            >
              Pages to Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
}
