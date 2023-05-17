import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderStructure = ({ ongoingOrder }) => {
  const date = new Date(ongoingOrder.createdAt);
  return (
    <div className="flex flex-col items-center">
      {ongoingOrder && (
        <div
          key={ongoingOrder._id}
          className="text-[#4a4a4a] hover:outline-2 hover:outline-[#0098FF] hover:outline bg-[#FEFAF0] my-3 p-3 h-auto sm:w-auto lg:w-[600px] shadow-[6px_2px_16px_0px_rgba(136,165,191,0.48),rgba(255,255,255,0.8)_-6px_-2px_16px_0px] rounded-[15px]"
        >
          <h3 className="pt-[7px]">{`Rank : ${ongoingOrder.rank}`}</h3>
          <h3 type="button" className="pt-[7px]">
            {`Ordered Date : ${date.toUTCString()}`}
          </h3>
          <Link to={`/report/${ongoingOrder._id}`}>
            <button
              type="button"
              className="mt-[7px] px-4 py-2 text-white bg-[#0098FF] rounded-[100px] hover:bg-sky-700"
            >
              View Report
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyOrderStructure;
