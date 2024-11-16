import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IconHeart,
  IconMenu,
  IconMenu2,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";

const AppHeader = () => {
  const navigations = [
    {
      label: "Home",
      path: "home",
    },
    {
      label: "About",
      path: "about",
    },
    {
      label: "Contact Us",
      path: "contact-us",
    },
  ];

  return (
    <header className="flex items-center justify-between gap-4 p-4 bg-white border-b shadow">
      <div className="flex items-center gap-4">
        {/* Menu Button For Small Screen */}
        <div className="md:hidden text-slate-600">
          {" "}
          <IconMenu2 size={20} />{" "}
        </div>

        {/* Logo */}
        <div className="text-2xl font-medium text-rose-500 max-md:hidden">
          {" "}
          V-Mart{" "}
        </div>

        {/* Logo Icon for Small Screen */}
        <div className="text-2xl font-medium text-rose-500 md:hidden">
          {" "}
          <img src="favicon.ico" alt="logo" className="size-[30px]" />{" "}
        </div>
      </div>

      {/* Navigation */}
      <nav className="max-md:hidden">
        <ul className="flex gap-4">
          {navigations?.map((navItem) => (
            <li key={navItem.path} className="px-2 font-medium text-slate-500">
              <NavLink
                to={navItem.path}
                className={({ isActive }) => (isActive ? "text-rose-500" : "")}
              >
                {navItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Profile And Cart */}
      <div className="flex gap-4">
        <Link className="p-2 rounded-full hover:bg-gray-100">
          <IconHeart size={20} className="text-slate-600" />
        </Link>

        <Link className="p-2 rounded-full hover:bg-gray-100">
          <IconShoppingCart size={20} className="text-slate-600" />
        </Link>

        <Link className="p-2 rounded-full hover:bg-gray-100">
          <IconUser size={20} className="text-slate-600" />
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
