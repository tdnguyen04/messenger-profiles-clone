import { useState } from "react";
import initialProfiles from "./data";

const App = () => {
  const [profiles, setProfiles] = useState(initialProfiles)
  const clearProfiles = () => {
    setProfiles([])
  }
  return (
    <>
      <div className="sidebar">
        <header>
          <h3>Chats</h3>
          <div className="icons"></div>
        </header>
        <input type="text" className="search-bar" placeholder="Search Messenger" />
        <div className="button-container">
          <button className="btn" onClick={clearProfiles}>Clear contacts</button>
        </div>
        {profiles.map((profile) => {
          return (
            <div className="profile">
              <img src={profile.image} alt={profile.name} className="avatar" />
              <h5>{profile.name}</h5>
            </div>
          );
        })}
      </div>
      <div className="main-chat">
      </div>
    </>
  );
};
export default App;
