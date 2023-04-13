import React from 'react';
import './Home.css';
import {
  CalenderIcon,
  FindLocationIcon,
  RefreshIcon,
  ReviewIcon,
  RightIcon,
  UserIcon,
} from '../assets';
import { HomeLinks } from '../components';

export default function NavBar() {
  return (
    <div className="h-screen">
      <div className="home-top h-3/5 w-full flex items-center">
        <div className="w-1/2 px-16 text-white">
          <h1 className="text-6xl font-krub">Discover Your College....</h1>
          <button
            type="button"
            className="flex items-center bg-[#0098FF] p-3 my-3 rounded-md text-3xl w-max"
          >
            Start Counselling
            <img src={RightIcon} alt="" className="px-3 h-6 w-14" />
          </button>
        </div>
      </div>
      <div className="home-links h-max px-10 bg-[#D9D9D9] w-full flex  flex-wrap justify-center items-center">
        <HomeLinks
          label="Find colleges"
          icon={FindLocationIcon}
          linkTo="/college"
        />
        <HomeLinks
          label="Free Conselling"
          icon={UserIcon}
          linkTo="/conselling"
        />
        <HomeLinks
          label="Important Dates"
          icon={CalenderIcon}
          linkTo="/dates"
        />
        <HomeLinks
          label="Latest Updates"
          icon={RefreshIcon}
          linkTo="/updates"
        />
        <HomeLinks label="Write a Review" icon={ReviewIcon} linkTo="/review" />
      </div>
    </div>
  );
}
