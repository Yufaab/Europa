import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import YufaabContext from '../context/YufaabContext';

const Review = () => {
  const [review, setRieview] = useState('');
  const { yufaabInstance } = useContext(YufaabContext);

  const [userInput, setUserInput] = useState({
    firstname: '',
    lastname: '',
    email: '',
    college: '',
    profile: '',
  });

  const changeInputValue = (e) => {
    userInput[e.target.name] = e.target.value;
    setUserInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await yufaabInstance.uploadReview(userInput);
    console.log(res);
  };

  return (
    <div className="flex flex-col mx-auto mt-[108px] pb-[25px] h-auto w-[600px] shadow-[6px_2px_16px_0px_rgba(136,165,191,0.48),rgba(255,255,255,0.8)_-6px_-2px_16px_0px] rounded-[12px]">
      <h3 className="mx-auto text-[48px] text-[#0098FF] font-semibold mt-[20px]">
        Yufaab
      </h3>
      <h4 className="flex flex-col mx-auto mt-[20px] font-semibold text-[#33475b] text-[22px]">Write what you feel</h4>
      <div className="flex flex-col mx-auto mt-[20px]">
        <input
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2 text-[#33475b]"
          type="text"
          name="firstname"
          placeholder="First Name"
          value={userInput.firstname}
          onChange={changeInputValue}
        />
        <input
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2 text-[#33475b]"
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={userInput.lastname}
          onChange={changeInputValue}
        />
        <input
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2 text-[#33475b]"
          type="email"
          name="email"
          placeholder="Email"
          value={userInput.email}
          onChange={changeInputValue}
        />
        <input
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2 text-[#33475b]"
          type="text"
          name="college"
          placeholder="College"
          value={userInput.college}
          onChange={changeInputValue}
        />
        <input
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2 text-[#33475b]"
          type="text"
          name="profile"
          placeholder="Link to a social profile"
          value={userInput.profile}
          onChange={changeInputValue}
        />
        <ReactQuill
          theme="snow"
          value={review}
          onChange={setRieview}
          className="w-[400px] h-[8.5rem] text-[#4a4a4a] resize-none"
        />
        <button
          type="submit"
          onClick={submitHandler}
          className="cursor-pointer h-[40px] w-[400px] text-center mt-[65px] hover:bg-sky-700 text-[20px] bg-[#0098FF] rounded-[100px] p-[5px] justify-items-center text-[#fff] font-medium"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Review;
