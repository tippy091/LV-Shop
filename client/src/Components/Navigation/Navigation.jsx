import React from "react";
import WishList from "../Common/WishList";
import AccountIcon from "../Common/AccountIcon";
import CartIcon from "../Common/CartIcon";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useSelector } from "react-redux";
import { countCartItems } from "../../stores/features/Cart";

const Navigation = ({ variant = "default" }) => {
  const navigate = useNavigate();
  const cartLength = useSelector(countCartItems);
  return (
    <nav className="flex items-center py-6 px-16 justify-between gap-30">
      <div className="">
        <Link to="/">
          <p className="text-[2 bold text-black gap-8">LOUIS VUITTON </p>
        </Link>
      </div>
      {variant === "default" && (
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
      )}
      {variant === "default" && (
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
      )}
      <div className="flex flex-wrap items-center gap-4">
        {/*Action Items  Bar*/}
        {variant === "default" && (
          <ul className="flex gap-8">
            <li>
              <button>
                <WishList />
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/account-details/profile")}>
                <AccountIcon />
              </button>
            </li>
            <li>
              <Link to="/cart-items" className="flex flex-wrap">
                <CartIcon />
                {cartLength > 0 && (
                  <div className="absolute ml-6 inline-flex items-center justify-center h-6 w-6 bg-black text-white rounded-full border-2 text-xs">
                    {cartLength}
                  </div>
                )}
              </Link>
            </li>
          </ul>
        )}
        {variant === "auth" && (
          <ul className="flex gap-8">
            <li className="text-black border border-black hover:bg-slate-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
              <NavLink
                to={"/v1/login"}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Login
              </NavLink>
            </li>
            <li className="text-black border border-black hover:bg-slate-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
              <NavLink
                to={"/v1/register"}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
