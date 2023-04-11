import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { id:1, ref: "/", name: "Home" },
    { id:2, ref: "/statistics", name: "Statistics" },
    { id:3, ref: "/appliedjobs", name: "Applied Jobs" },
    { id:4, ref: "/blog", name: "Blog" },
  ];

  return (
    <nav style={{maxWidth: '1400px'}} className="navbar mx-auto px-4 ">
      <div className="navbar-start">
        <a className="text-2xl font-bold">glassdoor</a>
      </div>
      <div className="navbar-center">
        <div className="md:hidden">
          {!open ? (
            <Bars3Icon
              onClick={() => setOpen(true)}
              className="h-6 w-6 text-indigo-500"
            />
          ) : (
            <XMarkIcon
              onClick={() => setOpen(false)}
              className="h-6 w-6 text-indigo-500"
            />
          )}
        </div>
        <ul
          className={`bg-sky-50 font-semibold md:flex md:static gap-8 ${
            open ? "absolute top-12 z-10" : "absolute -top-32"
          } `}
        >
          {links.map((link) => (
            <li className="" key={link.id}>
              <NavLink
                to={link.ref}
                className={({ isActive }) =>
                  isActive ? "text-gradient" : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn">Start Applying</button>
      </div>
    </nav>
  );
};

export default Header;
