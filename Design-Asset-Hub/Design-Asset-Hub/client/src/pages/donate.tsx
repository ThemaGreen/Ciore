import "./Donate.css";

export default function Donate() {
  return (
    <main className="donate-page">
      <div className="donate-container">
        <section className="donate-card">
          <h1 className="donate-title">Fuel the Future With Us</h1>

          <div className="donate-body">
            <p>
              When you donate to Cioré, you’re backing a bold vision rooted in
              privacy, sustainability, cultural power, and community ownership.
              Whether it’s $1 or $1,000, you’re helping us design the phone,
              build the systems, protect our mission, and make ethical tech
              possible.
            </p>

            <p>
              We are transparent. Once spending begins, we will show exactly
              where your support goes. We are not seeking investors right now.
              We’re seeking believers. People like you.
            </p>

            <p className="donate-emphasis">
              Every Dollar Counts. Every Tier Matters.
            </p>

            <p>
              You don’t need thousands to spark change. A million people giving
              $1 could fund this entire vision. All donors are tracked,
              celebrated, and remembered.
            </p>

            <p>
              If you have a request, preference, or idea for a reward, let us
              know on our Suggestions Page. It goes straight to the founder.
            </p>

            <p className="donate-note">
              Note: You’ll receive a confirmation email with your tier info and
              links within a few business days. Thanks for your patience as we
              grow.
            </p>
          </div>

          <div className="donate-divider" />

          <h2 className="donate-section-title">Donor Tiers</h2>

          <div className="tiers">
            <Tier
              title="$1 Tier - Ground Breakers"
              text="You are the foundation beneath it all. Your name joins a public wall of belief, your words appear in packaging and lock screens, and your voice echoes through our community mosaic. You’ll unlock monthly founder thoughts, access our private constellation tracker, and receive donor only secrets made just for you."
            />

            <Tier
              title="$5 Tier - Seed Planters"
              text="You planted the future. Now watch it grow. Your city, your voice, your words become part of our movement’s blueprint. Submit a theme, join our digital poem, and get early glimpses of how your gift is shaping sustainable tech. From sneak peeks to private emoji packs, you’re not just watching us build. You are the builder."
            />

            <Tier
              title="$10 Tier - Solar Winds of Change"
              text="You are the current carrying us forward. With founder narrated updates, exclusive digital badges, early access to our solar tech reveals, and your name embedded in a digital mosaic, you become part of the story. You’ll co-write messages, preview OS features, and help vote on the merch the world will wear."
            />

            <Tier
              title="$50 Tier - Seed & Sky Supporters"
              text="You shape what the world will see. Pick the word that names a product, influence future causes, and leave a time locked message to be revealed years from now. Your ideas will live in our apps, our archives, and our DNA. You choose the winds. You guide the soil."
            />

            <Tier
              title="$100 Tier - Insider Circle"
              text="This is where vision becomes visible. From private docuseries and seasonal design reveals to insider-only access to our sustainability roadmap and protection features, you’ll see what no one else does. You vote. You shape. You influence the feel of Cioré before it touches the world."
            />

            <Tier
              title="$1000 Tier - Founder’s Circle"
              text="This is legacy in motion. Your name lives inside the OS. You speak with the founder one-on-one. You test our prototypes, name features, and help set the tone for launch. From beta perks to engraved recognition, you are officially part of the core team writing this chapter of tech history."
            />

            <Tier
              title="$10,000+ Tier - Legacy Investor"
              text="This tier is sacred. Your name unlocks private testing access, strategic votes, and luxury gifts designed just for you. You help name limited phone editions, launch grants, and shape community projects. Your name is hidden in our code and etched into the translucent shell. Your impact becomes permanent."
            />
          </div>

          {/* Donate Card goes here */}
        </section>
      </div>
    </main>
  );
}

function Tier({ title, text }: { title: string; text: string }) {
  return (
    <article className="tier-card">
      <h3 className="tier-title">{title}</h3>
      <p className="tier-text">{text}</p>
    </article>
  );
}
