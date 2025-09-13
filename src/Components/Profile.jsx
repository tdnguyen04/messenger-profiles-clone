import React from "react";
export function Profile({ profile }) {
  return (
    <div className="profile">
      <div className="profile-info">
        <img src={profile.image} alt={profile.name} className="avatar" />
        <h5>{profile.name}</h5>
      </div>
      <div className="profile-options">
        <span className="ellipsis-icon"><i class="fa-solid fa-ellipsis"></i></span>
      </div>
    </div>
  );
}
