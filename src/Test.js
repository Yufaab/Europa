import React from 'react';
import customData from './components/branch.json';

const Test = () => {
  console.log(customData.branches2022);
  return (
    <div className="flex flex-col mt-[200px] ml-[200px] mr-[250px]">
      <select>
        {customData.branches2022.map((item) => (
          <option value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Test;
