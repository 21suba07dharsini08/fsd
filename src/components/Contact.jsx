function Contact({ email }) {
  return (
    <section className="section">
      <h2>Contact Me</h2>
      <p>Feel free to contact me for projects and opportunities.</p>
      <a className="contact-button" href={`mailto:${email}`}>
        Send Email
      </a>
    </section>
  );
}

export default Contact;
