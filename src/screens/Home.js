import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { RefreshIcon, ReviewIcon, RightIcon, UserIcon } from '../assets';
import { HomeLinks } from '../components';
import YufaabContext from '../context/YufaabContext';

export default function NavBar() {
  const { yufaabInstance } = useContext(YufaabContext);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await yufaabInstance.fetchReviews();
      console.log(res.status);
    };
    fetchReviews();
  }, []);

  return (
    <div className="h-screen">
      <div className="home-top h-3/5 w-full flex items-center">
        <div className="w-full px-4  text-white sm:w-2/3">
          <h1 className="font-krub ml-[20px] md:text-[50px] sm:text-[70px]">
            Discover Your College!
          </h1>
          <button
            type="button"
            className="flex flex-row items-center bg-[#0098FF] p-3 my-3 rounded-[15px] md:text-2xl ml-[20px] sm:text-[16px]"
          >
            <a href="#pricing">Start Counselling</a>
            <img src={RightIcon} alt="" className=" h-5 w-12 " />
          </button>
        </div>
      </div>
      <div className="home-links h-max px-10 bg-[#D9D9D9] w-[100%] flex flex-wrap justify-center items-center">
        <HomeLinks label="Conselling" icon={UserIcon} linkTo="/conselling" />
        <HomeLinks
          label="Latest Updates"
          icon={RefreshIcon}
          linkTo="/updates"
        />
        <HomeLinks label="Write a Review" icon={ReviewIcon} linkTo="/review" />
      </div>
      <div className=" flex flex-wrap justify-center pt-10 w-auto items-center pl-[13%] pr-[13%] bg-[#FEFAF0]">
        <div
          id="pricing"
          className="w-[300px] h-[400px] sm:mb-8 lg:mb-[20px] rounded-[15px] mx-auto items-center overflow-hidden max-w-[300px] bg-gradient-to-r from-emerald-400 to-cyan-400 px-[20px] py-[40px] hover:scale-[1.1] shadow-[0_5px_10px_rgba(0, 0, 0, .1)] transition ease-in-out delay-150"
        >
          <h2 className="flex flex-col text-[#fff] w-[100px] h-[100px] text-[40px] rounded-[50%] items-center mx-auto z-2 p-0 m-0">
            Basic
          </h2>
          <h4 className="flex flex-col text-[#fff] list-none text-[60px] mx-auto items-center font-medium mt-0 pt-0">
            29
          </h4>
          <p className="flex flex-col text-[#fff] list-none text-[16px] mx-auto items-center">
            Wait time upto 4 hours
          </p>
          <p className="flex flex-col text-[#fff] list-none text-[16px] mx-auto items-center">
            Description 2
          </p>
          <Link to="/details">
            <button
              type="button"
              className="flex flex-col z-2 bg-[#fff] text-[#000] w-[150px] h-[40px] rounded-[40px] items-center mx-auto mt-[40px] pt-[8px] shadow-[0_5px_10px_rgba(0, 0, 0, .1)] hover:bg-gradient-to-r from-amber-200 to-yellow-400"
            >
              Order Now
            </button>
          </Link>
        </div>
        <div className="w-[300px] h-[400px] rounded-[15px] mx-auto items-center overflow-hidden max-w-[300px] bg-gradient-to-r from-cyan-500 to-blue-500 px-[20px] py-[40px] hover:scale-[1.1] shadow-[0_5px_10px_rgba(0, 0, 0, .1)] transition ease-in-out delay-150">
          <h2 className="flex flex-col text-[#fff] w-[100px] h-[100px] text-[40px] rounded-[50%] items-center mx-auto z-2 p-0 m-0">
            Standard
          </h2>
          <h4 className="flex flex-col text-[#fff] list-none text-[60px] mx-auto items-center font-medium mt-0 pt-0">
            49
          </h4>
          <p className="flex flex-col text-[#fff] list-none text-[16px] mx-auto items-center">
            Wait time upto 30 minutes
          </p>
          <p className="flex flex-col text-[#fff] list-none text-[16px] mx-auto items-center">
            Description 2
          </p>
          <Link to="/details">
            <button
              type="button"
              className="flex flex-col z-2 bg-[#fff] text-[#000] w-[150px] h-[40px] rounded-[40px] items-center mx-auto mt-[40px] pt-[8px] shadow-[0_5px_10px_rgba(0, 0, 0, .1)] hover:bg-gradient-to-r from-amber-200 to-yellow-400"
            >
              Order Now
            </button>
          </Link>
        </div>
        <div className="w-[300px] h-[400px] rounded-[15px] mx-auto items-center overflow-hidden max-w-[300px] bg-gradient-to-r from-indigo-500 to-blue-500 px-[20px] py-[40px] hover:scale-[1.1] shadow-[0_5px_10px_rgba(0, 0, 0, .1)] transition ease-in-out delay-150">
          <h2 className="flex flex-col text-[#fff] w-[100px] h-[100px] text-[40px] rounded-[50%] items-center mx-auto z-2 p-0 m-0">
            Premium
          </h2>
          <h4 className="flex flex-col text-[#fff] list-none text-[60px] mx-auto items-center font-medium mt-0 pt-0">
            99
          </h4>
          <p className="flex flex-col text-[#fff] list-none text-[16px] mx-auto items-center">
            One to One Interaction
          </p>
          <p className="flex flex-col text-[#fff] list-none text-[16px] mx-auto items-center">
            Wait time upto 30 minutes
          </p>
          <p className="flex flex-col text-[#fff] list-none text-[16px] mx-auto items-center">
            Telegram Access
          </p>
          <Link to="/details">
            <button
              type="button"
              className="flex flex-col z-2 bg-[#fff] text-[#000] w-[150px] h-[40px] rounded-[40px] items-center mx-auto mt-[40px] pt-[8px] shadow-[0_5px_10px_rgba(0, 0, 0, .1)] hover:bg-gradient-to-r from-amber-200 to-yellow-400"
            >
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
