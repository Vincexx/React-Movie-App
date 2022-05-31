import React from "react";

const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-red-500 rounded-full";

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1`}></div>
        <div className={`${circleCommonClasses} mr-1`}></div>
        <div className={`${circleCommonClasses}`}></div>
      </div>
    </div>
  );
};

export default Loader;
