import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
