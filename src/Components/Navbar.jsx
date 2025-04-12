import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Theme from "./Theme";
const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Categories", path: "/categories" },
  { name: "Cart", path: "/cart" },
  { name: "Profile", path: "/profile" },
  { name: "Contact Us", path: "/contact" },
];
const navLinks = navItems.map((navItem, index) => (
  <li key={index}><a href={navItem.path}>{navItem.name}</a></li>
));
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="flex justify-between items-center shadow-2xl shadow-gray-700 p-3">
        <h1 className="text-xl font-semibold ">Sifat</h1>
        <ul className="hidden lg:flex items-center gap-6">{navLinks}</ul>

        <div className="hidden lg:flex items-center gap-3 ">
          <Theme />
          <button className="btn  btn-soft btn-accent">Login</button>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden cursor-pointer flex items-center justify-center gap-2"
        >
          <Theme />
          {isOpen ? <RxCross2 size={24} /> : <MdMenu size={24} />}
        </div>
        <ul
          className={`lg:hidden absolute right-6 z-10 bg-[cyan] text-black p-6 rounded-md ${
            isOpen ? "top-14" : "-top-60"
          } duration-1000`}
        >
          {navLinks}
          <li>
            <button className="btn btn-soft btn-warning">Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
