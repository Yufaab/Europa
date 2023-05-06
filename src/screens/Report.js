import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YufaabContext from '../context/YufaabContext';
import Table from '../components/Table';

const Report = () => {
  const { yufaabInstance } = useContext(YufaabContext);
  const [report, setReport] = useState([]);

  const { orderid } = useParams();
  useEffect(() => {
    const getReport = async () => {
      const res = await yufaabInstance.getReport(orderid);
      setReport(res.data.data.collegeData);
      console.log(res);
    };
    getReport();
  }, []);
  return (
    <div className="mx-auto flex flex-col mt-[80px]">
      <h3 className="ml-[20px] lg:ml-[40px] text-[22px] text-[#0098FF] mb-[30px]">
        Report Generated
      </h3>
      <thead className="mx-auto">
        <th className="pb-[20px] ">Sr No.</th>
        <th className="pb-[20px]">Quota</th>
        <th className="pb-[20px]">Gender</th>
        <th className="pb-[20px]">Seat Type</th>
        <th className="pb-[20px]">Academic Programe</th>
        <th className="pb-[20px]">Institute</th>
        <th className="pb-[20px]">Opening Rank</th>
        <th className="pb-[20px]">Closing Rank</th>
      </thead>
      <div>
        {report.map((reports) => (
          <Table reports={reports} />
        ))}
      </div>
    </div>
  );
};

export default Report;
