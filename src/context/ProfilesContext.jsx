import { useState, createContext } from "react";
import { profileData } from "../data/profile";

// Create Profiles context
export const ProfilesContext = createContext();

// Create the Profiles context provider
export const ProfilesProvider = (props) => {
  const [profiles, setProfiles] = useState(profileData);
  const [searchProfile, setSearchProfile] = useState("");
  const [selectProfile, setSelectProfile] = useState("");

  // Search Profiles by project title
  const searchProfilesByTitle = profiles.filter((item) => {
    const result = item.title
      .toLowerCase()
      .includes(searchProfile.toLowerCase())
      ? item
      : searchProfile === ""
      ? item
      : "";
    return result;
  });

  // Select Profiles by project category
  const selectProfilesByCategory = profiles.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProfile);
  });

  return (
    <ProfilesContext.Provider
      value={{
        profiles,
        setProfiles,
        searchProfile,
        setSearchProfile,
        searchProfilesByTitle,
        selectProfile,
        setSelectProfile,
        selectProfilesByCategory,
      }}
    >
      {props.children}
    </ProfilesContext.Provider>
  );
};
