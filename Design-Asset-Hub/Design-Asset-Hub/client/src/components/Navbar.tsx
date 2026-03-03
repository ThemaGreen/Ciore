import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('sf-audio-player') as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.2;
      const playAudio = () => {
        audio.play().catch(() => {});
        document.removeEventListener('click', playAudio);
      };
      document.addEventListener('click', playAudio);
    }
  }, []);

  return (
    <>
      <audio id="sf-audio-player" loop src="https://www.spaceforce.com/audio/musicMenu.ogg" />
      <div className="sf-noise-overlay" />
      
      <header className="sf-navbar">
        <Link href="/" className="sf-nav-logo">
          <span className="sf-font-header" style={{ color: 'white', fontSize: '1.2rem' }}>CIORÉ</span>
        </Link>

        <nav className={`sf-nav-links ${menuOpen ? 'active' : ''}`}>
          <Link href="/about">About Us</Link>
          <Link href="/volunteer-collab">Join Us</Link>
          <Link href="/donate">Support</Link>
          <Link href="/progress">Our Mission</Link>
          <Link href="/waitlist" className="sf-btn" style={{ marginLeft: '30px' }}>Apply Now</Link>
        </nav>
      </header>
    </>
  );
}
