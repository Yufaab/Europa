const PreviewOrder = ({ formData }) => {
  return (
    <div className="flex flex-col mt-[20px]">
      <h3>{formData.rank}</h3>
      <h3>{formData.category}</h3>
      <h3>{formData.categoryRank}</h3>
      <h3>{formData.gender}</h3>
      <h3>{formData.ispwd}</h3>
      <h3>{formData.state}</h3>
      <h3>{formData.branch}</h3>
    </div>
  );
};

export default PreviewOrder;
