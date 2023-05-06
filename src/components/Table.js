import React from 'react';
import './Table.css';

const Table = ({ reports, index }) => {
  return (
    <tbody>
      <tr className="trClass">
        <td className="tdClass">{index + 1}</td>
        <td className="tdClass">{reports.quota}</td>
        <td className="tdClass">{reports.academicProgramName}</td>
        <td className="tdClass">{reports.institute}</td>
        <td className="tdClass  min-w-[70px]">{reports.openingRank}</td>
        <td className="tdClass min-w-[70px]">{reports.closingRank}</td>
      </tr>
    </tbody>
  );
};

export default Table;
