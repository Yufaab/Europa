import React, { useState } from 'react';
import { Category, CategoryRank, Gender, Rank, IsPWD, State, Branches } from '../components/DetailsComponents';

function Formm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    rank: '',
    category: '',
    categoryRank: '',
    gender: '',
    ispwd: '',
    state: '',
    branch: ''
  });

  const FormTitles = ['Enter your rank', 'Please choose your category', 'Please select your gender', 'Category Rank if applicable', 'Are you physically disabled?', 'Enter your State', 'Please select preferred Branch'];

  const PageDisplay = () => {
    if (page === 0) {
      return <Rank formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Category formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Gender formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <CategoryRank formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <IsPWD formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <State formData={formData} setFormData={setFormData} />;
    } else {
      return <Branches formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="flex flex-col mx-auto mt-[128px] h-[400px] w-[500px]">
      <div className="flex mb-[50px] h-[5px] w-[500px] mx-auto">
        <div
          className="h-[80%] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-[5px] mt-[30px]"
          style={{
            width: page === 0 ? '16%' : page === 1 ? '32%' : page === 2 ? '48%' : page === 3 ? '64%' : page === 4 ? '80%' : page === 5 ? '90%' : '100%',
          }}
        />
      </div>
      <div className="mx-auto h-[400px] w-[400px] flex flex-col shadow-[0_0_15px_1px_rgba(0, 0, 0, 0.4)] rounded-[8px]">
        <div className="basis-auto flex text-[#000] mt-auto text-[20px]">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="basis-[60%]">{PageDisplay()}</div>
        <div className="basis-[20%] flex justify-between">
          <button
            className="h-[30px] w-[70px] text-center items-center bg-[#0098FF] rounded-[3px] p-[3px] justify-items-center text-[#fff] font-medium"
            disabled={page === 0}
            type="button"
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className="h-[30px] w-[70px] text-center items-center bg-[#0098FF] rounded-[3px] p-[3px] justify-items-center  text-[#fff] font-medium"
            type="button"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
        <h4 className="flex text-[14px]">
          Step
          <hr className="mr-1" />
          {page + 1}
          <hr className="mr-1" />
          of
          <hr className="mr-1" />
          {FormTitles.length}
        </h4>
      </div>
    </div>
  );
}

export default Formm;
