
function Contact() {
  return (
    <section className="contact" id="contact">

      {/* Decorative bubbles */}

      <div className="contact-bubble contact-bubble-one"></div>
      <div className="contact-bubble contact-bubble-two"></div>
      <div className="contact-bubble contact-bubble-three"></div>


      <div className="contact-content">

        <span className="section-number">
          06 / START SOMETHING
        </span>

        <h2>
          Have an idea?
          <span>Let's give it a place to exist.</span>
        </h2>

        <p>
          Tell us what you're imagining.
          <br />
          We'll take it from there.
        </p>

       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=niva.webstudio@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button"
>
  <span>Start a Project</span>
  <span className="contact-button-arrow">↗</span>
</a>

<div className="project-bubbles">
  <span className="project-bubble bubble-1"></span>
  <span className="project-bubble bubble-2"></span>
  <span className="project-bubble bubble-3"></span>
  <span className="project-bubble bubble-4"></span>
  <span className="project-bubble bubble-5"></span>
  <span className="project-bubble bubble-6"></span>
  <span className="project-bubble bubble-7"></span>
  <span className="project-bubble bubble-8"></span>
</div>

      </div>


      <div className="contact-orbit">

        <span>IDEA</span>
        <span className="contact-orbit-dot"></span>
        <span>NIVA</span>

      </div>


      <div className="contact-bottom">

        <span>NIVA WEB STUDIO</span>

        <span>
          NEW IDEAS, VISUALIZED & ALIVE
        </span>

      </div>

    </section>
  );
}

export default Contact;
