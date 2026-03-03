import { useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sf-nav" data-testid="nav-top">
        <div className="sf-nav-inner">
          {/* Logo */}
          <Link href="/" className="sf-nav-logo" data-testid="group-brand">
            <div className="sf-logo-mark" aria-hidden="true" data-testid="logo-mark">
              <img
                src="/ciore-logo.png"
                alt="Cioré Logo"
                className="sf-logo-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="sf-logo-text">C</span>';
                }}
              />
            </div>
            <div className="sf-nav-brand-text" data-testid="text-brand">
              <div className="sf-brand-name">CIORÉ</div>
              <div className="sf-brand-sub">Gaia: X</div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="sf-nav-links" data-testid="nav-links">
            <Link href="/progress" className="sf-nav-link">Progress</Link>
            <Link href="/about" className="sf-nav-link">About</Link>
            <Link href="/donate" className="sf-nav-link">Donate</Link>
            <Link href="/volunteer" className="sf-nav-link">Volunteer</Link>
          </nav>

          {/* CTA Button */}
          <Link href="#waitlist" className="sf-nav-cta" data-testid="nav-cta">
            JOIN WAITLIST
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="sf-nav-hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="nav-hamburger"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="sf-nav-mobile" data-testid="nav-mobile">
            <Link href="/progress" className="sf-nav-mobile-link" onClick={() => setMenuOpen(false)}>Progress</Link>
            <Link href="/about" className="sf-nav-mobile-link" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/donate" className="sf-nav-mobile-link" onClick={() => setMenuOpen(false)}>Donate</Link>
            <Link href="/volunteer" className="sf-nav-mobile-link" onClick={() => setMenuOpen(false)}>Volunteer</Link>
            <Link href="#waitlist" className="sf-nav-cta sf-nav-mobile-cta" onClick={() => setMenuOpen(false)}>JOIN WAITLIST</Link>
          </div>
        )}
      </header>
    </>
  );
}
