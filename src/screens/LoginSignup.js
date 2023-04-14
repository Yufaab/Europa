import React, { useState } from 'react';

function LoginSinup() {
  const initial = {
    isMember: true,
  };
  const [values, setValues] = useState(initial);
  const toggle = () => {
    setValues({
      ...values,
      isMember: !values.isMember,
    });
  };
  return (
    <div className="flex flex-col mx-auto mt-[128px] h-[600px] w-[600px]">
      <h3 className="mx-auto text-[48px] text-[#0098FF] font-semibold mt-[20px]">
        Yufaab
      </h3>
      <h3 className="flex mx-auto mt-[15px] text-[24px] text-[#4a4a4a] font-semibold">
        {values.isMember ? 'Login' : 'Register'}
      </h3>
      <form className="flex flex-col items-center mt-[20px]">
        {!values.isMember && (
          <input
            className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-none text-[#33475b]"
            type="text"
            name="name"
            placeholder="First Name"
            required="true"
          />
        )}
        {!values.isMember && (
          <input
            className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-none text-[#33475b]"
            type="text"
            name="name"
            placeholder="Last Name"
            required="true"
          />
        )}
        <input
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-none text-[#33475b]"
          type="email"
          name="email"
          placeholder="Email"
          required="true"
        />
        {!values.isMember && (
          <input
            className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-none text-[#33475b]"
            type="text"
            name="name"
            placeholder="Phone Number"
            required="true"
          />
        )}
        <input
          className="h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-none text-[#33475b]"
          type="password"
          name="password"
          placeholder="Password"
          required="true"
        />
        <button
          type="submit"
          className="h-[40px] w-[400px] text-center mt-[15px] text-[20px] bg-[#0098FF] rounded-[3px] p-[5px] justify-items-center text-[#fff] font-medium"
        >
          {values.isMember ? 'Login' : 'Register'}
        </button>
      </form>
      <p className="flex ml-auto mr-auto items-center text-[14px] text-[#4a4a4a] mt-[20px]">
        {values.isMember ? 'Dont have an account?' : 'Already a member?'}
        <button
          type="button"
          className="ml-[5px] text-[14px] underline text-[#0098FF]"
          onClick={toggle}
        >
          {values.isMember ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
}
export default LoginSinup;
