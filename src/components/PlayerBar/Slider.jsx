import React from "react";

const Slider = () => {
  return (
    <div className="flex w-full items-center mt-2">
      <span className="text-grey-light text-xs font-light">3:26</span>
      <div className="flex-1 h-1 w-full bg-neutral-700 rounded mx-4">
        <div className="bg-neutral-400 h-full rounded w-1/4"></div>
      </div>
      <span className="text-grey-light text-xs font-light">4:40</span>
    </div>
  );
};

export default Slider;
