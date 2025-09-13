import { Sidebar } from './Components/Sidebar';
import { useState } from "react";
import initialProfiles from "./data";

const App = () => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const clearProfiles = () => {
    setProfiles([]);
  };
  return (
    <>
      <Sidebar   clearProfiles={clearProfiles} profiles={profiles}  />
      <div className="main-chat"></div>
    </>
  );
};
export default App;
