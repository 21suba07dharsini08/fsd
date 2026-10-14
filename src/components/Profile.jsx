import ProfileImage from "./ProfileImage.jsx";
import ProfileHeader from "./ProfileHeader.jsx";
import ProfileDetails from "./ProfileDetails.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";

import profileData from "../data/ProfileData.js";
import skillsData from "../data/Skillsdata.js";

function Profile() {
  return (
    <main className="profile-card">
      <div className="profile-top">
        <ProfileImage image={profileData.image} name={profileData.name} />
        <ProfileHeader name={profileData.name} role={profileData.role} />
        <ProfileDetails email={profileData.email} location={profileData.location} />
      </div>

      <About bio={profileData.bio} about={profileData.about} />
      <Skills skills={skillsData} />
      <Contact email={profileData.email} />

      <footer className="profile-footer">
        <p>&copy; {new Date().getFullYear()} {profileData.name}</p>
      </footer>
    </main>
  );
}

export default Profile;
