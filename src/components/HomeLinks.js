import React from 'react';
import { Link } from 'react-router-dom';

const HomeLinks = ({ label, icon, linkTo }) => {
  return (
    <Link
      to={linkTo}
      className="flex flex-col m-auto py-5 text-center items-center gap-1 lg:flex-row"
    >
      <img src={icon} alt="" />
      <h1>{label}</h1>
    </Link>
  );
};

export default HomeLinks;
