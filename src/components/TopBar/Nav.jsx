import React from "react";
import { ReactComponent as ArrowLeft } from "../../assets/chevron-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/chevron-right.svg";
const Nav = () => {
  return (
    <div className="flex items-center mr-4">
      <ArrowLeft className="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block mr-2" />
      <ArrowRight className="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block" />
    </div>
  );
};

export default Nav;
