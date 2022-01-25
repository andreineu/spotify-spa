import { useState } from "react";
import { ReactComponent as PersonIcon } from "../../assets/person.svg";
import { ReactComponent as ChevronDown } from "../../assets/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../../assets/chevron-up.svg";

import ProfileDropdown from "./ProfileDropdown";

const Profile = () => {
  const [dropDownVisible, setDropdownVisible] = useState(false);
  const onDropdown = () => {
    console.log("click");
    setDropdownVisible((prev) => !prev);
  };
  return (
    <div
      className={`text-white relative rounded-full ${
        dropDownVisible ? "bg-neutral-800" : "bg-neutral-900"
      }`}
    >
      <div
        className="hover:bg-stone-800 flex rounded-full p-1 items-center cursor-pointer"
        onClick={onDropdown}
      >
        <span className="mr-4 bg-neutral-700 rounded-full h-7 w-7 flex justify-center items-center ">
          <PersonIcon className="h-5 w-5" />
        </span>

        <span className="font-semibold text-sm">joshralph93</span>

        <div className="relative cursor-pointer">
          {!dropDownVisible && (
            <ChevronDown className="w-6 h-6 fill-current block ml-5" />
          )}
          {dropDownVisible && (
            <ChevronUp className="w-6 h-6 fill-current block ml-5" />
          )}
        </div>
      </div>

      {dropDownVisible && <ProfileDropdown />}
    </div>
  );
};

export default Profile;
