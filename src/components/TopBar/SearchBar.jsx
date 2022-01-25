import { useState } from "react";

import { ReactComponent as PersonIcon } from "../../assets/person.svg";

const SearchBar = () => {
  return (
    <div className="flex items-center sticky py-3 px-6 w-full bg-neutral-800">
      <div className="flex">
        <div className="flex items-center mr-4">
          <svg
            className="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block mr-2"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g fill="currentColor">
                <polygon points="7.05025253 9.29289322 6.34314575 10 12 15.6568542 13.4142136 14.2426407 9.17157288 10 13.4142136 5.75735931 12 4.34314575"></polygon>
              </g>
            </g>
          </svg>
          <svg
            className="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g fill="currentColor">
                <polygon points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"></polygon>
              </g>
            </g>
          </svg>
        </div>
        <div className="bg-white rounded-full px-2 flex items-center overflow-hidden">
          <svg
            className="w-3 h-3 fill-current text-black block mr-2"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="search" fill="#000000">
                <path
                  d="M11.1921711,12.6063847 C10.0235906,13.4815965 8.5723351,14 7,14 C3.13400675,14 0,10.8659932 0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,8.5723351 13.4815965,10.0235906 12.6063847,11.1921711 L14.0162265,12.6020129 C14.6819842,12.4223519 15.4217116,12.5932845 15.9484049,13.1199778 L18.7795171,15.95109 C19.5598243,16.7313971 19.5646685,17.9916807 18.7781746,18.7781746 C17.997126,19.5592232 16.736965,19.5653921 15.95109,18.7795171 L13.1199778,15.9484049 C12.5960188,15.4244459 12.4217025,14.6840739 12.6018353,14.0160489 L11.1921711,12.6063847 Z M7,12 C9.76142375,12 12,9.76142375 12,7 C12,4.23857625 9.76142375,2 7,2 C4.23857625,2 2,4.23857625 2,7 C2,9.76142375 4.23857625,12 7,12 Z"
                  id="Combined-Shape"
                ></path>
              </g>
            </g>
          </svg>
          <input
            type="text"
            className="py-2 text-sm text-black focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex justify-end flex-1">
        <div className="flex items-center text-white relative bg-stone-900 rounded-full p-1 hover:bg-stone-700">
          <span className="mr-4 bg-neutral-700 rounded-full h-7 w-7 flex justify-center items-center ">
            <PersonIcon className="h-5 w-5" />
          </span>

          <span className="font-semibold text-sm">joshralph93</span>

          {/* @click="showUserDropdown = !showUserDropdown" */}
          <div className="relative cursor-pointer" onClick={onDropdown}>
            <span className="absolute pin-t pin-r rounded-full w-2 h-2 mt-1 bg-blue"></span>
            <svg
              className="w-6 h-6 fill-current block ml-5"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="cheveron-down" fill="currentColor">
                  <polygon
                    id="Combined-Shape"
                    points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"
                  ></polygon>
                </g>
              </g>
            </svg>
          </div>

          {/* :className="{hidden: !showUserDropdown}" */}
          {dropDownVisible && (
            <div className="absolute right-0 top-full bg-stone-900 rounded-lg shadow-md overflow-hidden mt-3  ">
              {/* <!-- @todo - figure arrow --> */}
              {/* <!--<span className="border-l-5 border-r-5 border-b-5 border-solid border-b-grey-darker"></span>--> */}
              <ul>
                <li>
                  <a
                    href=""
                    className="px-6 py-3 block text-grey-light whitespace-no-wrap no-underline text-sm hover:bg-neutral-600"
                  >
                    Account
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="px-6 py-3 block text-grey-light whitespace-no-wrap no-underline text-sm hover:bg-neutral-600"
                  >
                    Settings
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="px-6 py-3 block text-grey-light whitespace-no-wrap no-underline text-sm hover:bg-neutral-600"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
