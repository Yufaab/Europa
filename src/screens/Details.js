import React, { useState } from 'react';
import { Category, CategoryRank, Gender, Rank, IsPWD, State, Branches } from '../components/DetailsComponents';

function Details() {
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

  const SwitchPage = () => {
    switch (page) {
      case 0: return <Rank formData={formData} setFormData={setFormData} />;
      case 1: return <Category formData={formData} setFormData={setFormData} />;
      case 2: return <Gender formData={formData} setFormData={setFormData} />;
      case 3: return <CategoryRank formData={formData} setFormData={setFormData} />;
      case 4: return <IsPWD formData={formData} setFormData={setFormData} />;
      case 5: return <State formData={formData} setFormData={setFormData} />;
      default: return <Branches formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="flex flex-col mx-auto mt-[168px] h-[400px] w-[500px] shadow-[6px_2px_16px_0px_rgba(136,165,191,0.48),rgba(255,255,255,0.8)_-6px_-2px_16px_0px] rounded-[12px]">
      <h3 className="mx-auto text-[48px] text-[#0098FF] font-semibold mt-[15px]">
        Yufaab
      </h3>
      <div className="flex mb-[50px] h-[5px] w-[500px] mx-auto">
        <div
          className="h-[80%] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-[5px] mt-[30px]"
          style={{
            width: page === 0 ? '14.28%' : page === 1 ? '28.56%' : page === 2 ? '42.84%' : page === 3 ? '57.12%' : page === 4 ? '71.40%' : page === 5 ? '85.68%' : '100%',
          }}
        />
      </div>
      <div className="mx-auto h-[400px] w-[400px] flex flex-col shadow-[0_0_15px_1px_rgba(0, 0, 0, 0.4)] rounded-[8px]">
        <div className="basis-auto flex text-[#000] mt-auto text-[20px]">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="basis-[70%]">{SwitchPage()}</div>
        <div className="basis-[10%] flex justify-between">
          <button
            className="h-[30px] w-[70px] text-center items-center hover:bg-sky-700 bg-[#0098FF] rounded-[3px] p-[3px] justify-items-center text-[#fff] font-medium"
            disabled={page === 0}
            type="button"
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className="h-[30px] w-[70px] text-center items-center bg-[#0098FF] hover:bg-sky-700 rounded-[3px] p-[3px] justify-items-center  text-[#fff] font-medium"
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
        <h4 className="flex text-[14px] mb-[20px] mx-auto text-slate-900">
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

export default Details;
