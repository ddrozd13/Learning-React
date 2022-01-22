import React from "react";

const Loader = () => {
  return (
    <div style={{display: 'flex', margin: '.5rem', justifyContent: 'center'}}>
      <div className="lds-dual-ring" />
    </div>
  );
};

export default Loader;
