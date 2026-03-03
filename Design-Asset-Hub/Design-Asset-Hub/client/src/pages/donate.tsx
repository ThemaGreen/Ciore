import { useState } from "react";

const TIERS = [
  { title: "Spark", amount: "$1", text: "Every dollar counts. A million people giving $1 can fund this vision. All donors are tracked, celebrated, and remembered." },
  { title: "Supporter", amount: "$50", text: "A meaningful contribution that helps us accelerate research, design, and infrastructure for a privacy-first future." },
  { title: "Champion", amount: "$100", text: "You become a key part of the foundation. Your support helps us hire contributors, test materials, and build systems." },
  { title: "Visionary", amount: "$1,000", text: "A transformative contribution. Visionary donors may be recognized in our transparency reports and future product materials." },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState("$1");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("Monthly Donation");
  const [coverFee, setCoverFee] = useState(true);

  const getBase = () => {
    if (selectedAmount === "custom") {
      return parseFloat(customAmount) || 0;
    }
    return parseFloat(selectedAmount.replace(/[^0-9.]/g, "")) || 0;
  };

  const fee = coverFee ? +(getBase() * 0.03).toFixed(2) : 0;
  const total = +(getBase() + fee).toFixed(2);
  const freqLabel = frequency.includes("One-Time") ? "once" : frequency.toLowerCase().replace(" donation", "");

  return (
    <main className="sf-page" data-testid="donate-page">

      {/* HERO */}
      <section className="sf-hero sf-hero--short" data-testid="donate-hero">
        <div className="sf-hero-overlay" />
        <div className="sf-hero-content">
          <span className="sf-hero-eyebrow">SUPPORT THE MISSION</span>
          <h1 className="sf-hero-title">FUEL THE FUTURE WITH US</h1>
        </div>
      </section>

      {/* TAB NAV */}
      <nav className="sf-tab-nav" data-testid="donate-tab-nav">
        {["Why Donate", "Donor Tiers", "Donate Now", "Transparency"].map((tab) => (
          <button key={tab} className="sf-tab-btn">{tab.toUpperCase()}</button>
        ))}
      </nav>

      {/* WHY DONATE */}
      <section className="sf-section sf-section--dark" data-testid="donate-why">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">WHY DONATE</h2>
          <p className="sf-section-body">
            When you donate to Cioré, you’re backing a bold vision rooted in privacy, sustainability,
            cultural power, and community ownership. Whether it’s $1 or $1,000, you’re helping us
            design the phone, build the systems, protect our mission, and make ethical tech possible.
          </p>
          <p className="sf-section-body">
            We are transparent. Once spending begins, we will show exactly where your support goes.
            We are not seeking investors right now. We’re seeking believers. People like you.
          </p>
          <p className="sf-section-body sf-section-emphasis">
            Every Dollar Counts. Every Tier Matters.
          </p>
          <p className="sf-section-body">
            You don’t need thousands to spark change. A million people giving $1 could fund this
            entire vision. All donors are tracked, celebrated, and remembered.
          </p>
          <p className="sf-section-body">
            If you have a request, preference, or idea for a reward, let us know on our Suggestions
            Page. It goes straight to the founder.
          </p>
          <p className="sf-section-body">
            Note: You’ll receive a confirmation email with your tier info and links within a few
            business days. Thanks for your patience as we grow.
          </p>
        </div>
      </section>

      {/* DONOR TIERS */}
      <section className="sf-section sf-section--gradient" data-testid="donate-tiers">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">DONOR TIERS</h2>
          <ul className="sf-bullet-list">
            {TIERS.map((t) => (
              <li key={t.title} className="sf-bullet-item">
                <span className="sf-bullet-icon">•</span>
                <div>
                  <strong className="sf-bullet-title">{t.title} — {t.amount}</strong>
                  <p className="sf-bullet-desc">{t.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DONATE WIDGET */}
      <section className="sf-section sf-section--dark" data-testid="donate-widget">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">MAKE A CONTRIBUTION</h2>
          <p className="sf-section-body">
            Every contribution helps us design the phone, build the systems, and make ethical technology possible.
            We believe in transparency and once spending begins, we will show exactly where your support goes.
          </p>

          {/* Amount Selector */}
          <div className="sf-donate-amounts" data-testid="donate-amounts">
            {["$1", "$50", "$100", "$1,000"].map((amt) => (
              <button
                key={amt}
                className={`sf-donate-amt-btn${selectedAmount === amt ? " sf-donate-amt-btn--active" : ""}`}
                onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                data-testid={`amount-${amt}`}
              >
                {amt}
              </button>
            ))}
            <button
              className={`sf-donate-amt-btn${selectedAmount === "custom" ? " sf-donate-amt-btn--active" : ""}`}
              onClick={() => setSelectedAmount("custom")}
              data-testid="amount-custom"
            >
              Custom Amount
            </button>
            {selectedAmount === "custom" && (
              <input
                type="number"
                className="sf-donate-custom-input"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                data-testid="custom-amount-input"
              />
            )}
          </div>

          {/* Frequency */}
          <div className="sf-donate-frequency" data-testid="donate-frequency">
            <select
              className="sf-donate-select"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              aria-label="Donation Frequency"
              data-testid="frequency-select"
            >
              <option>One-Time Donation</option>
              <option>Weekly Donation</option>
              <option>Monthly Donation</option>
              <option>Quarterly Donation</option>
              <option>Annual Donation</option>
            </select>
          </div>

          {/* Cover Fee */}
          <label className="sf-donate-fee-label" data-testid="cover-fee-label">
            <input
              type="checkbox"
              checked={coverFee}
              onChange={(e) => setCoverFee(e.target.checked)}
              className="sf-donate-checkbox"
              data-testid="cover-fee-checkbox"
            />
            <span>Support us by covering the fees we have to pay</span>
          </label>

          {/* Summary */}
          <div className="sf-donate-summary" data-testid="donate-summary">
            <div className="sf-donate-summary-row">
              <span>3% Cover the Fee</span>
              <span>${fee.toFixed(2)}</span>
            </div>
            <div className="sf-donate-summary-row sf-donate-summary-total">
              <span>Total {freqLabel}</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Donate Button */}
          <button
            className="sf-cta-btn"
            data-testid="donate-btn"
            onClick={() =>
              window.open("https://www.paypal.com", "_blank", "noopener,noreferrer")
            }
          >
            DONATE
          </button>
        </div>
      </section>

    </main>
  );
}

function Tier({ title, text }: { title: string; text: string }) {
  return (
    <div className="sf-tier-card" data-testid={`tier-${title}`}>
      <h3 className="sf-tier-title">{title}</h3>
      <p className="sf-tier-text">{text}</p>
    </div>
  );
}
