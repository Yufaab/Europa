import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YufaabContext from '../context/YufaabContext';

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
    <div className="mt-[80px]">
      <h3 className="ml-[20px] lg:ml-[40px] text-[22px] text-[#0098FF] mb-[30px]">
        Report Generated
      </h3>
      <div className="ml-[40px]">
        {report.map((reports) => (
          <h2 key={reports._id} className="pb-[7px]">
            {reports.institute}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Report;
