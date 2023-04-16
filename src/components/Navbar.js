import React, { useState } from 'react';
import { Logo } from '../assets';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-b from-black absolute">
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between md:py-5 md:block">
            <a href="#">
              <img src={Logo} alt="logo" className="absolute my-[-20px]" />
              <h2 className="text-2xl font-bold text-black">LOGO</h2>
            </a>
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
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center text-[18px] space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-[#0098FF]">
                <a href="#">Home</a>
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
        </div>
        <div className=" flex-row hidden  md:inline-block">
          {profile ? (
            <a
              href="#"
              className="px-4 py-2 text-white bg-[#0098FF] rounded-md hover:bg-blue-600"
              onClick={() => {
                setProfile(!profile);
              }}
            >
              Sign in
            </a>
          ) : (
            <button
              type="button"
              onClick={() => {
                setProfile(!profile);
              }}
              className="mx-7 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 0110 10c0 5.523-4.477 10-10 10S0 15.523 0 10A10 10 0 0110 0zm4.248 13.458c.08-.534.208-1.146.208-1.707 0-2.794-1.659-4.291-4.249-4.291s-4.25 1.497-4.25 4.291c0 .56.128 1.173.209 1.707C5.418 14.01 4 15.76 4 18h12c0-2.24-1.419-3.99-1.752-4.542zm-2.248-2.458c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm0 1.5c-1.567 0-2.895.792-3.53 1.875C8.605 15.28 9.673 16 10.75 16s2.145-.72 2.28-1.625c-.635-1.083-1.963-1.875-3.531-1.875z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
