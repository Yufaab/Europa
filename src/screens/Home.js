import React, { useState } from 'react';

function Home() {
  const myCars = {
    ford: 'red',
    mercedes: 'pink',
  };

  const [col, setCol] = useState(myCars);
  const onHandle = () => {
    setCol({
      ...col,
      ford: 'green',
    });
  };
  const onHandle2 = () => {
    setCol({
      ...col,
      mercedes: 'yellow',
    });
  };
  return (
    <div>
      <button type="button" onClick={onHandle}>
        Ford
        <hr />
        {col.ford}
      </button>
      <br />
      <br />
      <br />
      <button type="button" onClick={onHandle2}>
        mercedes
        <br />
        {col.mercedes}
      </button>
    </div>
  );
}

export default Home;
