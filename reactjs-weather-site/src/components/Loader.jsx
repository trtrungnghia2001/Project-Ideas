import React from "react";

const Loader = () => {
  return (
    <div className="z-40 bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
