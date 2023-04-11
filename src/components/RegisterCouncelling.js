import React from 'react';

function RegisterCouncelling() {
  return (
    <div>
      <h3>Register Now To Consult A Councellor</h3>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Mobile Number" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Rank" />
      <textarea name="message" rows="2" cols="30" placeholder="Write a message">
        {}
      </textarea>
      <button type="submit">Register Now</button>
    </div>
  );
}

export default RegisterCouncelling;
