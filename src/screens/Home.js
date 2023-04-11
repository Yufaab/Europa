import React from 'react';
import './Home.css';
import { RightIcon } from '../assets';

export default function NavBar() {
  return (
    <div className="h-screen">
      <div className="home-top h-3/5 w-screen flex items-center">
        <div className="w-1/2 px-16 text-white">
          <h1 className="text-6xl font-krub">Discover Your College....</h1>
          <button
            type="button"
            className="flex items-center bg-[#0098FF] p-3 my-3 rounded-md text-3xl w-max"
          >
            Start Counselling
            <img src={RightIcon} alt="" className="px-3" />
          </button>
        </div>
      </div>
      <div className="home-links h-20 bg-[#D9D9D9] w-screen flex justify-center items-center">
        home Links
      </div>
    </div>
  );
}
