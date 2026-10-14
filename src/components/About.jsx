function About({ bio, about }) {
  return (
    <section className="section">
      <h2>About Me</h2>
      <p>{bio}</p>
      <p>{about}</p>
    </section>
  );
}

export default About;
