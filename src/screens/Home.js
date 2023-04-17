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
import { Card, HomeLinks } from '../components';

export default function NavBar() {
  return (
    <div className="h-screen">
      <div className="home-top h-3/5 w-full flex items-center">
        <div className="w-full px-4  text-white sm:w-2/3">
          <h1 className="text-6xl font-krub">Discover Your College....</h1>
          <button
            type="button"
            className="flex flex-row items-center bg-[#0098FF] p-3 my-3 rounded-md text-2xl"
          >
            Start Counselling
            <img src={RightIcon} alt="" className=" h-6 w-14 " />
          </button>
        </div>
      </div>
      <div className="home-links h-max px-10 bg-[#D9D9D9] w-full flex flex-wrap justify-center items-center">
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
      <div className=" flex flex-row flex-wrap justify-center gap-4 mx-10 my-8">
        <Card
          title="Basic"
          description="This is a random image from Lorem Picsum."
          button="Click Me"
        />
        <Card
          button="Click Me"
          title="Standard"
          description="Lorem Picsum provides random placeholder images."
        />
        <Card
          button="Click Me"
          title="Premium"
          description="This is a blurred image from Lorem Picsum."
        />
      </div>
    </div>
  );
}
