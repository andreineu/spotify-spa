import React from "react";
import TopBar from "./TopBar/TopBar";

const Content = () => {
  return (
    <div className="fixed left-60 inset-y-0 right-0 bg-neutral-900 pb-24 ">
      <TopBar />
      <ul className="cursor-pointer flex -mx-4 mb-5 mt-32">
        <li className="group text-white uppercase text-xs tracking-wide mx-4 relative ">
          Overview
        </li>
        <li className="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 relative hover:border-b-green-500 border-b-2 border-b-white/0">
          Podcasts
        </li>
        <li className="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 relative hover:border-b-green-500 border-b-2 border-b-white/0">
          Charts
        </li>
        <li className="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 relative hover:border-b-green-500 border-b-2 border-b-white/0">
          Genres &amp; Moods
        </li>
        <li className="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 relative hover:border-b-green-500 border-b-2 border-b-white/0">
          New Releases
        </li>
        <li className="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 relative hover:border-b-green-500 border-b-2 border-b-white/0">
          Discover
        </li>
        <li className="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 relative hover:border-b-green-500 border-b-2 border-b-white/0">
          Concerts
        </li>
      </ul>
      {/* <div className="p-6">
        

        <div className="mb-20">
          <div className="border-b border-grey-darker py-3 flex items-center mb-4">
            <div className="flex-1">
              <h4 className="text-white">Your perfect evening...</h4>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block mr-2"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
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
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g fill="currentColor">
                    <polygon points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"></polygon>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex -mx-2">
            <div className="w-1/4 mx-2">
              <div
                className="w-full bg-grey-dark mb-2 bg-cover bg-center h-32 p-32"
                style=" background-image: url('https://i.scdn.co/image/4ddf4734de3d60fda560fbab66dfd9f8cc9f36a7')"
              ></div>
              <p className="text-white text-sm mb-2">Chilled Sexy R&amp;B</p>
              <p className="text-grey text-xs mb-2">
                Dim the lights and chill with this selection of classic slow
                jamz with a few modern jamz thrown in...
              </p>
              <p className="text-grey-light uppercase text-xs tracking-wide">
                150,293 Followers
              </p>
            </div>
            <div className="w-1/4 mx-2">
              <div
                className="w-full bg-grey-dark mb-2 bg-cover bg-center py-32 h-32"
                style="background-image: url('https://i.scdn.co/image/3b7e8199da16b8d83cd2323a3abd8b700248aea8')"
              ></div>
              <p className="text-white text-sm mb-2">
                Songs to Sing in the Shower
              </p>
              <p className="text-grey text-xs mb-2">
                Dim the lights and chill with this selection of classic slow
                jamz with a few modern jamz thrown in...
              </p>
              <p className="text-grey-light uppercase text-xs tracking-wide">
                150,293 Followers
              </p>
            </div>
            <div className="w-1/4 mx-2">
              <div
                className="w-full bg-grey-dark mb-2 bg-cover bg-center py-32 h-32"
                style="background-image: url('https://contentpl-a.akamaihd.net/images/playlists/image/medium/f45cc73d2261a37dd2da0a5f1d783f0b.jpg')"
              ></div>
              <p className="text-white text-sm mb-2">Discover Weekly</p>
              <p className="text-grey text-xs mb-2">
                Dim the lights and chill with this selection of classic slow
                jamz with a few modern jamz thrown in...
              </p>
              <p className="text-grey-light uppercase text-xs tracking-wide">
                150,293 Followers
              </p>
            </div>
            <div className="w-1/4 mx-2">
              <div
                className="w-full bg-grey-dark mb-2 bg-cover bg-center py-32 h-32"
                style="background-image: url('https://e.snmc.io/lk/f/l/b172fdaabff07f09de61b2ef7ce5a925/1228762.jpg')"
              ></div>
              <p className="text-white text-sm mb-2">Live Covers</p>
              <p className="text-grey text-xs mb-2">
                Dim the lights and chill with this selection of classic slow
                jamz with a few modern jamz thrown in...
              </p>
              <p className="text-grey-light uppercase text-xs tracking-wide">
                150,293 Followers
              </p>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="border-b border-grey-darker py-3 flex items-center mb-4">
            <div className="flex-1">
              <h4 className="text-white">Your perfect evening...</h4>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block mr-2"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
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
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g fill="currentColor">
                    <polygon points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"></polygon>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex -mx-2">
            <div className="w-1/4 mx-2">
              <div
                className="w-full bg-grey-dark mb-2"
                style="height: 270px;"
              ></div>
              <p className="text-white text-sm mb-2">Slow Jamz</p>
              <p className="text-grey text-xs mb-2">
                Dim the lights and chill with this selection of classic slow
                jamz with a few modern jamz thrown in...
              </p>
              <p className="text-grey-light uppercase text-xs tracking-wide">
                150,293 Followers
              </p>
            </div>
            <div className="w-1/4 mx-2">
              <div
                className="w-full bg-grey-dark mb-2"
                style="height: 270px;"
              ></div>
              <p className="text-white text-sm mb-2">Slow Jamz</p>
              <p className="text-grey text-xs mb-2">
                Dim the lights and chill with this selection of classic slow
                jamz with a few modern jamz thrown in...
              </p>
              <p className="text-grey-light uppercase text-xs tracking-wide">
                150,293 Followers
              </p>
            </div>
            <div className="w-1/4 mx-2">
              <div
                className="w-full bg-grey-dark mb-2"
                style="height: 270px;"
              ></div>
              <p className="text-white text-sm mb-2">Slow Jamz</p>
              <p className="text-grey text-xs mb-2">
                Dim the lights and chill with this selection of classic slow
                jamz with a few modern jamz thrown in...
              </p>
              <p className="text-grey-light uppercase text-xs tracking-wide">
                150,293 Followers
              </p>
            </div>
            <div className="w-1/4 mx-2">
              <div
                className="w-full bg-grey-dark mb-2"
                style="height: 270px;"
              ></div>
              <p className="text-white text-sm mb-2">Slow Jamz</p>
              <p className="text-grey text-xs mb-2">
                Dim the lights and chill with this selection of classic slow
                jamz with a few modern jamz thrown in...
              </p>
              <p className="text-grey-light uppercase text-xs tracking-wide">
                150,293 Followers
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <router-view/> */}
      {/* <!-- END CONTENT --> */}
    </div>
  );
};

export default Content;
