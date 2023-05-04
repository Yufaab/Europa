import BranchData from '../lib/branch.json';
import IndStates from '../lib/states.json';
import InstituteData from '../lib/institute.json';

export const Rank = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col mt-[20px]">
      <input
        className="flex flex-col h-[2.5rem] w-[500px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2  text-slate-700"
        type="text"
        placeholder="Rank"
        value={formData.rank}
        onChange={(e) => {
          setFormData({ ...formData, rank: e.target.value });
        }}
      />
    </div>
  );
};
export const Category = ({ formData, setFormData }) => {
  return (
    <div className="mt-[10px] text-slate-700">
      <input
        className="mb-[12px]"
        type="radio"
        name="selectCategory"
        value="OPEN"
        onChange={(e) => {
          setFormData({ ...formData, seatType: e.target.value });
        }}
      />
      OPEN
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="OBC-NCL"
        onChange={(e) => {
          setFormData({ ...formData, seatType: e.target.value });
        }}
      />
      OBC-NCL
      <br />
      <input
        className="mb-[12px]"
        type="radio"
        name="selectCategory"
        value="SC"
        onChange={(e) => {
          setFormData({ ...formData, seatType: e.target.value });
        }}
      />
      SC
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="ST"
        onChange={(e) => {
          setFormData({ ...formData, seatType: e.target.value });
        }}
      />
      ST
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="EWS"
        onChange={(e) => {
          setFormData({ ...formData, seatType: e.target.value });
        }}
      />
      EWS
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="OPEN (PwD)"
        onChange={(e) => {
          setFormData({ ...formData, seatType: e.target.value });
        }}
      />
      OPEN (PwD)
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="OBC-NCL (PwD)"
        onChange={(e) => {
          setFormData({ ...formData, category: e.target.value });
        }}
      />
      OBC-NCL (PwD)
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="SC (PwD)"
        onChange={(e) => {
          setFormData({ ...formData, seatType: e.target.value });
        }}
      />
      SC (PwD)
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="EWS (PwD)"
        onChange={(e) => {
          setFormData({ ...formData, seatType: e.target.value });
        }}
      />
      EWS (PwD)
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="ST (PwD)"
        onChange={(e) => {
          setFormData({ ...formData, seatType: e.target.value });
        }}
      />
      ST (PwD)
    </div>
  );
};
export const Gender = ({ formData, setFormData }) => {
  return (
    <div className="mt-[20px]">
      <input
        className="mb-[12px]"
        type="radio"
        name="selectGender"
        value="Gender-Neutral"
        onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }}
      />
      Gender-Neutral
      <br />
      <input
        type="radio"
        name="selectGender"
        value="Female-only (including Supernumerary)"
        onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }}
      />
      Female-only (including Supernumerary)
    </div>
  );
};
export const CategoryRank = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col mt-[20px]">
      <input
        className="flex flex-col h-[2.5rem] w-[500px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] rounded-[7px] outline outline-1 outline-[#0098FF] hover:outline-2  text-slate-700"
        type="text"
        placeholder="Category Rank"
        value={formData.categoryRank}
        onChange={(e) => {
          setFormData({ ...formData, categoryRank: e.target.value });
        }}
      />
    </div>
  );
};
export const IsPWD = ({ formData, setFormData }) => {
  return (
    <div className="mt-[20px]">
      <input
        className="mb-[12px]"
        type="radio"
        name="selectPWD"
        value="Yes"
        onChange={(e) => {
          setFormData({ ...formData, ispwd: e.target.value });
        }}
      />
      Yes
      <br />
      <input
        type="radio"
        name="selectPWD"
        value="No"
        onChange={(e) => {
          setFormData({ ...formData, ispwd: e.target.value });
        }}
      />
      No
    </div>
  );
};
export const State = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col mt-[20px] text-slate-700">
      <select
        className="w-auto overflow-hidden text-slate-700 text-[15px] p-[5px] rounded-md"
        onChange={(e) => {
          setFormData({ ...formData, state: e.target.value });
        }}
      >
        {IndStates.IndianStates.map((item) => (
          <option
            key={item}
            value={formData.item}
            className="w-[300px] max-w-[300px] text-ellipsis text-[14px] overflow-hidden"
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export const Branches = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col mt-[20px] text-slate-700">
      <select
        className="w-auto overflow-hidden text-slate-700 p-[5px] rounded-md"
        onChange={(e) => {
          setFormData({
            ...formData,
            academicProgramName: [
              ...formData.academicProgramName,
              e.target.value,
            ],
          });
        }}
      >
        {BranchData.branches2022.map((item) => (
          <option
            key={item}
            value={formData.item}
            className="w-[300px] max-w-[300px] text-ellipsis text-[14px] overflow-hidden"
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export const College = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col mt-[20px] text-slate-700">
      <select
        className="w-auto overflow-hidden text-slate-700 p-[5px] rounded-md"
        onChange={(e) => {
          setFormData({
            ...formData,
            institute: [...formData.institute, e.target.value],
          });
        }}
      >
        {InstituteData.institute2022.map((item) => (
          <option
            key={item}
            value={formData.item}
            className="w-[300px] max-w-[300px] text-ellipsis text-[14px] overflow-hidden"
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export const PreviewOrder = ({ formData }) => {
  return (
    <div className="flex flex-col mt-[20px] text-slate-600">
      <h3
        className={`${
          formData.rank
            ? 'pb-2 font-semibold text-[#4BB543]'
            : 'pb-2 text-[#ff0000]'
        }`}
      >
        {`Rank: ${formData.rank ? formData.rank : 'No value selected'}`}
      </h3>
      <h3
        className={`${
          formData.seatType
            ? 'pb-2 font-semibold text-[#4BB543]'
            : 'pb-2 text-[#ff0000]'
        }`}
      >
        {`Category: ${
          formData.seatType ? formData.seatType : 'No value selected'
        }`}
      </h3>
      <h3
        className={`${
          formData.gender
            ? 'pb-2 font-semibold  text-[#4BB543]'
            : 'pb-2 text-[#ff0000]'
        }`}
      >
        {`Gender: ${formData.gender ? formData.gender : 'No value selected'}`}
      </h3>
      <h3
        className={`${
          formData.categoryRank
            ? 'pb-2 font-semibold text-[#4BB543]'
            : 'pb-2 text-[#ff0000]'
        }`}
      >
        {`Category Rank: ${
          formData.categoryRank ? formData.categoryRank : 'No value selected'
        }`}
      </h3>
      <h3
        className={`${
          formData.state
            ? 'pb-2 font-semibold text-[#4BB543]'
            : 'pb-2 text-[#ff0000]'
        }`}
      >
        {`State: ${formData.state ? formData.state : 'No value selected'}`}
      </h3>
      <h3
        className={`${
          formData.academicProgramName
            ? 'pb-2 font-semibold text-[#4BB543]'
            : 'pb-2 text-[#ff0000]'
        }`}
      >
        {`Branch Preferred: ${
          formData.academicProgramName
            ? formData.academicProgramName
            : 'No value selected'
        }`}
      </h3>
      <h3
        className={`${
          formData.institute
            ? 'pb-2 font-semibold text-[#4BB543]'
            : 'pb-2 text-[#ff0000]'
        }`}
      >
        {`College Preferred: ${
          formData.institute ? formData.institute : 'No value selected'
        }`}
      </h3>
    </div>
  );
};
export default {
  Rank,
  Category,
  CategoryRank,
  Gender,
  IsPWD,
  State,
  Branches,
  College,
  PreviewOrder,
};
