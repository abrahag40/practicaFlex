import React from "react";

const topBar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: '60px',
        backgroundColor: "yellow",
        justifyContent: "space-around",
      }}
    >
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
      <div>item4</div>
    </div>
  );
};

export default topBar;
