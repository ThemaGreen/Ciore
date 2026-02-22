import "./volunteer-collab.css";

export default function Volunteer() {
  return (
    <main className="volunteer-page">
      <div className="volunteer-container">
        <section className="volunteer-card">
          <h1 className="volunteer-title">
            Welcome to Give and Grow at Cioré™{" "}
          </h1>
          <div className="volunteer-body">
            <p>
              Give and Grow is the name of our volunteer initiative here at
              Cioré™. It’s rooted in mutual support. We give contributors
              meaningful experience, real world exposure, mentorship, and
              flexibility.
            </p>
            <p>
              {" "}
              In return, you give your time, your ideas, and your energy to help
              build something powerful with us.{" "}
            </p>
            <p>
              This is not a traditional work arrangement. We are a
              mission-driven tech startup that is just getting started, and this
              space is built for those who believe in the vision and want to
              grow with us.
            </p>
            <div className="volunteer-divider" />
            <h2 className="volunteer-h2">How It Works</h2>
            <p>
              We operate on a self paced system. That means once you’re
              onboarded, you will have access to our private workspace. Inside,
              you’ll see a Task Hub where roles and responsibilities are clearly
              outlined. You can choose which tasks you’d like to work on based
              on your interest, schedule, and skill level.
            </p>
            <p>
              All tasks are labeled with what department they belong to and what
              is needed. Once you pick a task, you mark it as started, complete
              it on your own time, and submit it through a quick form. You will
              always be supported by the founder and your teammates along the
              way.
            </p>
            <div className="volunteer-divider" />

            <h2 className="volunteer-h2">No Experience? We Still Want You</h2>
            <p>
              You do not need to have formal experience to contribute here. We
              provide training, guides, and real time help to make sure you feel
              supported. Many of our contributors use this opportunity to build
              new skills, create portfolio pieces, or break into tech or startup
              spaces for the first time.
            </p>
            <p className="volunteer-emphasis">
              If you’re willing to show up and learn, we’ll meet you there.
            </p>
            <div className="volunteer-divider" />

            <h2 className="volunteer-h2">Important to Know</h2>
            <ul className="volunteer-list">
              <li>
                These are unpaid volunteer positions. They are not internships
                or job offers.
              </li>
              <li>
                We are not a nonprofit. We are a for-profit company with a
                mission, and we openly support our community through donations
                and grassroots efforts.
              </li>
              <li>
                We cannot guarantee future employment. However, contributors are
                always considered first when paid roles do open.
              </li>
              <li>
                You can leave at any time. There’s no pressure to stay longer
                than you are able. Just let us know so we can close out your
                access respectfully.
              </li>
            </ul>
            <div className="volunteer-divider" />
            <h2 className="volunteer-h2">
              Why Join the Give and Grow Initiative
            </h2>
            <p>
              This initiative was built on a simple idea: when you give your
              time and skills, you deserve space to grow. At Cioré, our
              contributors are not just helpers, they are early collaborators in
              building something powerful.
            </p>
            <p>
              Even though these roles are unpaid, we believe the value exchange
              is still real. Here’s how you benefit:
            </p>
            <div className="volunteer-grid">
              <div className="volunteer-miniCard">
                <h3 className="volunteer-h3">Build Real World Experience</h3>
                <p>
                  Whether you’re pivoting careers or breaking into tech for the
                  first time, this is your opportunity to work on a
                  mission-driven project that touches privacy, sustainability,
                  and innovation.
                </p>
                <p className="volunteer-example">
                  Example: A contributor interested in compliance might support
                  internal policy research that prepares them for jobs in tech
                  regulation or cybersecurity.
                </p>
              </div>

              <div className="volunteer-miniCard">
                <h3 className="volunteer-h3">Learn While You Contribute</h3>
                <p>
                  We offer optional training, guidance, and mentorship for many
                  roles. No experience? That’s okay. We help you grow in your
                  area of interest.
                </p>
                <p className="volunteer-example">
                  Example: Someone curious about UX design can start by helping
                  us document user research, then gradually take on low-risk
                  creative assignments.
                </p>
              </div>

              <div className="volunteer-miniCard">
                <h3 className="volunteer-h3">Build Your Portfolio or Resume</h3>
                <p>
                  You’ll be able to list your role at Cioré™ on your resume, get
                  time-tracked documentation, and even request letters of
                  recommendation (based on your contributions).
                </p>
                <p className="volunteer-example">
                  Example: A contributor in tech operations might help us
                  brainstorm how to structure our internal systems, showing
                  hands-on problem-solving on their portfolio.
                </p>
              </div>

              <div className="volunteer-miniCard">
                <h3 className="volunteer-h3">Expand Your Network</h3>
                <p>
                  You’ll collaborate with people from different backgrounds,
                  industries, and parts of the world. This is a chance to meet
                  others who are also passionate about tech, equity, and
                  innovation.
                </p>
              </div>

              <div className="volunteer-miniCard volunteer-miniCard">
                <h3 className="volunteer-h3">Be Part of the Origin Story</h3>
                <p>
                  This is not a giant corporation. It’s a vision in motion.
                  You’re not just joining a project, you’re becoming part of the
                  foundation. And as we grow, we’ll remember those who helped us
                  get started.
                </p>
              </div>
            </div>
            <button
              className="volunteer-button"
              onClick={() =>
                window.open(
                  "https://forms.gle/Mi8NR3rN4mWpKy2J7",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Join the Waitlist
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
