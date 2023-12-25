import ProfilesGrid from "../components/profiles/ProfilesGrid";
import { ProfilesProvider } from "../context/ProfilesContext";

const Profiles = () => {
  return (
    <ProfilesProvider>
      <div className="container mx-auto">
        <ProfilesGrid />
      </div>
    </ProfilesProvider>
  );
};

export default Profiles;
