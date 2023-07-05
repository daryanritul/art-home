import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container" />
      <p className="spinner-text">Loading . . .</p>
    </div>
  );
};

export default Spinner;
