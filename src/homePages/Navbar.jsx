import React from "react";
import ".././App.css";
import { ShoppingCart, TextAlignJustify } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center navbar bg-white border-b border-gray-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <TextAlignJustify></TextAlignJustify>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow"
            >
              <li>
                <a className=" text-xl">Products</a>
              </li>
              <li>
                <a className="text-xl">Features</a>
              </li>
              <li>
                <a className="text-xl">Pricing</a>
              </li>
              <li>
                <a className="text-xl">Testimonials</a>
              </li>
              <li>
                <a className="text-xl">FAQ</a>
              </li>
            </ul>
          </div>
          <h2 className="md:text-4xl lg:text-4xl text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent leading-normal">
            DigiTools
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-[#101727] text-xl menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
            <button className="btn btn-ghost  rounded-4xl">{<ShoppingCart></ShoppingCart>}</button>
          <button className="btn btn-outline bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] text-[white] rounded-4xl">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
