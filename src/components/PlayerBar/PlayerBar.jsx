import React from "react";
import Controls from "./Controls";
import Slider from "./Slider";

import { ReactComponent as HeartIcon } from "../../assets/heart.svg";
import VolumeControls from "./VolumeControls";

const PlayerBar = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 h-24 px-4 bg-zinc-900 flex items-center justify-between border-t border-neutral-600 ">
      <div className="w-1/4 flex items-center gap-4">
        <div>
          <img
            className="block w-14 h-14"
            src="https://www.designformusic.com/wp-content/uploads/2015/10/insurgency-digital-album-cover-design.jpg"
          />
        </div>
        <div>
          <p className="text-white mb-2 font-light text-sm">
            Come As You Are - Live
          </p>
          <p className="text-grey-light text-xs font-light">Crowder</p>
        </div>

        <HeartIcon className="w-4 h-4 fill-current block" />
      </div>
      <div className="w-1/2 flex flex-col items-center ">
        <Controls />
        <Slider />
      </div>
      <VolumeControls />
    </div>
  );
};

export default PlayerBar;
