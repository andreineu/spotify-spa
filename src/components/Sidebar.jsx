import React from "react";

import { Link, NavLink } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../assets/home.svg";

import { ReactComponent as PlusIcon } from "../assets/plus.svg";
import { ReactComponent as HeartIcon } from "../assets/heart.svg";

const Sidebar = () => {
  return (
    <div className="bg-black text-neutral-400 p-2 flex flex-col fixed w-60 left-0 inset-y-0 pb-24">
      <div className="flex-1 ">
        <div className="flex flex-col">
          <NavLink
            to="/"
            className="flex items-center rounded-lg px-4 py-2 hover:text-white"
          >
            <span className="mr-2">
              <HomeIcon />
            </span>
            Home
          </NavLink>
          <NavLink
            to="/search"
            className="block rounded-lg px-4 py-2 hover:text-white"
          >
            Search
          </NavLink>

          <NavLink
            to="/library"
            className="block rounded-lg px-4 py-2 hover:text-white"
          >
            Your Library
          </NavLink>
        </div>
        <div className="list-reset mt-4">
          <Link
            to="/new_playlist"
            className="rounded-lg px-4 py-2 hover:text-white flex items-center"
          >
            <span className="h-7 w-7 rounded-md bg-neutral-500 flex items-center justify-center mr-2">
              <PlusIcon className="text-black h-5 w-5" strokeWidth={2} />
            </span>
            Create Playlist
          </Link>

          <Link
            to="/liked"
            className="rounded-lg px-4 py-2 hover:text-white flex items-center"
          >
            <span className="h-7 w-7 rounded-md bg-gradient-to-br from-indigo-800 to-indigo-300 flex items-center justify-center mr-2">
              <HeartIcon className="w-5" />
            </span>
            Liked songs
          </Link>
        </div>
        <hr className="border-neutral-700 mx-4 my-2" />
      </div>
      <div className="overflow-y-scroll px-4 py-2">
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>

        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
        <div className="text-sm hover:text-white mb-3">New Playlist</div>
      </div>
    </div>
  );
};

export default Sidebar;
