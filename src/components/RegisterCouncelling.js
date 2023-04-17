import React from 'react';

function RegisterCouncelling() {
  return (
    <div className="flex mx-auto mt-[108px] flex-col h-[600px] w-[600px] sm:object-fill bg-white rounded-[7px]">
      <h3 className="text-[48px] mx-auto text-[#0098FF] font-semibold">
        Yufaab
      </h3>
      <h3 className="flex mx-auto text-[22px] text-[#4a4a4a] font-semibold mt-[20px]">
        Register Now To Consult A Councellor
      </h3>
      <form className="flex flex-col items-center mt-[20px] ">
        <input
          type="text"
          required="true"
          placeholder="Full Name"
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-none text-[#33475b]"
        />
        <input
          type="email"
          required="true"
          placeholder="Email"
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[12px] bg-[#f5f8fa] border-t-[1px] rounded-[3px] outline-none text-[#33475b]"
        />
        <input
          type="text"
          placeholder="Phone Number"
          required="true"
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[12px] bg-[#f5f8fa] border-t-[1px] rounded-[3px] outline-none text-[#33475b]"
        />
        <input
          type="text"
          placeholder="City/State"
          required="true"
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[12px] bg-[#f5f8fa] border-t-[1px] rounded-[3px] outline-none text-[#33475b]"
        />
        <input
          type="text"
          placeholder="Rank"
          required="true"
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[12px] bg-[#f5f8fa] border-t-[1px] rounded-[3px] outline-none text-[#33475b]"
        />
        <textarea
          name="message"
          rows="2"
          cols="30"
          placeholder="Write a message"
          className="h-[7rem] w-[400px] items-center py-[10px] px-[9px] mb-[12px] bg-[#f5f8fa] border-t-[1px] rounded-[3px] outline-none text-[#33475b] resize-none"
        >
          {}
        </textarea>
        <button
          type="submit"
          className="h-[40px] w-[400px] items-center mt-[15px] text-[20px] bg-[#0098FF] rounded-[3px] p-[5px] justify-items-center text-[#fff] font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterCouncelling;
