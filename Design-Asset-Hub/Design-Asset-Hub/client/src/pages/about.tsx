import "./about.css";

export default function About() {
  return (
    <main className="about">
      {/* WHAT WE STAND FOR */}
      <section className="section hero">
        <span className="label">WHAT WE STAND FOR</span>

        <h1>
          Technology should serve people —
          <br /> not use them.
        </h1>

        <p className="lead">
          We believe technology should serve people, not use them. Cioré exists
          to challenge what big tech has made normal. We are a Black Owned,
          Solar Powered, Privacy First company building tech that respects
          people and protects the planet. We don’t track you. We don’t sell you.
          And we definitely don’t believe your data is for sale.
        </p>

        <p className="lead emphasis">
          We’re here to disrupt a system that treats consumers like products.
          Our stance is simple. You deserve better.
        </p>
      </section>

      {/* OUR MISSION */}
      <section className="section">
        <span className="label">OUR MISSION</span>

        <div className="stack">
          <p>
            Cioré is on a mission to protect people in the digital age. Most
            phones today are built to watch you. They listen to what you say,
            track where you go, and collect every click to create detailed
            profiles that are then sold to advertisers or worse. This is the
            tradeoff people are told they have to accept just to use a phone.
          </p>

          <p className="statement">We don’t accept that.</p>

          <p>
            Our mission is to create mobile technology that works for you
            without working against you. Privacy First means we design our
            products so your data stays yours. No hidden trackers. No silent
            surveillance. Just smart, secure tools built with real intention.
          </p>

          <p>
            At the same time, we’re committed to building with eco
            responsibility. Our devices are Solar Powered and designed using
            sustainable materials, because protecting your future also means
            protecting the planet you live on.
          </p>

          <p className="emphasis">
            We want to change how people think about technology. Not as
            something you have to tolerate, but something you can trust.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <span className="label">OUR CORE VALUES</span>

        <div className="values">
          <Value
            title="Privacy"
            text="We believe data should be protected by default. Our goal is to create tools that respect and secure your digital identity from the inside out."
          />
          <Value
            title="Sustainability"
            text="We are committed to using eco-conscious materials and energy efficient design to reduce environmental harm and extend product life cycles."
          />
          <Value
            title="Ownership"
            text="Modular architecture, offline first features, and open communication drive everything we do. We aim to put control back into the hands of the user."
          />
          <Value
            title="Transparency"
            text="We openly share our process, our goals, and how we use the support we receive. Openness isn't just a principle, it's a promise."
          />
          <Value
            title="Service"
            text="We’re designing more than technology. Our vision includes job creation, clean up initiatives, education outreach, and community led impact, all built into the future of CIORÉ™."
          />
        </div>
      </section>

      {/* BUILT WITH YOU IN MIND */}
      <section className="section">
        <span className="label">BUILT WITH YOU IN MIND</span>

        <div className="stack">
          <p>
            Cioré phones are being designed from the ground up to protect your
            privacy, reduce waste, and use energy responsibly.
          </p>

          <p>
            Each device runs on Lumè, our custom OS (operating system) that
            blocks apps from tracking or spying in the background. Every app
            must re-request access after 30 days, so nothing stays hidden.
          </p>

          <p>
            The phones themselves are fully encrypted, which means your data is
            locked down. Outside apps, networks, and bad actors can’t quietly
            collect or sell your information. Your photos, messages, and
            personal files stay private (as they should).
          </p>

          <p>
            Power comes from Nyro, our solar integrated energy system built
            without harmful mining. We’re also designing our charging banks to
            reduce electricity flow once your phone is fully powered, cutting
            back on unnecessary energy use.
          </p>

          <p>
            Each phone is modular and made with ecofriendly materials. When it’s
            time to upgrade, you only replace the part you need. We collect and
            repurpose old components to help reduce tech waste.
          </p>

          <p className="emphasis">
            We are NOT profit driven. We believe people deserve access to luxury
            without having to spend thousands to feel seen, protected, or
            valued. In this economy, we get it. That’s why we’re doing the
            research to keep Cioré affordable, ethical, and built for everyday
            life.
          </p>
        </div>
      </section>
    </main>
  );
}

function Value({ title, text }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
