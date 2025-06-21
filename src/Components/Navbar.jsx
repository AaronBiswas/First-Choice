import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-white fixed top-0 left-0 w-full z-50 shadow-md px-4">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li><a className="text-gray-700 hover:text-black">MEN</a></li>
            <li><a className="text-gray-700 hover:text-black">WOMEN</a></li>
            <li><a className="text-gray-700 hover:text-black">KIDS</a></li>
            <li><a className="text-gray-700 hover:text-black">STORE LOCATOR</a></li>
            <li><a className="text-gray-700 hover:text-black">CONTACT US</a></li>
          </ul>
        </div>
        <a className="text-2xl font-bold text-black tracking-wide ml-2">FirstChoice</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="text-gray-700 hover:text-black px-3">MEN</a></li>
          <li><a className="text-gray-700 hover:text-black px-3">WOMEN</a></li>
          <li><a className="text-gray-700 hover:text-black px-3">KIDS</a></li>
          <li><a className="text-gray-700 hover:text-black px-3">STORE LOCATOR</a></li>
          <li><a className="text-gray-700 hover:text-black px-3">CONTACT US</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-sm w-32 md:w-44 lg:w-64 bg-gray-100 text-sm"
        />
        <a className="btn btn-sm btn-outline text-black hover:text-white">Login</a>
        <a className="btn btn-sm bg-black text-white hover:bg-gray-800">Cart</a>
      </div>
    </div>
  );
}
