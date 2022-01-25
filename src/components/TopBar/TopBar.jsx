import Nav from "./Nav";
import Profile from "./Profile";

import Search from "./Search";

const TopBar = () => {
  return (
    <div className="flex items-center sticky py-3 px-6 w-full bg-neutral-800 bg-rose-900/60">
      <div className="flex">
        <Nav />
        <Search />
      </div>
      <div className="flex justify-end flex-1">
        <Profile />
      </div>
    </div>
  );
};

export default TopBar;
