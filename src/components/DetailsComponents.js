import customData from './branch.json';

export const Rank = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col mt-[20px]">
      <input
        className="flex flex-col h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-[#0098FF] text-[#33475b]"
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
    <div className="mt-[20px]">
      <input
        className="mb-[12px]"
        type="radio"
        name="selectCategory"
        value="General"
        onChange={(e) => {
          setFormData({ ...formData, category: e.target.value });
        }}
      />
      General
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="OBC"
        onChange={(e) => {
          setFormData({ ...formData, category: e.target.value });
        }}
      />
      OBC
      <br />
      <input
        className="mb-[12px]"
        type="radio"
        name="selectCategory"
        value="SC"
        onChange={(e) => {
          setFormData({ ...formData, category: e.target.value });
        }}
      />
      SC
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="ST"
        onChange={(e) => {
          setFormData({ ...formData, category: e.target.value });
        }}
      />
      ST
      <br />
      <input
        type="radio"
        name="selectCategory"
        value="EWS"
        onChange={(e) => {
          setFormData({ ...formData, category: e.target.value });
        }}
      />
      EWS
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
        value="Male"
        onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }}
      />
      Male
      <br />
      <input
        type="radio"
        name="selectGender"
        value="Female"
        onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }}
      />
      Female
    </div>
  );
};
export const CategoryRank = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col mt-[20px]">
      <input
        className="flex flex-col h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-[#0098FF] text-[#33475b]"
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
    <div className="flex flex-col mt-[20px]">
      <input
        className="flex flex-col h-[2.5rem] w-[400px] items-center py-[10px] px-[9px] mb-[15px] bg-[#f5f8fa] border-t-[1px] rounded-[7px] outline-[#0098FF] text-[#33475b]"
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) => {
          setFormData({ ...formData, state: e.target.value });
        }}
      />
    </div>
  );
};
export const Branches = () => {
  return (
    <div className="flex flex-col mt-[20px]">
      <select>
        {customData.branches2022.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default { Rank, Category, CategoryRank, Gender, IsPWD, State };
