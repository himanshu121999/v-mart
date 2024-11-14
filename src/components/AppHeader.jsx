import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IconHeart, IconShoppingCart, IconUser } from "@tabler/icons-react";

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
      {/* Logo */}
      <div className="text-2xl font-medium text-rose-500"> V-Mart </div>

      {/* Navigation */}
      <nav>
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
