import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";

const Header = () => {
  const links = (
    <>
      <li className="m-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "relative pb-2 font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:content-['']"
              : "pb-2 hover:text-[#632EE3] transition"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="m-2">
        <NavLink
          to="/appList"
          className={({ isActive }) =>
            isActive
              ? "relative pb-2 font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:content-['']"
              : "pb-2 hover:text-[#632EE3] transition"
          }
        >
          Apps
        </NavLink>
      </li>

      <li className="m-2">
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive
              ? "relative pb-2 font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:content-['']"
              : "pb-2 hover:text-[#632EE3] transition"
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
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
              {links}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-semibold"
            href="https://github.com/apubaruadiu-cmd"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 0C4.475 0 0 4.4 0 9.82667C0 14.1692 2.865 17.8517 6.8375 19.15C7.3375 19.2425 7.52083 18.9383 7.52083 18.6775C7.52083 18.4442 7.5125 17.8258 7.50833 17.0067C4.72667 17.5992 4.14 15.6883 4.14 15.6883C3.685 14.5542 3.0275 14.2508 3.0275 14.2508C2.12167 13.6417 3.0975 13.6542 3.0975 13.6542C4.10167 13.7225 4.62917 14.6667 4.62917 14.6667C5.52083 16.1692 6.97 15.735 7.54167 15.4842C7.63167 14.8483 7.88917 14.4158 8.175 14.17C5.95417 13.9242 3.62 13.0792 3.62 9.31417C3.62 8.24167 4.0075 7.365 4.64917 6.6775C4.53667 6.42917 4.19917 5.43 4.73667 4.07667C4.73667 4.07667 5.57417 3.81333 7.48667 5.08417C8.28667 4.86583 9.13667 4.7575 9.98667 4.7525C10.8367 4.7575 11.6867 4.86583 12.4867 5.08417C14.3867 3.81333 15.2242 4.07667 15.2242 4.07667C15.7617 5.43 15.4242 6.42917 15.3242 6.6775C15.9617 7.365 16.3492 8.24167 16.3492 9.31417C16.3492 13.0892 14.0117 13.92 11.7867 14.1617C12.1367 14.4567 12.4617 15.0592 12.4617 15.98C12.4617 17.295 12.4492 18.3517 12.4492 18.6708C12.4492 18.9283 12.6242 19.2358 13.1367 19.1375C17.1375 17.8475 20 14.1625 20 9.82667C20 4.4 15.5225 0 10 0Z"
                fill="white"
              />
            </svg>
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
