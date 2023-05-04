import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Category,
  CategoryRank,
  Gender,
  Rank,
  State,
  Branches,
  PreviewOrder,
  College,
} from '../components/DetailsComponents';
import userStore from '../store/userStore';
import orderStore from '../store/orderStore';
import Payment from '../components/Payments';

function Details() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const userToken = userStore((state) => state.userToken);
  const setData = orderStore((state) => state.setData);
  const data = orderStore((state) => state.data);

  console.log(data);

  const [formData, setFormData] = useState({
    rank: '',
    seatType: '',
    categoryRank: '',
    gender: '',
    state: '',
    academicProgramName: [],
    institute: [],
  });

  useEffect(() => {
    if (data) {
      setPage(7);
      setFormData(data);
    }
  }, [data]);

  const FormTitles = [
    'Enter your rank',
    'Choose your category',
    'Select your gender',
    'Category Rank if applicable',
    'Select your State',
    'Select your preferred Branch',
    'Select your preferred College',
    'Preview Your Details Carefully',
  ];

  const SwitchPage = () => {
    switch (page) {
      case 0:
        return <Rank formData={formData} setFormData={setFormData} />;
      case 1:
        return <Category formData={formData} setFormData={setFormData} />;
      case 2:
        return <Gender formData={formData} setFormData={setFormData} />;
      case 3:
        return <CategoryRank formData={formData} setFormData={setFormData} />;
      case 4:
        return <State formData={formData} setFormData={setFormData} />;
      case 5:
        return <Branches formData={formData} setFormData={setFormData} />;
      case 6:
        return <College formData={formData} setFormData={setFormData} />;
      default:
        return <PreviewOrder formData={formData} />;
    }
  };

  const pageWidth = {
    0: '12.50%',
    1: '25.00%',
    2: '37.50%',
    3: '50.00%',
    4: '62.50%',
    5: '75.00%',
    6: '87.50%',
  };
  return (
    <div className="flex flex-col mx-auto mt-[200px] h-auto w-[600px] shadow-[6px_2px_16px_0px_rgba(136,165,191,0.48),rgba(255,255,255,0.8)_-6px_-2px_16px_0px] rounded-[12px]">
      <h3 className="mx-auto text-[48px] text-[#0098FF] font-semibold mt-[5px]">
        Yufaab
      </h3>
      <div className="flex mb-[50px] h-[5px] w-[500px] mx-auto">
        <div
          className="h-[80%] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-[5px] mt-[30px]"
          style={{
            width: pageWidth[page] || '100%',
          }}
        />
      </div>
      <div className="mx-auto h-[400px] w-[500px] flex flex-col shadow-[0_0_15px_1px_rgba(0, 0, 0, 0.4)] rounded-[8px]">
        <div className="basis-auto flex text-[#000] mt-auto text-[20px]">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="basis-[70%]">{SwitchPage()}</div>
        <div className="basis-[10%] flex justify-between">
          <button
            className={`h-[40px] w-[70px] text-center items-center hover:bg-sky-700 bg-[#0098FF] rounded-[100px] p-[3px] justify-items-center text-[#fff] font-medium ${
              page === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={page === 0}
            type="button"
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <div>
            {page === FormTitles.length - 1 ? (
              <div>
                {!userToken ? (
                  <button
                    className="h-[40px] w-[200px] text-center items-center bg-[#0098FF] hover:bg-sky-700 rounded-[100px] p-[5px] text-[#fff] font-medium pt-1"
                    type="button"
                    onClick={() => {
                      if (page === FormTitles.length - 1) {
                        setData(formData);
                        if (!userToken) {
                          navigate('/login');
                        }
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                    }}
                  >
                    Payment
                  </button>
                ) : (
                  <Payment />
                )}
              </div>
            ) : (
              <button
                className="h-[40px] w-[70px] text-center items-center bg-[#0098FF] hover:bg-sky-700 rounded-[100px] p-[3px] justify-items-center  text-[#fff] font-medium"
                type="button"
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <h4 className="flex text-[14px] pb-[20px] mx-auto text-slate-900 mt-[-5px]">
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
