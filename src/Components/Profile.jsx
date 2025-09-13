import React from "react";
export function Profile({ profile }) {
  return (
    <div className="profile">
      <img src={profile.image} alt={profile.name} className="avatar" />
      <h5>{profile.name}</h5>
    </div>
  );
}
