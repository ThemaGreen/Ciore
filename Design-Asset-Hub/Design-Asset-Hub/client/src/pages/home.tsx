import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Leaf, Lock, SunMedium, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneScene } from "@/components/three/phone-scene";

function useLowPowerHint() {
  const [low, setLow] = useState(false);

  useEffect(() => {
    const nav = navigator as any;
    const cores =
      typeof nav?.hardwareConcurrency === "number"
        ? nav.hardwareConcurrency
        : 8;
    const mem = typeof nav?.deviceMemory === "number" ? nav.deviceMemory : 8;
    const saveData = !!nav?.connection?.saveData;

    setLow(saveData || cores <= 4 || mem <= 4);
  }, []);

  return low;
}

const FEATURES = [
  {
    key: "privacy",
    title: "Privacy first",
    icon: Lock,
    summary:
      "Designed to keep your data on-device whenever possible — and make sharing explicit.",
    details:
      "Cioré treats privacy as a product surface — not a settings screen. Gaia: X defaults to minimal collection, clear permissions, and local-first experiences that reduce data exhaust.",
  },
  {
    key: "solar",
    title: "Solar assist",
    icon: SunMedium,
    summary: "An ambient energy layer that helps extend real-world endurance.",
    details:
      "Solar assist is not a gimmick. It’s a supplementary system designed to support idle drain and light usage — making the phone feel more resilient day-to-day.",
  },
  {
    key: "modular",
    title: "Modular longevity",
    icon: Wrench,
    summary: "Repairable by design — so the phone can outlast trends.",
    details:
      "Gaia: X is conceived with modular serviceability — so replacing a worn component is the default path — not a reason to upgrade the entire device.",
  },
  {
    key: "materials",
    title: "Eco-conscious materials",
    icon: Leaf,
    summary:
      "Material choices that respect the planet — and still feel premium.",
    details:
      "Sustainability should look and feel legitimate. Cioré balances durability, repairability, and responsible sourcing while maintaining a refined finish.",
  },
] as const;

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
      data-testid="badge-pill"
    >
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="max-w-2xl"
      data-testid={`section-${eyebrow.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div
        className="ciore-display text-xs tracking-[0.18em] text-white/60"
        data-testid="text-eyebrow"
      >
        {eyebrow}
      </div>
      <h2
        className="mt-3 text-2xl font-semibold text-white md:text-3xl"
        data-testid="text-section-title"
      >
        {title}
      </h2>
      <p
        className="mt-3 text-sm leading-6 text-white/70 md:text-base"
        data-testid="text-section-description"
      >
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const lowPower = useLowPowerHint();

  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "saved">(
    "idle",
  );

  const heroVariant = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.65,
          ease: "easeOut" as const,
        },
      },
    }),
    [reduceMotion],
  );

  const onSubmitWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    const email = waitlistEmail.trim();
    const ok = /^\S+@\S+\.\S+$/.test(email);
    if (!ok) return;
    setWaitlistStatus("saved");
  };

  return (
    <div
      className="min-h-screen bg-background ciore-grid ciore-noise"
      data-testid="page-home"
    >
      <main>
        <section className="relative" data-testid="section-hero">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-[-260px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.22),transparent_65%)] blur-2xl" />
            <div className="absolute right-[-120px] top-[80px] h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)] blur-2xl" />
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-12 md:gap-8 md:px-6 md:py-16">
            <motion.div
              className="md:col-span-6"
              variants={heroVariant}
              initial="hidden"
              animate="show"
              data-testid="hero-copy"
            >
              <div
                className="flex flex-wrap items-center gap-2"
                data-testid="group-hero-pills"
              >
                <Pill>Privacy-first</Pill>
                <Pill>Solar assist</Pill>
                <Pill>Modular by design</Pill>
              </div>

              <h1
                className="mt-6 text-balance text-4xl font-semibold leading-[1.05] text-white md:text-5xl"
                data-testid="text-hero-title"
              >
                A sustainable smartphone
                <span className="text-white/70">
                  {" "}
                  that protects your privacy{" "}
                </span>
                and respects the planet.
              </h1>

              <p
                className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/70"
                data-testid="text-hero-subcopy"
              >
                Cioré Gaia: X is a premium phone concept built with intention —
                designed to last longer, share less, and feel better to own.
              </p>

              <div
                className="mt-7 flex flex-col gap-3 sm:flex-row"
                data-testid="group-hero-actions"
              >
                <Button
                  className="ciore-ring bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90"
                  data-testid="button-join-waitlist"
                  asChild
                >
                  <a href="#waitlist">
                    Join the waitlist <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  className="border border-white/10 bg-white/5 text-white hover:bg-white/8"
                  data-testid="button-learn-more"
                  asChild
                >
                  <a href="#what">Learn what Gaia: X is</a>
                </Button>
              </div>

              <div
                className="mt-8 grid grid-cols-3 gap-3"
                data-testid="grid-hero-stats"
              >
                <div
                  className="ciore-glass rounded-2xl px-4 py-3"
                  data-testid="card-stat-0"
                >
                  <div className="ciore-display text-xs text-white/55">
                    Default
                  </div>
                  <div
                    className="mt-1 text-sm font-medium text-white"
                    data-testid="text-stat-0"
                  >
                    Local-first
                  </div>
                </div>
                <div
                  className="ciore-glass rounded-2xl px-4 py-3"
                  data-testid="card-stat-1"
                >
                  <div className="ciore-display text-xs text-white/55">
                    Energy
                  </div>
                  <div
                    className="mt-1 text-sm font-medium text-white"
                    data-testid="text-stat-1"
                  >
                    Solar assist
                  </div>
                </div>
                <div
                  className="ciore-glass rounded-2xl px-4 py-3"
                  data-testid="card-stat-2"
                >
                  <div className="ciore-display text-xs text-white/55">
                    Built to
                  </div>
                  <div
                    className="mt-1 text-sm font-medium text-white"
                    data-testid="text-stat-2"
                  >
                    Be repaired
                  </div>
                </div>
              </div>

              <p
                className="mt-4 text-xs text-white/50"
                data-testid="text-hero-footnote"
              >
                The 3D model is interactive (drag/hover). If your device is in
                data-saver mode, we show a lightweight preview instead.
              </p>
            </motion.div>

            <div className="md:col-span-6" data-testid="hero-visual">
              <div className="ciore-glass ciore-ring relative overflow-hidden rounded-3xl p-4 md:p-5">
                <div
                  className="flex items-center justify-between"
                  data-testid="group-visual-topbar"
                >
                  <div
                    className="ciore-display text-xs tracking-[0.18em] text-white/60"
                    data-testid="text-visual-label"
                  >
                    DEVICE OVERVIEW
                  </div>
                  <div
                    className="text-xs text-white/60"
                    data-testid="text-visual-hint"
                  >
                    Drag to inspect
                  </div>
                </div>
                <div
                  className="mt-3 aspect-[4/5] w-full"
                  data-testid="canvas-phone"
                >
                  <PhoneScene lowPower={lowPower} />
                </div>
                <div
                  className="mt-4 grid grid-cols-3 gap-2"
                  data-testid="grid-visual-cues"
                >
                  <div
                    className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2"
                    data-testid="cue-privacy"
                  >
                    <div
                      className="flex items-center gap-2 text-xs text-white/70"
                      data-testid="text-cue-privacy"
                    >
                      <Lock className="size-4 text-[hsl(var(--primary))]" />{" "}
                      Privacy cues
                    </div>
                  </div>
                  <div
                    className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2"
                    data-testid="cue-solar"
                  >
                    <div
                      className="flex items-center gap-2 text-xs text-white/70"
                      data-testid="text-cue-solar"
                    >
                      <SunMedium className="size-4 text-[hsl(var(--accent))]" />{" "}
                      Solar assist
                    </div>
                  </div>
                  <div
                    className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2"
                    data-testid="cue-modular"
                  >
                    <div
                      className="flex items-center gap-2 text-xs text-white/70"
                      data-testid="text-cue-modular"
                    >
                      <Wrench className="size-4 text-white/70" /> Modular build
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="mt-4 flex items-center justify-between text-xs text-white/55"
                data-testid="row-visual-meta"
              >
                <div data-testid="text-visual-meta-left">
                  Concept render · optimized WebGL
                </div>
                <div
                  className="hidden sm:block"
                  data-testid="text-visual-meta-right"
                >
                  <span className="text-white/70">Tip:</span> try hover for tilt
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="what"
          className="mx-auto max-w-6xl px-4 py-14 md:px-6"
          data-testid="section-what"
        >
          <SectionHeading
            eyebrow="WHAT CIORE IS"
            title="A phone concept built like a long-term product — not a yearly upgrade."
            description="Gaia: X is Cioré’s vision for a premium smartphone that treats sustainability and privacy as first-class design constraints — without sacrificing feel, finish, or clarity."
          />

          <div
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12"
            data-testid="grid-what"
          >
            <div
              className="ciore-glass rounded-3xl p-6 md:col-span-5"
              data-testid="card-what-left"
            >
              <div
                className="ciore-display text-xs tracking-[0.18em] text-white/60"
                data-testid="text-card-label"
              >
                VALUE IN 8 SECONDS
              </div>
              <ol
                className="mt-4 space-y-3 text-sm text-white/75"
                data-testid="list-value"
              >
                <li data-testid="item-value-0">
                  <span className="text-white">1.</span> It’s a smartphone
                  (hardware + OS) with a premium feel.
                </li>
                <li data-testid="item-value-1">
                  <span className="text-white">2.</span> It minimizes data
                  exhaust by default — privacy-first.
                </li>
                <li data-testid="item-value-2">
                  <span className="text-white">3.</span> It’s designed to last:
                  modular repairability + responsible materials.
                </li>
                <li data-testid="item-value-3">
                  <span className="text-white">4.</span> Solar assist supports
                  endurance in the background.
                </li>
              </ol>
            </div>

            <div
              className="ciore-glass rounded-3xl p-6 md:col-span-7"
              data-testid="card-what-right"
            >
              <div
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                data-testid="grid-what-cards"
              >
                <div
                  className="rounded-2xl border border-white/10 bg-white/4 p-4"
                  data-testid="mini-what-privacy"
                >
                  <div
                    className="flex items-center gap-2"
                    data-testid="row-mini-privacy"
                  >
                    <Lock className="size-4 text-[hsl(var(--primary))]" />
                    <div className="ciore-display text-xs text-white/70">
                      Privacy surface
                    </div>
                  </div>
                  <div
                    className="mt-2 text-sm font-medium text-white"
                    data-testid="text-mini-privacy-title"
                  >
                    Clear permissions
                  </div>
                  <p
                    className="mt-1 text-sm text-white/65"
                    data-testid="text-mini-privacy-body"
                  >
                    Defaults that reduce tracking, plus controls that are easy
                    to understand.
                  </p>
                </div>

                <div
                  className="rounded-2xl border border-white/10 bg-white/4 p-4"
                  data-testid="mini-what-solar"
                >
                  <div
                    className="flex items-center gap-2"
                    data-testid="row-mini-solar"
                  >
                    <SunMedium className="size-4 text-[hsl(var(--accent))]" />
                    <div className="ciore-display text-xs text-white/70">
                      Ambient energy
                    </div>
                  </div>
                  <div
                    className="mt-2 text-sm font-medium text-white"
                    data-testid="text-mini-solar-title"
                  >
                    Solar assist
                  </div>
                  <p
                    className="mt-1 text-sm text-white/65"
                    data-testid="text-mini-solar-body"
                  >
                    A supplementary layer for day-to-day resilience.
                  </p>
                </div>

                <div
                  className="rounded-2xl border border-white/10 bg-white/4 p-4"
                  data-testid="mini-what-modular"
                >
                  <div
                    className="flex items-center gap-2"
                    data-testid="row-mini-modular"
                  >
                    <Wrench className="size-4 text-white/80" />
                    <div className="ciore-display text-xs text-white/70">
                      Built to repair
                    </div>
                  </div>
                  <div
                    className="mt-2 text-sm font-medium text-white"
                    data-testid="text-mini-modular-title"
                  >
                    Modular design
                  </div>
                  <p
                    className="mt-1 text-sm text-white/65"
                    data-testid="text-mini-modular-body"
                  >
                    Replace components, not the phone.
                  </p>
                </div>

                <div
                  className="rounded-2xl border border-white/10 bg-white/4 p-4"
                  data-testid="mini-what-eco"
                >
                  <div
                    className="flex items-center gap-2"
                    data-testid="row-mini-eco"
                  >
                    <Leaf className="size-4 text-[hsl(var(--accent))]" />
                    <div className="ciore-display text-xs text-white/70">
                      Responsible
                    </div>
                  </div>
                  <div
                    className="mt-2 text-sm font-medium text-white"
                    data-testid="text-mini-eco-title"
                  >
                    Eco-conscious
                  </div>
                  <p
                    className="mt-1 text-sm text-white/65"
                    data-testid="text-mini-eco-body"
                  >
                    Materials chosen to align with the mission — and feel
                    premium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="different"
          className="mx-auto max-w-6xl px-4 py-14 md:px-6"
          data-testid="section-different"
        >
          <SectionHeading
            eyebrow="WHY IT’S DIFFERENT"
            title="Less extraction. More ownership."
            description="Cioré is not trying to out-hype mainstream smartphones. The difference is in the defaults — how the device behaves when you’re not thinking about it."
          />

          <div
            className="mt-10 ciore-glass rounded-3xl p-6"
            data-testid="card-different"
          >
            <Tabs defaultValue={FEATURES[0].key} data-testid="tabs-different">
              <TabsList
                className="grid w-full grid-cols-2 gap-2 bg-transparent p-0 sm:grid-cols-4"
                data-testid="tabslist-different"
              >
                {FEATURES.map((f) => (
                  <TabsTrigger
                    key={f.key}
                    value={f.key}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 data-[state=active]:bg-white/10 data-[state=active]:text-white"
                    data-testid={`tab-${f.key}`}
                  >
                    {f.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {FEATURES.map((f) => (
                <TabsContent
                  key={f.key}
                  value={f.key}
                  className="mt-6"
                  data-testid={`panel-${f.key}`}
                >
                  <div
                    className="grid grid-cols-1 gap-4 md:grid-cols-12"
                    data-testid="grid-feature"
                  >
                    <div
                      className="md:col-span-7"
                      data-testid="col-feature-copy"
                    >
                      <div
                        className="flex items-center gap-2"
                        data-testid="row-feature-title"
                      >
                        <f.icon
                          className="size-4 text-[hsl(var(--primary))]"
                          strokeWidth={2.25}
                        />
                        <div className="ciore-display text-xs tracking-[0.18em] text-white/60">
                          {f.title}
                        </div>
                      </div>
                      <div
                        className="mt-3 text-lg font-semibold text-white"
                        data-testid="text-feature-summary"
                      >
                        {f.summary}
                      </div>
                      <p
                        className="mt-3 text-sm leading-6 text-white/70"
                        data-testid="text-feature-details"
                      >
                        {f.details}
                      </p>
                      <div
                        className="mt-5 flex flex-wrap gap-2"
                        data-testid="group-feature-tags"
                      >
                        <Pill>Designed for trust</Pill>
                        <Pill>Minimal data exhaust</Pill>
                        <Pill>Built to last</Pill>
                      </div>
                    </div>
                    <div
                      className="md:col-span-5"
                      data-testid="col-feature-visual"
                    >
                      <div
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-4"
                        data-testid="card-feature-visual"
                      >
                        <div
                          className="ciore-display text-xs tracking-[0.18em] text-white/60"
                          data-testid="text-visual-head"
                        >
                          SIGNALS
                        </div>
                        <div
                          className="mt-4 grid gap-2"
                          data-testid="grid-signals"
                        >
                          <div
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75"
                            data-testid="signal-0"
                          >
                            On-device defaults when possible
                          </div>
                          <div
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75"
                            data-testid="signal-1"
                          >
                            Explicit permission prompts
                          </div>
                          <div
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75"
                            data-testid="signal-2"
                          >
                            Repair-first hardware strategy
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section
          id="works"
          className="mx-auto max-w-6xl px-4 py-14 md:px-6"
          data-testid="section-works"
        >
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="A simple loop: local-first + explicit sharing + longevity."
            description="The concept is straightforward. We’re designing the experience so the best default is the easiest path — and the hardware is meant to be maintained, not replaced."
          />

          <div
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
            data-testid="grid-works"
          >
            <div className="ciore-glass rounded-3xl p-6" data-testid="step-0">
              <div
                className="ciore-display text-xs tracking-[0.18em] text-white/60"
                data-testid="text-step-0-label"
              >
                STEP 01
              </div>
              <div
                className="mt-3 text-lg font-semibold text-white"
                data-testid="text-step-0-title"
              >
                Default to on-device
              </div>
              <p
                className="mt-2 text-sm leading-6 text-white/70"
                data-testid="text-step-0-body"
              >
                Keep sensitive surfaces local where possible — reducing data
                exhaust without asking you to micromanage settings.
              </p>
            </div>
            <div className="ciore-glass rounded-3xl p-6" data-testid="step-1">
              <div
                className="ciore-display text-xs tracking-[0.18em] text-white/60"
                data-testid="text-step-1-label"
              >
                STEP 02
              </div>
              <div
                className="mt-3 text-lg font-semibold text-white"
                data-testid="text-step-1-title"
              >
                Make sharing explicit
              </div>
              <p
                className="mt-2 text-sm leading-6 text-white/70"
                data-testid="text-step-1-body"
              >
                Clear prompts, readable permissions, and simple controls so
                sharing is a deliberate choice — not a hidden default.
              </p>
            </div>
            <div className="ciore-glass rounded-3xl p-6" data-testid="step-2">
              <div
                className="ciore-display text-xs tracking-[0.18em] text-white/60"
                data-testid="text-step-2-label"
              >
                STEP 03
              </div>
              <div
                className="mt-3 text-lg font-semibold text-white"
                data-testid="text-step-2-title"
              >
                Maintain the device
              </div>
              <p
                className="mt-2 text-sm leading-6 text-white/70"
                data-testid="text-step-2-body"
              >
                Modular serviceability means the phone can evolve through
                repairs and upgrades instead of being discarded.
              </p>
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="mx-auto max-w-6xl px-4 py-14 md:px-6"
          data-testid="section-waitlist"
        >
          <div
            className="ciore-glass ciore-ring rounded-3xl p-6 md:p-8"
            data-testid="card-waitlist"
          >
            <div
              className="grid grid-cols-1 gap-8 md:grid-cols-12"
              data-testid="grid-waitlist"
            >
              <div className="md:col-span-7" data-testid="col-waitlist-copy">
                <div
                  className="ciore-display text-xs tracking-[0.18em] text-white/60"
                  data-testid="text-waitlist-eyebrow"
                >
                  EARLY ACCESS
                </div>
                <h3
                  className="mt-3 text-2xl font-semibold text-white"
                  data-testid="text-waitlist-title"
                >
                  Join the Cioré waitlist
                </h3>
                <p
                  className="mt-3 text-sm leading-6 text-white/70"
                  data-testid="text-waitlist-body"
                >
                  Get product updates, prototype milestones, and early
                  opportunities to shape Gaia: X.
                </p>
              </div>

              <div className="md:col-span-5" data-testid="col-waitlist-form">
                <form
                  onSubmit={onSubmitWaitlist}
                  className="space-y-3"
                  data-testid="form-waitlist"
                >
                  <label
                    className="text-xs text-white/70"
                    htmlFor="waitlist-email"
                    data-testid="label-email"
                  >
                    Email
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => {
                      setWaitlistEmail(e.target.value);
                      setWaitlistStatus("idle");
                    }}
                    placeholder="you@domain.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/50"
                    data-testid="input-waitlist-email"
                    autoComplete="email"
                  />
                  <Button
                    type="submit"
                    className="w-full ciore-ring bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90"
                    data-testid="button-waitlist-submit"
                  >
                    Request early access
                  </Button>

                  <div
                    className="min-h-[20px] text-xs text-white/55"
                    data-testid="status-waitlist"
                  >
                    {waitlistStatus === "saved"
                      ? "Saved. We’ll reach out with updates."
                      : ""}
                  </div>

                  <p
                    className="text-xs text-white/45"
                    data-testid="text-waitlist-note"
                  >
                    We’ll only use your email for Cioré updates. No spam.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-6xl px-4 pb-20 md:px-6"
          data-testid="section-faq"
        >
          <SectionHeading
            eyebrow="QUESTIONS"
            title="Clear answers, no hype."
            description="Cioré is building trust through clarity. Here’s what people typically ask first."
          />

          <div
            className="mt-10 ciore-glass rounded-3xl p-2"
            data-testid="card-faq"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              data-testid="accordion-faq"
            >
              <AccordionItem value="item-1" data-testid="faq-0">
                <AccordionTrigger data-testid="button-faq-0">
                  Is Gaia: X available today?
                </AccordionTrigger>
                <AccordionContent data-testid="text-faq-0">
                  Gaia: X is currently a concept and prototyping effort. The
                  waitlist helps us share progress, validate priorities, and
                  invite early supporters into the process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" data-testid="faq-1">
                <AccordionTrigger data-testid="button-faq-1">
                  What does “solar assist” mean?
                </AccordionTrigger>
                <AccordionContent data-testid="text-faq-1">
                  Solar assist is a supplementary energy layer intended to
                  support endurance in the background — especially during idle
                  time and light usage. It’s designed to be helpful, not
                  performative.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" data-testid="faq-2">
                <AccordionTrigger data-testid="button-faq-2">
                  How does privacy show up in the product?
                </AccordionTrigger>
                <AccordionContent data-testid="text-faq-2">
                  By default behavior: fewer hidden transfers, clearer
                  permissions, and a preference for on-device handling when
                  possible. Privacy is treated as a product surface, not an
                  afterthought.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" data-testid="faq-3">
                <AccordionTrigger data-testid="button-faq-3">
                  Will the phone be repairable?
                </AccordionTrigger>
                <AccordionContent data-testid="text-faq-3">
                  That’s a core principle. Gaia: X is conceived around modular
                  serviceability — the kind of design where replacement parts
                  make sense and ownership lasts longer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <footer
            className="mt-12 border-t border-white/10 pt-8"
            data-testid="footer"
          >
            <div
              className="flex flex-col items-start justify-between gap-6 md:flex-row"
              data-testid="footer-row"
            >
              <div data-testid="footer-left">
                <div
                  className="ciore-display text-sm text-white/90"
                  data-testid="text-footer-brand"
                >
                  CIORÉ
                </div>
                <div
                  className="mt-1 text-xs text-white/55"
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
                  href="#waitlist"
                  className="hover:text-white"
                  data-testid="link-footer-waitlist"
                >
                  Waitlist
                </a>
                <a
                  href="#what"
                  className="hover:text-white"
                  data-testid="link-footer-what"
                >
                  What it is
                </a>
                <a
                  href="#different"
                  className="hover:text-white"
                  data-testid="link-footer-different"
                >
                  Why different
                </a>
              </div>

              <div
                className="text-xs text-white/45"
                data-testid="text-footer-legal"
              >
                © {new Date().getFullYear()} Cioré. All rights reserved.
              </div>
            </div>
          </footer>
        </section>
      </main>

      <div className="sr-only" data-testid="sr-only-routing">
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
