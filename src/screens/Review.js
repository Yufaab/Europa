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
    <div>
      <input
        className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-[#0098FF] text-[#33475b]"
        type="text"
        name="firstname"
        placeholder="First Name"
        value={userInput.firstname}
        onChange={changeInputValue}
      />
      <input
        className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-[#0098FF] text-[#33475b]"
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={userInput.lastname}
        onChange={changeInputValue}
      />
      <input
        className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-[#0098FF] text-[#33475b]"
        type="email"
        name="email"
        placeholder="Email"
        value={userInput.email}
        onChange={changeInputValue}
      />
      <input
        className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-[#0098FF] text-[#33475b]"
        type="text"
        name="college"
        placeholder="College"
        value={userInput.college}
        onChange={changeInputValue}
      />
      <input
        className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-[#0098FF] text-[#33475b]"
        type="text"
        name="profile"
        placeholder="Link to a social profile"
        value={userInput.profile}
        onChange={changeInputValue}
      />
      <ReactQuill theme="snow" value={review} onChange={setRieview} />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default Review;
