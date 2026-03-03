export default function About() {
  return (
    <main className="sf-page" data-testid="about-page">

      {/* HERO */}
      <section className="sf-hero sf-hero--short" data-testid="about-hero">
        <div className="sf-hero-overlay" />
        <div className="sf-hero-content">
          <span className="sf-hero-eyebrow">OUR STORY</span>
          <h1 className="sf-hero-title">WHAT WE STAND FOR</h1>
        </div>
      </section>

      {/* STICKY TAB NAV */}
      <nav className="sf-tab-nav" data-testid="about-tab-nav">
        {["Our Mission", "Core Values", "Our Product", "The Team"].map((tab) => (
          <button key={tab} className="sf-tab-btn">{tab.toUpperCase()}</button>
        ))}
      </nav>

      {/* OVERVIEW */}
      <section className="sf-section sf-section--dark" data-testid="about-overview">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">OVERVIEW</h2>
          <p className="sf-section-body">
            We believe technology should serve people, not use them. Cioré exists to challenge what
            big tech has made normal. We are a Black Owned, Solar Powered, Privacy First company
            building tech that respects people and protects the planet. We don’t track you. We don’t
            sell you. And we definitely don’t believe your data is for sale.
          </p>
          <p className="sf-section-body sf-section-emphasis">
            We’re here to disrupt a system that treats consumers like products. Our stance is simple.
            You deserve better.
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="sf-section sf-section--gradient" data-testid="about-mission">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">OUR MISSION</h2>
          <p className="sf-section-body">
            Cioré is on a mission to protect people in the digital age. Most phones today are built to
            watch you. They listen to what you say, track where you go, and collect every click to create
            detailed profiles that are then sold to advertisers or worse. This is the tradeoff people are
            told they have to accept just to use a phone.
          </p>
          <p className="sf-section-body">
            We don’t accept that. Our mission is to create mobile technology that works for you without
            working against you. Privacy First means we design our products so your data stays yours.
            No hidden trackers. No silent surveillance. Just smart, secure tools built with real intention.
          </p>
          <p className="sf-section-body">
            At the same time, we’re committed to building with eco responsibility. Our devices are Solar
            Powered and designed using sustainable materials, because protecting your future also means
            protecting the planet you live on.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="sf-section sf-section--dark" data-testid="about-values">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">OUR CORE VALUES</h2>
          <ul className="sf-bullet-list">
            {[
              { title: "Privacy First", text: "Your data belongs to you. Always." },
              { title: "Sustainability", text: "Solar powered, eco-conscious materials, modular design." },
              { title: "Community Ownership", text: "Built by and for the people who believe in this vision." },
              { title: "Transparency", text: "We show exactly where your support goes. No hidden agendas." },
              { title: "Equity", text: "Luxury tech should not be exclusive. You deserve better without paying more." },
            ].map((v) => (
              <li key={v.title} className="sf-bullet-item">
                <span className="sf-bullet-icon">•</span>
                <div>
                  <strong className="sf-bullet-title">{v.title}</strong>
                  <p className="sf-bullet-desc">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BUILT WITH YOU IN MIND */}
      <section className="sf-section sf-section--gradient" data-testid="about-product">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">BUILT WITH YOU IN MIND</h2>
          <p className="sf-section-body">
            Cioré phones are being designed from the ground up to protect your privacy, reduce waste,
            and use energy responsibly.
          </p>
          <p className="sf-section-body">
            Each device runs on Lumè, our custom OS (operating system) that blocks apps from tracking
            or spying in the background. Every app must re-request access after 30 days, so nothing
            stays hidden. The phones themselves are fully encrypted, which means your data is locked
            down. Outside apps, networks, and bad actors can’t quietly collect or sell your information.
          </p>
          <p className="sf-section-body">
            Power comes from Nyro, our solar integrated energy system built without harmful mining.
            We’re also designing our charging banks to reduce electricity flow once your phone is
            fully powered, cutting back on unnecessary energy use.
          </p>
          <p className="sf-section-body">
            Each phone is modular and made with ecofriendly materials. When it’s time to upgrade,
            you only replace the part you need. We collect and repurpose old components to help
            reduce tech waste.
          </p>
          <p className="sf-section-body">
            We are NOT profit driven. We believe people deserve access to luxury without having to
            spend thousands to feel seen, protected, or valued.
          </p>
        </div>
      </section>

    </main>
  );
}

function Value({ title, text }: { title: string; text: string }) {
  return (
    <div className="sf-value-card" data-testid={`value-${title}`}>
      <h3 className="sf-value-title">{title}</h3>
      <p className="sf-value-text">{text}</p>
    </div>
  );
}
