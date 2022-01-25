import React from "react";

const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 top-full bg-neutral-700 rounded-lg shadow-md overflow-hidden mt-3  ">
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
  );
};

export default ProfileDropdown;
