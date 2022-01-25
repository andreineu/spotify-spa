import Slider, { Range } from "rc-slider";
import React, { useState } from "react";

import { ReactComponent as VolumeUp } from "../../assets/volume-up.svg";
// import {ReactComponent as VolumeDown} from "../../assets/volume-down.svg"
const VolumeControls = () => {
  const [value, setValue] = useState(0);
  const handler = (number) => {
    setValue(number);
    console.log(number);
  };
  return (
    <div className="flex justify-end items-center w-1/4 relative mt-auto mb-6">
      <VolumeUp className="w-4" />
      <div className=" w-40 h-10">
        <input className="volume-slider" type="range" min="0" max="100" />
        {/* <Slider
          value={value}
          min={0}
          max={100}
          step={1}
          onChange={handler}
          className="h-2 rounded-lg "
          trackStyle={{ backgroundColor: "rgb(163,163,163)", height: 2 }}
          railStyle={{ backgroundColor: "rgb(64,64,64)", height: 2 }}
          handleStyle={{ backgroundColor: "white", height: 8, width: 8 }}
        /> */}
        {/* <Range
          // value={0}
          min={0}
          max={100}
          step={1}
          onChange={(value) => console.log(value)}
        /> */}
      </div>
    </div>
  );
};

export default VolumeControls;
