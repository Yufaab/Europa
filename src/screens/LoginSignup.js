import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import YufaabContext from '../context/YufaabContext';
import { GoogleLogo } from '../assets';
import userStore from '../store/userStore';
import orderStore from '../store/orderStore';

const LoginSinup = () => {
  const { yufaabInstance } = useContext(YufaabContext);
  const [isMember, setIsMember] = useState(false);
  const setToken = userStore((state) => state.setToken);
  const data = orderStore((state) => state.data);
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
  });

  const changeInputValue = (e) => {
    userInput[e.target.name] = e.target.value;
    setUserInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const toggle = () => {
    setIsMember(!isMember);
  };

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      let res;
      if (isMember) {
        res = await yufaabInstance.loginHandler({
          googleAccessToken: codeResponse.access_token,
        });
      } else {
        res = await yufaabInstance.signUpHandler({
          googleAccessToken: codeResponse.access_token,
        });
      }
      console.log('Response from server ', res);
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    let res;
    if (isMember) {
      res = await yufaabInstance.loginHandler({
        email: userInput.email,
        password: userInput.password,
      });
    } else {
      res = await yufaabInstance.signUpHandler({ ...userInput });
    }
    if (res.status === 201) {
      setToken(res.data.data.token);
      if (data) {
        navigate('/details');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className="flex flex-col mx-auto mt-[108px] h-auto w-[600px] pb-[25px] shadow-[6px_2px_16px_0px_rgba(136,165,191,0.48),rgba(255,255,255,0.8)_-6px_-2px_16px_0px] rounded-[12px]">
      <h3 className="mx-auto text-[48px] text-[#0098FF] font-semibold mt-[20px]">
        Yufaab
      </h3>
      <h3 className="flex mx-auto mt-[15px] text-[24px] text-[#4a4a4a] font-semibold">
        {isMember ? 'Login' : 'Register'}
      </h3>
      <form
        className="flex flex-col items-center mt-[20px]"
        onSubmit={submitHandler}
      >
        {!isMember && (
          <input
            className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2 text-[#33475b]"
            type="text"
            name="firstname"
            placeholder="First Name"
            value={userInput.firstname}
            onChange={changeInputValue}
          />
        )}
        {!isMember && (
          <input
            className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2 text-[#33475b]"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={userInput.lastname}
            onChange={changeInputValue}
          />
        )}
        <input
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2 text-[#33475b]"
          type="email"
          name="email"
          placeholder="Email"
          value={userInput.email}
          onChange={changeInputValue}
        />
        {!isMember && (
          <input
            className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2 text-[#33475b]"
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={userInput.phone}
            onChange={changeInputValue}
          />
        )}
        <input
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2 text-[#33475b]"
          type="password"
          name="password"
          placeholder="Password"
          value={userInput.password}
          onChange={changeInputValue}
        />
        <button
          type="submit"
          className="h-[40px] w-[400px] text-center mt-[15px] text-[20px] bg-[#0098FF] rounded-[100px] p-[5px] justify-items-center text-[#fff] font-medium"
        >
          {isMember ? 'Login' : 'Register'}
        </button>
        <p className="opacity-[.6] my-[10px]">OR</p>
        <button
          type="submit"
          className="flex flex-row h-[40px] w-auto text-center border-[2px] hover:border-[4px] p-4 rounded-[100px] items-center text-[#505050] border-[#eaeaea] font-semibold"
          onClick={login}
        >
          <img
            src={GoogleLogo}
            alt="Google logo"
            className="object-contain h-[18px] flex mr-[5px] mt-[1.2px]"
          />
          {isMember ? 'Log in with Google' : 'Sign up with Google'}
        </button>
      </form>
      <p className="flex ml-auto mr-auto items-center text-[14px] text-[#4a4a4a] mt-[20px]">
        {isMember ? 'Not a member?' : 'Already a member?'}
        <button
          type="button"
          className="ml-[5px] text-[14px] underline text-[#0098FF]"
          onClick={toggle}
        >
          {isMember ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
};
export default LoginSinup;
