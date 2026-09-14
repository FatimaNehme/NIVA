
function Idea() {
  return (
    <section className="idea" id="about">
      <div className="idea-bg-bubbles">
  <span className="idea-bg-bubble bubble-a"></span>
  <span className="idea-bg-bubble bubble-b"></span>
  <span className="idea-bg-bubble bubble-c"></span>
  <span className="idea-bg-bubble bubble-d"></span>
  <span className="idea-bg-bubble bubble-e"></span>
</div>

      <div className="idea-top">
        <span>01 / THE IDEA</span>
        <span>FROM THOUGHT → TO DIGITAL</span>
      </div>

      <div className="idea-content">

        <div className="idea-title">
          <p>Every business starts with an idea.</p>

          <h2>
            We give it
            <span>a place to exist.</span>
          </h2>
        </div>

        <div className="idea-text">
          <p>
            A great business shouldn't disappear in the noise of social media.
            NIVA creates digital experiences that give your idea a home,
            a personality, and a reason to be remembered.
          </p>

          <a href="#services" className="idea-link">
            Discover what we create <span>↓</span>
          </a>
        </div>

      </div>

      <div className="idea-orbit">

        <div className="orbit-ring"></div>

        <div className="orbit-bubble orbit-bubble-one"></div>
        <div className="orbit-bubble orbit-bubble-two"></div>

        <div className="orbit-center">

          <div className="idea-word">
            <span>IDEA</span>
            <span className="idea-arrow">→</span>
            <strong>NIVA</strong>
          </div>

          <div className="idea-hover-text">
            YOUR IDEA
            <span>STARTS HERE</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Idea;
