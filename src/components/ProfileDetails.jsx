function ProfileDetails({ email, location }) {
  return (
    <div className="profile-details">
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
    </div>
  );
}

export default ProfileDetails;
