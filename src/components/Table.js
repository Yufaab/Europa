import React from 'react';
import './Table.css';

const Table = ({ reports }) => {
  return (
    <div className="input-container">
      <table className="tableClass">
        <tbody>
          <tr className="trClass">
            <td className="tdClass">id</td>
            <td className="tdClass">{reports.seatType}</td>
            <td className="tdClass">{reports.gender}</td>
            <td className="tdClass">{reports.quota}</td>
            <td className="tdClass">{reports.academicProgramName}</td>
            <td className="tdClass">{reports.institute}</td>
            <td className="tdClass  min-w-[70px]">{reports.openingRank}</td>
            <td className="tdClass min-w-[70px]">{reports.closingRank}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
