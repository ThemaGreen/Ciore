export default function Waitlist() {
  return (
    <div>
      <h1>Join the Cioré Waitlist</h1>
      <p>
        We’re so excited to launch Cioré. The support we’ve received so far has
        been incredible, and we’re truly grateful for everyone helping to bring
        this vision to life.
      </p>
      <p>
        At Cioré, we believe the future of tech should be built by the people,
        for the people. That’s why community is at the heart of everything we
        do.
      </p>
      <p>
        This is the official waitlist form for Cioré. Filling it out not only
        lets us know you’re interested in owning one of the first devices when
        they become available, but also helps us understand real market demand,
        something we share with potential investors and backers to show how
        powerful this movement really is.
      </p>
      <p>
        Your information is safe, secure, and never sold or shared. It will only
        be used to keep you updated on our development progress, launch
        timeline, and opportunities to get involved.
      </p>
      <p>Thanks you for being here</p>
      <button
        onClick={() =>
          window.open(
            "https://forms.gle/i25G4DNZTaGEo8y58",
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        Join the Waitlist
      </button>{" "}
    </div>
  );
}
