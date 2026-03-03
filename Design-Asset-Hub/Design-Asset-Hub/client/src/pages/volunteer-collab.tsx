export default function Volunteer() {
  return (
    <main className="sf-page" data-testid="volunteer-page">

      {/* HERO */}
      <section className="sf-hero sf-hero--short" data-testid="volunteer-hero">
        <div className="sf-hero-overlay" />
        <div className="sf-hero-content">
          <span className="sf-hero-eyebrow">JOIN THE TEAM</span>
          <h1 className="sf-hero-title">CONTRIBUTE YOUR GENIUS</h1>
        </div>
      </section>

      {/* TAB NAV */}
      <nav className="sf-tab-nav" data-testid="volunteer-tab-nav">
        {["About Paid Positions", "Why Volunteer", "Projects", "Roles"].map((tab) => (
          <button key={tab} className="sf-tab-btn">{tab.toUpperCase()}</button>
        ))}
      </nav>

      {/* OVERVIEW */}
      <section className="sf-section sf-section--dark" data-testid="volunteer-overview">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">WELCOME TO GIVE AND GROW AT CIORÉ™</h2>
          <p className="sf-section-body">
            Give and Grow is the name of our volunteer initiative here at Cioré™. It’s rooted in mutual
            support. We give contributors meaningful experience, real world exposure, mentorship, and flexibility.
          </p>
          <p className="sf-section-body">
            In return, you give your time, your ideas, and your energy to help build something powerful with us.
          </p>
          <p className="sf-section-body">
            This is not a traditional work arrangement. We are a mission-driven tech startup that is just
            getting started, and this space is built for those who believe in the vision and want to grow with us.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sf-section sf-section--gradient" data-testid="volunteer-how">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">HOW IT WORKS</h2>
          <p className="sf-section-body">
            We operate on a self paced system. That means once you’re onboarded, you will have access to
            our private workspace. Inside, you’ll see a Task Hub where roles and responsibilities are clearly
            outlined. You can choose which tasks you’d like to work on based on your interest, schedule, and
            skill level.
          </p>
          <p className="sf-section-body">
            All tasks are labeled with what department they belong to and what is needed. Once you pick a task,
            you mark it as started, complete it on your own time, and submit it through a quick form. You will
            always be supported by the founder and your teammates along the way.
          </p>

          <h3 className="sf-subsection-heading">IMPORTANT TO KNOW</h3>
          <ul className="sf-bullet-list">
            <li className="sf-bullet-item">
              <span className="sf-bullet-icon">•</span>
              <p className="sf-bullet-desc">These are unpaid volunteer positions. They are not internships or job offers.</p>
            </li>
            <li className="sf-bullet-item">
              <span className="sf-bullet-icon">•</span>
              <p className="sf-bullet-desc">We are not a nonprofit. We are a for-profit company with a mission, and we openly support our community through donations and grassroots efforts.</p>
            </li>
            <li className="sf-bullet-item">
              <span className="sf-bullet-icon">•</span>
              <p className="sf-bullet-desc">We cannot guarantee future employment. However, contributors are always considered first when paid roles do open.</p>
            </li>
            <li className="sf-bullet-item">
              <span className="sf-bullet-icon">•</span>
              <p className="sf-bullet-desc">You can leave at any time. There’s no pressure to stay longer than you are able. Just let us know so we can close out your access respectfully.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="sf-section sf-section--dark" data-testid="volunteer-why">
        <div className="sf-section-inner">
          <h2 className="sf-section-heading">WHY JOIN THE GIVE AND GROW INITIATIVE</h2>
          <p className="sf-section-body">
            This initiative was built on a simple idea: when you give your time and skills, you deserve space
            to grow. At Cioré, our contributors are not just helpers, they are early collaborators in building
            something powerful.
          </p>
          <ul className="sf-bullet-list">
            {[
              { title: "Build Real World Experience", text: "Whether you’re pivoting careers or breaking into tech for the first time, this is your opportunity to work on a mission-driven project that touches privacy, sustainability, and innovation." },
              { title: "Learn While You Contribute", text: "We offer optional training, guidance, and mentorship for many roles. No experience? That’s okay. We help you grow in your area of interest." },
              { title: "Build Your Portfolio or Resume", text: "You’ll be able to list your role at Cioré™ on your resume, get time-tracked documentation, and even request letters of recommendation (based on your contributions)." },
              { title: "Expand Your Network", text: "You’ll collaborate with people from different backgrounds, industries, and parts of the world. This is a chance to meet others who are also passionate about tech, equity, and innovation." },
              { title: "Be Part of the Origin Story", text: "This is not a giant corporation. It’s a vision in motion. You’re not just joining a project, you’re becoming part of the foundation." },
            ].map((benefit) => (
              <li key={benefit.title} className="sf-bullet-item">
                <span className="sf-bullet-icon">•</span>
                <div>
                  <strong className="sf-bullet-title">{benefit.title}</strong>
                  <p className="sf-bullet-desc">{benefit.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* APPLY */}
      <section className="sf-section sf-section--gradient sf-section--cta" data-testid="volunteer-apply">
        <div className="sf-section-inner sf-section-cta">
          <h2 className="sf-section-heading">READY TO CONTRIBUTE?</h2>
          <p className="sf-section-body">
            We welcome innovators, creators, and visionaries. Apply to join the Give and Grow initiative today.
          </p>
          <button
            className="sf-cta-btn"
            onClick={() =>
              window.open(
                "https://forms.gle/Mi8NR3rN4mWpKy2J7",
                "_blank",
                "noopener,noreferrer",
              )
            }
            data-testid="volunteer-apply-btn"
          >
            APPLY HERE
          </button>
        </div>
      </section>

    </main>
  );
}
