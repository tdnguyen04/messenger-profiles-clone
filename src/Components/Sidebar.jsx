import { Profile } from './Profile';
import React from "react";
export function Sidebar({ clearProfiles, profiles }) {
  return (
    <div className="sidebar">
      <header>
        <h3>Chats</h3>
        <div className="icons">
          <div className="icon">
            <div className="inner-circle">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
          </div>
        </div>
      </header>
      <input
        type="text"
        className="search-bar"
        placeholder="Search Messenger"
      />
      <div className="button-container">
        <button className="btn" onClick={clearProfiles}>
          Clear contacts
        </button>
      </div>
      {profiles.map((profile) => {
        return (
          <Profile profile={profile} />
        );
      })}
    </div>
  );
}
