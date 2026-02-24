import { Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import PrivacyPolicy from "@/pages/privacy-policy";

export default function Footer() {
  return (
    <div
      className="mt-10 border-t border-white/10 pt-5 pb-2"
      data-testid="footer"
    >
      <div
        className="flex flex-col items-start justify-between gap-6 md:flex-row"
        data-testid="footer-row"
      >
        <div data-testid="footer-left">
          <div
            className="ciore-display text-sm ml-4 text-white/90"
            data-testid="text-footer-brand"
          >
            CIORÉ
          </div>
          <div
            className="mt-1 ml-4 text-xs text-white/55"
            data-testid="text-footer-sub"
          >
            Sustainable smartphones, privacy-first by design.
          </div>
        </div>

        <div
          className="flex items-center gap-4 text-xs text-white/55"
          data-testid="footer-links"
        >
          <a
            href="https://instagram.com/cioreofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-icon"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/people/Cior%C3%A9/61575434777358/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer-icon"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.tiktok.com/@cioreofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="footer-icon"
          >
            <FaTiktok size={18} />
          </a>
        </div>
        <div className="flex flex-col items-end gap-1 mr-5 text-xs text-white/45">
          <div
            className="text-xs mr-5 text-white/45"
            data-testid="text-footer-legal"
          >
            © {new Date().getFullYear()} Cioré. All rights reserved.
          </div>
          <a
            className="text-xs mr-5 text-white/45"
            href="/privacy-policy"
            data-testid="link-privacy-policy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
