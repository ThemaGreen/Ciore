import { Link } from "wouter";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <>
      <header
        className="sticky top-0 z-40 border-b border-white/10 bg-background/40 backdrop-blur"
        data-testid="nav-top"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-3"
            data-testid="group-brand"
          >
            <div
              className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 ciore-ring"
              aria-hidden="true"
              data-testid="logo-mark"
            >
              <Leaf
                className="size-4 text-[hsl(var(--accent))]"
                strokeWidth={2.25}
              />
            </div>

            <div className="leading-tight" data-testid="text-brand">
              <div className="ciore-display text-sm text-white/90">CIORÉ</div>
              <div className="text-xs text-white/55">Gaia: X</div>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-6 text-sm text-white/70 md:flex"
            data-testid="nav-links"
          >
            <a
              className="hover:text-white"
              href="/progress"
              data-testid="link-progress"
            >
              Progress
            </a>
            <a
              className="hover:text-white"
              href="/about"
              data-testid="link-about"
            >
              About
            </a>
            <a
              className="hover:text-white"
              href="/donate"
              data-testid="link-donate"
            >
              Donate
            </a>
            <a
              className="hover:text-white"
              href="/volunteer"
              data-testid="link-volunteer"
            >
              Volunteer
            </a>
          </nav>

          <div className="flex items-center gap-2" data-testid="group-cta">
            <a
              href="#waitlist"
              className="hidden text-xs text-white/70 hover:text-white md:inline"
              data-testid="link-waitlist"
            >
              Join waitlist
            </a>
            <Button
              className="ciore-ring bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90"
              data-testid="button-hero-cta"
              asChild
            >
              <a href="#waitlist">Get early access</a>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
