const MILESTONES = [
  "Cioré officially founded — April 2025",
  "Trademark and legal filings submitted — May 2025",
  "Brand mission, voice, and visual identity finalized",
  "Hardware concept and modular design direction defined",
  "Operating system framework and offline-first features outlined",
  "In-depth research conducted on privacy practices, secure architecture, and encrypted systems",
  "Market research completed on smartphone usage, user concerns, and ethical tech trends",
  "Comparative analysis performed between Cioré and major smartphone brands",
  "Ongoing exploration of sustainable materials",
  "Search and shortlisting of ethical hardware suppliers and potential engineering collaborators",
  "Website launched with donation, waitlist, and volunteer systems in place",
  "Volunteer onboarding infrastructure created with applications, tracking, and team tools",
  "Launch of Operation Takeover community fundraiser",
  "Growth of early supporter interest across Instagram, TikTok, and email waitlist",
  "Transparency system built for tracking spending, traction, and future milestones",
  "Defined core materials for eco friendly and transparent phone casing — June 2025",
  "Completed draft architecture for the privacy based mobile operating system",
  "Created legal and onboarding documentation for all contributors",
  "Applied for Y Combinator and launched investor readiness materials",
  "Built the Updates and Spending Transparency policy structure",
  "Introduced Gaia X as our sustainable AI initiative",
  "Began preparing internship pathway development",
  "Attracted talented early contributors in cybersecurity, tech systems, design, and strategy",
];

const SELF_FUNDED = [
  "Comprehensive research into privacy standards, encryption models, and secure architecture",
  "Market studies comparing Big Tech phone models, surveillance trends, and repairability gaps",
  "Analysis of consumer sentiment around sustainability and tech ownership",
  "Competitive audits of mobile hardware supply chains and ethical sourcing practices",
  "Consultation with environmental engineers regarding solar integration and eco-materials",
  "Legal fees for trademark filings, IP consultation, and brand protection",
  "Domain registration, email security systems, and hosting platforms",
  "Website design and development",
  "Brand development, design assets, messaging frameworks, and launch materials",
  "Strategy sessions and toolkits created for campaign execution",
];

export default function Progress() {
  return (
    <main className="sf-page" data-testid="progress-page">

      {/* HERO */}
      <section className="sf-hero sf-hero--short" data-testid="progress-hero">
        <div className="sf-hero-overlay" />
        <div className="sf-hero-content">
          <span className="sf-hero-eyebrow">TRANSPARENCY</span>
          <h1 className="sf-hero-title">WHERE WE STAND</h1>
        </div>
      </section>

      {/* TAB NAV */}
      <nav className="sf-tab-nav" data-testid="progress-tab-nav">
        {["Overview", "Milestones", "Spending", "What's Next"].map((tab) => (
          <button key={tab} className="sf-tab-btn">{tab.toUpperCase()}</button>
        ))}
      </nav>

      {/* OVERVIEW */}
      <section className="sf-section sf-section--dark" data-testid="progress-overview">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">OVERVIEW</h2>
          <p className="sf-section-body">
            Cioré is currently in its early development phase, actively building the foundation of
            our brand, product, and community. We have begun assembling a growing team of passionate
            contributors, structuring internal systems, and designing the first Privacy First, Solar
            Powered mobile device made from sustainable materials.
          </p>
          <p className="sf-section-body">
            Right now, we are not yet manufacturing devices. We are still in the community powered
            phase, securing resources, testing materials, refining our OS vision, and developing the
            infrastructure needed to launch this product the right way.
          </p>
        </div>
      </section>

      {/* SPENDING TRANSPARENCY */}
      <section className="sf-section sf-section--gradient" data-testid="progress-spending">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">SPENDING TRANSPARENCY</h2>
          <p className="sf-section-body sf-section-emphasis">To date, no donor funds have been spent.</p>
          <p className="sf-section-body">
            Everything accomplished so far has been fully self funded by the founder, not by outside
            investors, grants, or sponsorships. Every tool, every system, and every piece of progress
            you see has been powered by personal investment, sacrifice, and unwavering belief in this mission.
          </p>
          <p className="sf-section-body">Here’s what has already been covered out-of-pocket:</p>
          <ul className="sf-bullet-list">
            {SELF_FUNDED.map((item) => (
              <li key={item} className="sf-bullet-item">
                <span className="sf-bullet-icon">•</span>
                <p className="sf-bullet-desc">{item}</p>
              </li>
            ))}
          </ul>
          <p className="sf-section-body sf-section-emphasis">
            This has never been just an idea. It’s already a living, funded effort in motion.
          </p>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="sf-section sf-section--dark" data-testid="progress-milestones">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">MILESTONES ACHIEVED</h2>
          <ul className="sf-bullet-list">
            {MILESTONES.map((m) => (
              <li key={m} className="sf-bullet-item">
                <span className="sf-bullet-icon">•</span>
                <p className="sf-bullet-desc">{m}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
