import { useState } from "react";
import { Link } from "wouter";

const FEATURES = [
  {
    key: "privacy",
    title: "PRIVACY FIRST",
    description: "Designed to keep your data on-device whenever possible — and make sharing explicit. No hidden trackers. No silent surveillance.",
  },
  {
    key: "solar",
    title: "SOLAR POWERED",
    description: "An ambient energy layer that helps extend real-world endurance. Solar assist supports idle drain and light usage.",
  },
  {
    key: "eco",
    title: "ECO-CONSCIOUS",
    description: "Material choices that respect the planet and still feel premium. Sustainability designed to look and feel legitimate.",
  },
  {
    key: "modular",
    title: "MODULAR",
    description: "Repairable by design — so the phone can outlast trends. Replace components, not the whole device.",
  },
  {
    key: "ai",
    title: "ETHICAL AI",
    description: "AI that serves you, not advertisers. Privacy-respecting, on-device intelligence that keeps your data yours.",
  },
  {
    key: "community",
    title: "COMMUNITY",
    description: "Built with and for the people. Contributors, supporters, and early adopters shape every step of this journey.",
  },
] as const;

export default function Home() {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "saved">("idle");
  const [activeTab, setActiveTab] = useState<string>("overview");

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^\S+@\S+\.\S+$/.test(waitlistEmail.trim());
    if (!ok) return;
    setWaitlistStatus("saved");
  };

  return (
    <main className="sf-page" data-testid="home-page">

      {/* === HERO === */}
      <section className="sf-hero" data-testid="hero">
        <div className="sf-hero-overlay" />
        <div className="sf-hero-content">
          <Link href="/" className="sf-hero-back" data-testid="hero-back">
            <span className="sf-hero-back-arrow">←</span>
            <span>BACK TO HOME</span>
          </Link>
          <span className="sf-hero-eyebrow" data-testid="hero-eyebrow">SUSTAINABLE TECH</span>
          <h1 className="sf-hero-title" data-testid="hero-title">
            CIORÉ GAIA: X
          </h1>
        </div>
      </section>

      {/* === STICKY TAB NAV === */}
      <nav className="sf-tab-nav" data-testid="tab-nav">
        {["overview", "features", "about", "get involved"].map((tab) => (
          <button
            key={tab}
            className={`sf-tab-btn${activeTab === tab ? " sf-tab-btn--active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              const el = document.getElementById(`section-${tab.replace(" ", "-")}`);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* === OVERVIEW SECTION === */}
      <section className="sf-section sf-section--dark" id="section-overview" data-testid="overview">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">OVERVIEW</h2>
          <p className="sf-section-body">
            Cioré is creating sustainable smartphones that protect your privacy and respect the planet.
            We are a Black Owned, Solar Powered, Privacy First company building tech that respects
            people and protects the planet.
          </p>
          <p className="sf-section-body">
            Our mission is to create mobile technology that works for you without working against you.
            We don’t track you. We don’t sell you. And we definitely don’t believe your data is for sale.
          </p>

          <h3 className="sf-subsection-heading">PRODUCT CATEGORIES</h3>
          <div className="sf-tags" data-testid="product-tags">
            {["PRIVACY", "SUSTAINABILITY", "COMMUNITY", "INNOVATION", "ETHICAL AI"].map((tag) => (
              <span key={tag} className="sf-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* === FEATURES SECTION === */}
      <section className="sf-section sf-section--gradient" id="section-features" data-testid="features">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">BUILT WITH INTENTION</h2>
          <ul className="sf-bullet-list" data-testid="features-list">
            {FEATURES.map((f) => (
              <li key={f.key} className="sf-bullet-item">
                <span className="sf-bullet-icon">•</span>
                <div>
                  <strong className="sf-bullet-title">{f.title}</strong>
                  <p className="sf-bullet-desc">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* === ABOUT SECTION === */}
      <section className="sf-section sf-section--dark" id="section-about" data-testid="about-section">
        <div className="sf-section-inner sf-two-col">
          <div className="sf-two-col-text">
            <h2 className="sf-section-heading">WHAT WE STAND FOR</h2>
            <p className="sf-section-body">
              Technology should serve people — not use them. Cioré exists to challenge what big
              tech has made normal.
            </p>
            <p className="sf-section-body">
              We’re here to disrupt a system that treats consumers like products.
              Our stance is simple. You deserve better.
            </p>
            <p className="sf-section-body sf-section-emphasis">
              Every Dollar Counts. Every Tier Matters. A million people giving $1 can fund this vision.
            </p>
          </div>
          <div className="sf-two-col-stat">
            <div className="sf-stat-card" data-testid="stat-card">
              <div className="sf-stat-number">1M</div>
              <div className="sf-stat-label">BELIEVERS NEEDED</div>
            </div>
          </div>
        </div>
      </section>

      {/* === GET INVOLVED SECTION === */}
      <section className="sf-section sf-section--gradient" id="section-get-involved" data-testid="get-involved">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">HELP US CHANGE THE WAY TECHNOLOGY IS MADE</h2>
          <div className="sf-cards" data-testid="involvement-cards">
            {/* Waitlist */}
            <div className="sf-card" data-testid="card-waitlist">
              <div className="sf-card-img sf-card-img--waitlist" />
              <div className="sf-card-body">
                <h3 className="sf-card-title">JOIN THE CIORÉ WAITLIST</h3>
                <p className="sf-card-desc">
                  Sign up to be among the first to experience a phone that protects your privacy and the planet.
                </p>
                <a
                  href="https://forms.gle/36CiFrDP9t5cGfmJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sf-card-link"
                  data-testid="card-waitlist-link"
                >
                  SIGN UP
                </a>
              </div>
            </div>

            {/* Donate */}
            <div className="sf-card" data-testid="card-donate">
              <div className="sf-card-img sf-card-img--donate" />
              <div className="sf-card-body">
                <h3 className="sf-card-title">DONATE</h3>
                <p className="sf-card-desc">
                  Every donation powers research, design and progress toward a better digital future.
                </p>
                <Link href="/donate" className="sf-card-link" data-testid="card-donate-link">
                  DONATE NOW
                </Link>
              </div>
            </div>

            {/* Volunteer */}
            <div className="sf-card" data-testid="card-volunteer">
              <div className="sf-card-img sf-card-img--volunteer" />
              <div className="sf-card-body">
                <h3 className="sf-card-title">CONTRIBUTE YOUR GENIUS</h3>
                <p className="sf-card-desc">
                  We welcome innovators, creators, and visionaries who want to make an impact.
                  Contribute your genius and be part of something transformative.
                </p>
                <a
                  href="https://forms.gle/fYNzgLXAiqsBqUhN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sf-card-link"
                  data-testid="card-volunteer-link"
                >
                  JOIN OUR TEAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WAITLIST FORM === */}
      <section className="sf-section sf-section--black" id="waitlist" data-testid="waitlist-section">
        <div className="sf-section-inner sf-waitlist">
          <div className="sf-waitlist-text">
            <h2 className="sf-section-heading">
              JOIN OUR WAITLIST.<br />BE THE FIRST TO KNOW<br />WHEN WE LAUNCH.
            </h2>
          </div>
          <div className="sf-waitlist-faq">
            <details className="sf-faq-item">
              <summary className="sf-faq-trigger">Why Join the Waitlist <span>❯</span></summary>
              <div className="sf-faq-panel">Joining the waitlist keeps you in the loop as we build. You’ll get exclusive early access, milestone updates, and opportunities to shape the product before anyone else.</div>
            </details>
            <details className="sf-faq-item">
              <summary className="sf-faq-trigger">How You’ll Be Notified <span>❯</span></summary>
              <div className="sf-faq-panel">We’ll reach out via email when we have major updates, early access opportunities, or when the product is ready to ship.</div>
            </details>
            <details className="sf-faq-item">
              <summary className="sf-faq-trigger">Privacy and Your Information <span>❯</span></summary>
              <div className="sf-faq-panel">Your information is safe, secure, and never sold or shared. It will only be used to keep you updated on our development progress, launch timeline, and opportunities to get involved.</div>
            </details>
            <details className="sf-faq-item">
              <summary className="sf-faq-trigger">What Information Will We Need <span>❯</span></summary>
              <div className="sf-faq-panel">We only need your email address to add you to the waitlist. Simple, minimal, and private — just like our product.</div>
            </details>
          </div>
        </div>
      </section>

    </main>
  );
}
