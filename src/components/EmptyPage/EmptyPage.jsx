import React from "react";

const divStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const pStyle = {
  fontSize: "40px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const EmptyPage = () => {
  return (
    <div className="empty" style={divStyle}>
      <p style={pStyle}>Choice a Chat</p>
    </div>
  );
};

export default EmptyPage;
