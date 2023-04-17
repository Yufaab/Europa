import React from 'react';

const Card = ({ title, description, button }) => {
  return (
    <div className="w-[300px] h-[400px] rounded-md overflow-hidden shadow-lg m-auto my-4 relative">
      {/* <img className="w-full" src={imageUrl} alt={imageAlt} /> */}
      <div className="h-1/3 font-krub font-bold text-2xl bg-primary flex justify-center items-center text-white">
        {title}
      </div>
      <p className="h-2/4 text-gray-700 text-lg text-center flex items-center px-3">
        {description}
      </p>
      <button
        type="button"
        className="absolute bottom-5 right-0 left-0 ml-14 mr-14 bg-primary px-6 py-3 rounded-xl text-white font-krub font-normal text-xl"
      >
        {button}
      </button>
    </div>
  );
};

export default Card;
