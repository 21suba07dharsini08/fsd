function ProfileHeader({ name, role }) {
  return (
    <header className="profile-header">
      <h1>{name}</h1>
      <p>{role}</p>
    </header>
  );
}

export default ProfileHeader;
