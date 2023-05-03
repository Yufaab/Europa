import React from 'react';
import { Link } from 'react-router-dom';
import { NotFound } from '../assets';

const NoOrder = () => {
  return (
    <div className="flex items-center mx-auto flex-col mt-[-60px]">
      <img src={NotFound} alt="No order to display" />
      <Link to="/">
        <h4 className="h-[40px] opacity-[.9] hover:opacity-[.6] mt-[-20px] underline text-[20px] text-[#0098FF]">
          Back Home
        </h4>
      </Link>
    </div>
  );
};

export default NoOrder;
