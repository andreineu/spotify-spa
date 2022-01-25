import { useState, useEffect } from "react";
import "./App.css";
import Content from "./components/Content";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      // token = hash.
    }
  }, []);
  const CLIENT_ID = "";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <>
      {/* <Routes> */}
      <div className="text-gray-300 flex bg-black ">
        <Sidebar />
        <Content />
        <PlayerBar />
      </div>
      {/* </Routes> */}
    </>
  );
}

export default App;
