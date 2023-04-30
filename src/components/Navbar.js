import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-b from-black fixed top-0">
      <div className="px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between md:py-5 md:block">
          <div className="w-[200px] relative">
            <Link to="/">
              <img src={Logo} alt="logo" className="relative md:my-[-20px]" />
              <h2 className="absolute mx-auto left-0 right-0 text-2xl font-medium text-[#fff] top-3 text-center">
                Yufaab
              </h2>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <ul className="items-center justify-center text-[18px] space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white hover:text-[#0098FF]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:text-[#0098FF]">
              <a href="#">About</a>
            </li>
            <li className="text-white hover:text-[#0098FF]">
              <a href="#">Colleges</a>
            </li>
            <li className="text-white hover:text-[#0098FF]">
              <a href="#">Rank</a>
            </li>
          </ul>
        </div>
        <div className=" w-[200px] hidden md:flex md:justify-end">
          <Link to="/login">
            <button
              type="button"
              onClick={() => {
                setProfile(!profile);
              }}
              className="px-4 py-2 text-white bg-[#0098FF] rounded-md hover:bg-blue-600"
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
