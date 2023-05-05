import React from 'react';

const MyOrderStructure = ({ ongoingOrder }) => {
  const date = new Date(ongoingOrder.createdAt);
  return (
    <div className="flex flex-col items-center">
      {ongoingOrder && (
        <div
          key={ongoingOrder._id}
          className="text-[#4a4a4a] cursor-pointer hover:outline-2 hover:outline-[#0098FF] hover:outline bg-[#FEFAF0] my-3 p-3 lg:ml-[30px] sm:ml-[70px] pb-[25px] h-auto w-[600px] shadow-[6px_2px_16px_0px_rgba(136,165,191,0.48),rgba(255,255,255,0.8)_-6px_-2px_16px_0px] rounded-[15px]"
        >
          <h3 className="pt-[7px]">{`Rank : ${ongoingOrder.rank}`}</h3>
          <button type="button" className="pt-[7px]">{`Ordered Date : ${date.toUTCString()}`}</button>
        </div>
      )}
    </div>
  );
};

export default MyOrderStructure;
