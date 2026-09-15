
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <a href="#" className="logo" onClick={closeMenu}>
        NI<span>V</span>A
      </a>

      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#process" onClick={closeMenu}>Process</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
      </div>

      <a href="#contact" className="nav-cta" onClick={closeMenu}>
        <span>Start a Project</span>
        <span className="arrow-icon">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 19L19 5M9 5H19V15" />
  </svg>
</span>
      </a>

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;
