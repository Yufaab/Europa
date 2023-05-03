import React from 'react';

const PreviewsStructure = ({ ongoingOrder }) => {
  const date = new Date(ongoingOrder.createdAt);
  return (
    <div>
      <div>
        {ongoingOrder && (
        <div key={ongoingOrder._id} className="text-[#4a4a4a] hover:outline-2 hover:outline-[#0098FF] hover:outline bg-[#FEFAF0] my-3 p-3 lg:ml-[30px] sm:ml-[70px] flex flex-col mx-auto pb-[25px] h-auto w-[600px] shadow-[6px_2px_16px_0px_rgba(136,165,191,0.48),rgba(255,255,255,0.8)_-6px_-2px_16px_0px] rounded-[15px]">
          <h3 className="pt-[7px]">{`Rank : ${ongoingOrder.rank}`}</h3>
          <h3 className="pt-[7px]">{`Category : ${ongoingOrder.seatType}`}</h3>
          <h3 className="pt-[7px]">{`Category : ${ongoingOrder.gender}`}</h3>
          <h3 className="pt-[7px]">{`State : ${ongoingOrder.state}`}</h3>
          <h3 className="pt-[7px]">{`Disability : ${ongoingOrder.disability === 'true' ? 'Yes' : 'No'}`}</h3>
          <h3 className="pt-[7px]">{`Category Rank: ${ongoingOrder.categoryRank ? ongoingOrder.categoryRank : 'NA'}`}</h3>
          <h3 className="pt-[7px]">{`Branch Preference: ${ongoingOrder.branchPreference ? ongoingOrder.branchPreference : 'NA'}`}</h3>
          <h3 className="pt-[7px]">{`College Preference: ${ongoingOrder.collegePreference ? ongoingOrder.collegePreference : 'NA'}`}</h3>
          <h3 className="pt-[7px]">{`Ordered Date : ${date.toUTCString()}`}</h3>
        </div>
        )}
      </div>
    </div>
  );
};

export default PreviewsStructure;
