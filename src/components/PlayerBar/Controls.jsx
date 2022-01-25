import React from "react";

import { ReactComponent as ShuffleIcon } from "../../assets/shuffle.svg";
import { ReactComponent as PrevIcon } from "../../assets/prev.svg";
import { ReactComponent as PlayIcon } from "../../assets/play.svg";
import { ReactComponent as NextIcon } from "../../assets/next.svg";
import { ReactComponent as RepeatIcon } from "../../assets/repeat.svg";

const Controls = () => {
  return (
    <div className="w-1/3 flex justify-around items-center text-grey">
      {/* <!-- @todo - find some better icons :)  */}

      <ShuffleIcon className="w-5 h-5 fill-current hover:text-grey-lightest block" />
      <PrevIcon className="w-5 h-5 fill-current hover:text-grey-lightest block" />
      <span className="block border border-solid border-grey-lightest hover:text-grey-lightest rounded-full p-2">
        <PlayIcon className="w-5 h-5 fill-current block" />
      </span>
      <NextIcon className="w-5 h-5 fill-current hover:text-grey-lightest block" />
      <RepeatIcon className="w-5 h-5 fill-current hover:text-grey-lightest block" />
    </div>
  );
};

export default Controls;
