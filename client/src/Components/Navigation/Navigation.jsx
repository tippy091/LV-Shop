import React from "react";
import WishList from "../Common/WishList";
import AccountIcon from "../Common/AccountIcon";
import CartIcon from "../Common/CartIcon";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-16 justify-between gap-30">
      <div className="">
        <Link to="/">
          <p className="text-2xl bold text-black gap-8">LOUIS VUITTON </p>
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-10 flex-1">
        <ul className="flex gap-14 text-gray-600 text-xl">
          <li className="hover:text-black">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              SHOP
            </NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink
              to="/men"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              MEN
            </NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink
              to="/women"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              WOMEN
            </NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink
              to="/perfumes"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              PERFUMES
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        {/*Search Bar*/}
        <div className="rounded flex overflow-hidden">
          <div className="flex items-center justify-center px-4 border-1">
            <svg
              className="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
            <input
              type="text"
              className="px-4 py-2 outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {/*Action Items  Bar*/}
        <ul className="flex gap-8">
          <li>
            <button>
              <WishList />
            </button>
          </li>
          <li>
            <button>
              <AccountIcon />
            </button>
          </li>
          <li>
            <Link href="/cart-items">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
