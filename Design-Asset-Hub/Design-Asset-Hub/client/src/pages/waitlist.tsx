export default function Waitlist() {
  return (
    <main className="sf-page" data-testid="waitlist-page">

      {/* HERO */}
      <section className="sf-hero sf-hero--short" data-testid="waitlist-hero">
        <div className="sf-hero-overlay" />
        <div className="sf-hero-content">
          <span className="sf-hero-eyebrow">EARLY ACCESS</span>
          <h1 className="sf-hero-title">JOIN THE CIORÉ WAITLIST</h1>
        </div>
      </section>

      {/* TAB NAV */}
      <nav className="sf-tab-nav" data-testid="waitlist-tab-nav">
        {["Why Join", "How It Works", "Privacy", "Get Access"].map((tab) => (
          <button key={tab} className="sf-tab-btn">{tab.toUpperCase()}</button>
        ))}
      </nav>

      {/* OVERVIEW */}
      <section className="sf-section sf-section--dark" data-testid="waitlist-overview">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">OVERVIEW</h2>
          <p className="sf-section-body">
            We’re so excited to launch Cioré. The support we’ve received so far has been incredible,
            and we’re truly grateful for everyone helping to bring this vision to life.
          </p>
          <p className="sf-section-body">
            At Cioré, we believe the future of tech should be built by the people, for the people.
            That’s why community is at the heart of everything we do.
          </p>
          <p className="sf-section-body">
            This is the official waitlist for Cioré. Filling it out not only lets us know you’re
            interested in owning one of the first devices when they become available, but also helps
            us understand real market demand, something we share with potential investors and backers
            to show how powerful this movement really is.
          </p>
          <p className="sf-section-body">
            Your information is safe, secure, and never sold or shared. It will only be used to keep
            you updated on our development progress, launch timeline, and opportunities to get involved.
          </p>
          <p className="sf-section-body sf-section-emphasis">Thank you for being here.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="sf-section sf-section--gradient" data-testid="waitlist-faq">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">WAITLIST DETAILS</h2>
          <details className="sf-faq-item">
            <summary className="sf-faq-trigger">Why Join the Waitlist <span>❯</span></summary>
            <div className="sf-faq-panel">
              Joining the waitlist keeps you in the loop as we build. You’ll get exclusive early access,
              milestone updates, and opportunities to shape the product before anyone else.
            </div>
          </details>
          <details className="sf-faq-item">
            <summary className="sf-faq-trigger">How You’ll Be Notified <span>❯</span></summary>
            <div className="sf-faq-panel">
              We’ll reach out via email when we have major updates, early access opportunities, or when
              the product is ready to ship.
            </div>
          </details>
          <details className="sf-faq-item">
            <summary className="sf-faq-trigger">Privacy and Your Information <span>❯</span></summary>
            <div className="sf-faq-panel">
              Your information is safe, secure, and never sold or shared. It will only be used to keep
              you updated on our development progress, launch timeline, and opportunities to get involved.
            </div>
          </details>
          <details className="sf-faq-item">
            <summary className="sf-faq-trigger">What Information Will We Need <span>❯</span></summary>
            <div className="sf-faq-panel">
              We only need your email address to add you to the waitlist. Simple, minimal, and private
              — just like our product.
            </div>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="sf-section sf-section--dark sf-section--cta" data-testid="waitlist-cta">
        <div className="sf-section-inner sf-section-cta">
          <h2 className="sf-section-heading">BE THE FIRST TO KNOW WHEN WE LAUNCH</h2>
          <p className="sf-section-body">
            Sign up to be among the first to experience a phone that protects your privacy and the planet.
          </p>
          <button
            className="sf-cta-btn"
            onClick={() =>
              window.open(
                "https://forms.gle/i25G4DNZTaGEo8y58",
                "_blank",
                "noopener,noreferrer",
              )
            }
            data-testid="waitlist-signup-btn"
          >
            JOIN THE WAITLIST
          </button>
        </div>
      </section>

    </main>
  );
}
