function Hero() {
  return (
    <section className="hero">

      <div className="hero-shape hero-shape-one"></div>
      <div className="hero-shape hero-shape-two"></div>
      <div className="hero-bubble hero-bubble-one"></div>
      <div className="hero-bubble hero-bubble-two"></div>

      <div className="hero-content">
        <p className="hero-label">
          NIVA WEB STUDIO
        </p>

        <h1>
          Your idea deserves
          <span>a place online.</span>
        </h1>

        <p className="hero-description">
          We turn small business ideas into thoughtful
          digital experiences that are made to be seen.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="primary-btn">
            Start a Project <span>↗</span>
          </a>

          <a href="#work" className="secondary-btn">
            Explore Our Work
          </a>
        </div>
      </div>

      
<div className="hero-visual">

  <div className="website-window">

    <div className="window-top">

      <div className="window-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <span className="window-name">
        niva.studio
      </span>

      <span className="window-menu">
        MENU
      </span>

    </div>

    <div className="mini-site">

      <div className="mini-nav">
        <strong>NIVA</strong>

        <div>
          <span>WORK</span>
          <span>ABOUT</span>
        </div>
      </div>

      <div className="mini-content">

        <small>
          WEB STUDIO / 2026
        </small>

        <h2>
          Made
          <span>to be seen.</span>
        </h2>

        <p>
          Digital experiences for
          ideas worth remembering.
        </p>

        <div className="mini-button">
          Explore <span>↗</span>
        </div>

      </div>

      <div className="mini-bubble mini-bubble-one"></div>
      <div className="mini-bubble mini-bubble-two"></div>
      <div className="mini-orbit"></div>

      <div className="mini-footer">
        <span>SCROLL</span>
        <span>🫧</span>
      </div>

    </div>

  </div>

  <div className="hero-floating-card">
    <span>01</span>
    <p>IDEA → DIGITAL</p>
  </div>

</div>


      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <span>↓</span>
      </div>

    </section>
  );
}

export default Hero;