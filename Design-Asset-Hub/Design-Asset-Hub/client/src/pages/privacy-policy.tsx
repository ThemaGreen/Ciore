import "./privacy-policy.css";

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <section className="privacy-card">
          <h1 className="privacy-title">Cioré - Privacy Policy</h1>

          <div className="privacy-meta">
            <span className="privacy-updated">Last Updated: May 2025</span>
          </div>

          <div className="privacy-content">
            <h3>Introduction</h3>
            <p>
              At Cioré Official ("we," "us," "our"), our core mission is to
              build technology that protects your privacy. This Privacy Policy
              outlines how we collect, use, and protect the very limited
              information we may gather from visitors to our website,{" "}
              <a
                href="https://www.cioreofficial.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.cioreofficial.com
              </a>{" "}
              (the "Site"). We are transparent about our practices because we
              believe your data belongs to you.
            </p>

            <h3>Information We Do Not Collect</h3>
            <p>In line with our privacy-first principles:</p>
            <ul>
              <li>
                We do not use third-party analytics or advertising trackers like
                Google Analytics or Facebook Pixel.
              </li>
              <li>
                We do not use cookies to track your behavior across other
                websites.
              </li>
              <li>We do not sell, rent, or trade any personal data.</li>
            </ul>

            <h3>Information We Collect (Minimal & Purposeful)</h3>
            <p>
              We only collect information that you voluntarily provide to us and
              what is necessary for basic site operation:
            </p>
            <ul>
              <li>
                <span className="privacy-strong">
                  Voluntarily Provided Information:
                </span>{" "}
                This includes your name, e-mail address, and any other details
                you choose to provide when you contact us via our contact form,
                sign up for our newsletter, or express interest in volunteering.
                This data is used solely to respond to your inquiry or provide
                you with the requested updates.
              </li>
              <li>
                <span className="privacy-strong">
                  Automatically Collected Information (Basic):
                </span>{" "}
                Our web server may automatically log basic technical information
                such as your IP address, browser type, and access times. This
                data is used for security monitoring and diagnosing technical
                issues (e.g., preventing denial-of-service attacks). Where
                possible, we anonymize this data.
              </li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>
              We use the minimal information we have for the following purposes:
            </p>
            <ul>
              <li>To communicate with you and respond to your requests.</li>
              <li>
                To send you company updates and newsletters (only if you have
                explicitly opted-in).
              </li>
              <li>To improve the security and functionality of our Site.</li>
              <li>To manage volunteer applications.</li>
            </ul>

            <h3>Data Retention</h3>
            <p>
              We will retain your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy. If you
              have signed up for our newsletter, we will retain your email
              address until you unsubscribe.
            </p>

            <h3>Your Data Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>
                Access: Request a copy of the personal data we hold about you.
              </li>
              <li>
                Correction: Request that we correct any inaccurate data we hold
                about you.
              </li>
              <li>Deletion: Request that we delete your personal data.</li>
              <li>
                Opt-Out: Unsubscribe from our marketing communications at any
                time by using the 'unsubscribe' link in our emails or by
                contacting us directly.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a
                className="privacy-link"
                href="mailto:connect@cioreofficial.com"
              >
                connect@cioreofficial.com
              </a>
              .
            </p>

            <h3>Children's Privacy</h3>
            <p>
              Our Site is not intended for individuals under the age of 13. We
              do not knowingly collect personal information from children under
              13.
            </p>

            <h3>Changes to This Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us. Your privacy is our concern. E-mail:{" "}
              <a
                className="privacy-link"
                href="mailto:connect@cioreofficial.com"
              >
                connect@cioreofficial.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
