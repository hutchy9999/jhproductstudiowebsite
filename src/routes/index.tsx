import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import quicktradeScreenshot from "@/assets/quicktrade-screenshot.jpg.asset.json";
import tastematchScreenshot from "@/assets/tastematch-screenshot.jpg.asset.json";
import vocoHero from "@/assets/voco-hero.jpg.asset.json";
import jhLogo from "@/assets/jh-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JH Product Studio, Contractor Product Manager" },
      {
        name: "description",
        content:
          "James Hutchinson. Product Manager based in Manchester. Discovery to delivery, shipped iOS apps and web platforms.",
      },
      { property: "og:title", content: "JH Product Studio, Contractor Product Manager" },
      {
        property: "og:description",
        content:
          "James Hutchinson. Product Manager based in Manchester. Discovery to delivery, shipped iOS apps and web platforms.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const EMAIL = "james@jhproductstudio.co.uk";
const PHONE_DISPLAY = "07875 104 273";
const PHONE_HREF = "+447875104273";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span className="text-primary">{n}</span>
      <span className="h-px w-8 bg-border" />
      <span>{children}</span>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Wordmark() {
  return (
    <a href="#top" className="group flex items-center" aria-label="JH Product Studio">
      <img src={jhLogo.url} alt="JH Product Studio" className="h-20 w-auto md:h-[6.25rem]" />
    </a>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-[6.25rem] max-w-6xl items-center justify-between px-6 md:h-[7.5rem]">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${EMAIL}`}
          className="hidden rounded-full bg-primary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition hover:opacity-90 md:inline-flex"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-sans text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.98] tracking-tight"
        >
          Product Manager
          <br />
          who turns <span className="italic text-primary">ideas</span>
          <br />
          into working products.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          I&rsquo;m James, a Product Manager based in the North West. I combine product thinking, customer discovery and
          hands-on AI development to take ideas from discovery to working solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Start a conversation
            <span aria-hidden>&rarr;</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
          >
            See selected work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    {
      k: "01",
      t: "Ship with AI",
      d: "Hands on with Claude Code, Antigravity and agent workflows. I prototype features instead of just writing specs.",
    },
    {
      k: "02",
      t: "Discovery to delivery",
      d: "Research, roadmap, backlog, release. I own the full cycle and keep engineers, design and stakeholders in sync.",
    },
    {
      k: "03",
      t: "Certified Scrum PO",
      d: "Built across B2B, B2C, SaaS, fintech and e-commerce. Agile by default, pragmatic in practice.",
    },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/20 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        {items.map((i, idx) => (
          <Reveal key={i.k} delay={idx * 0.08}>
            <div>
              <div className="font-mono text-xs text-primary">{i.k}</div>
              <h3 className="mt-3 font-sans text-2xl font-semibold">{i.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

type Work = {
  name: string;
  tag: string;
  summary: string;
  audience: string;
  problem: string;
  tech: string[];
};

const work: Work[] = [
  {
    name: "TasteMatch",
    tag: "B2C, iOS, live on the App Store",
    summary: "An AI menu scanner that tells you exactly what to order, based on a taste profile it learns over time.",
    audience:
      "Anyone who eats out and freezes at a forty item menu, especially people with allergies or strong food preferences.",
    problem:
      "People either pick something safe they have had before or gamble and regret it. TasteMatch learns your diet, allergens and spice tolerance, then ranks every dish with a match score, wildcards and dishes to skip.",
    tech: ["Expo", "React Native", "tRPC", "Supabase", "RevenueCat"],
  },
  {
    name: "QuickTrade",
    tag: "B2B, iOS + Web, live on the App Store",
    summary:
      "A job management app for independent tradespeople, with a public booking link that automates the flow from enquiry to a calendar blocked job.",
    audience: "Self employed tradespeople juggling leads from voicemail, WhatsApp and Facebook without a system.",
    problem:
      "Tradespeople lose work because callbacks slip. QuickTrade gives each tradesperson a personal booking link. Customers submit a job, the tradesperson gets a push notification, and the calendar blocks the time automatically so nothing double books.",
    tech: ["React Native", "Vite + React", "Supabase", "Clerk", "Expo Push", "EAS"],
  },
  {
    name: "Voco",
    tag: "B2B, Web platform",
    summary:
      "A conversational language learning platform where an AI tutor adapts to your level, topics and pace in real time.",
    audience: "Language learners who want practical speaking practice without booking a human tutor.",
    problem:
      "Most learners plateau at intermediate because speaking is scary. Voco removes the friction with an AI tutor that never judges, adapts to the user's level, shows progress over time and shapes each session around their interests.",
    tech: ["React", "Hono", "Firestore", "Claude", "ElevenLabs", "Deepgram"],
  },
];

function WorkSection() {
  return (
    <section id="work" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel n="03">Selected work</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-tight md:text-5xl">
            Three products I took from a blank page to shipped, using AI tooling end to end.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-24">
          {work.map((w, i) => (
            <Reveal key={w.name} delay={0.05}>
              <article
                className={`grid gap-10 md:grid-cols-12 ${
                  ["TasteMatch", "QuickTrade", "Voco"].includes(w.name) ? "cursor-pointer" : ""
                }`}
                role={["TasteMatch", "QuickTrade", "Voco"].includes(w.name) ? "link" : undefined}
                tabIndex={["TasteMatch", "QuickTrade", "Voco"].includes(w.name) ? 0 : undefined}
                aria-label={
                  w.name === "TasteMatch"
                    ? "Open TasteMatch on the App Store"
                    : w.name === "QuickTrade"
                      ? "Open QuickTrade on the App Store"
                      : w.name === "Voco"
                        ? "Open the Voco website"
                        : undefined
                }
                onClick={
                  ["TasteMatch", "QuickTrade", "Voco"].includes(w.name)
                    ? () =>
                        window.open(
                          w.name === "TasteMatch"
                            ? "https://apps.apple.com/gb/app/tastematch-menu-scanner/id6758268491"
                            : w.name === "QuickTrade"
                              ? "https://apps.apple.com/us/app/quicktrade-uk/id6760757208"
                              : "https://www.speakwithvoco.com/",
                          "_blank",
                          "noopener,noreferrer",
                        )
                    : undefined
                }
                onKeyDown={
                  ["TasteMatch", "QuickTrade", "Voco"].includes(w.name)
                    ? (e) => {
                        if (e.key === "Enter") {
                          window.open(
                            w.name === "TasteMatch"
                              ? "https://apps.apple.com/gb/app/tastematch-menu-scanner/id6758268491"
                              : w.name === "QuickTrade"
                                ? "https://apps.apple.com/us/app/quicktrade-uk/id6760757208"
                                : "https://www.speakwithvoco.com/",
                            "_blank",
                            "noopener,noreferrer",
                          );
                        }
                      }
                    : undefined
                }
              >
                <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  {w.name === "Voco" ? (
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/60 to-background">
                      <img
                        src={vocoHero.url}
                        alt="Voco language learning platform"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : w.name === "TasteMatch" ? (
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/60 to-background">
                      <img
                        src={tastematchScreenshot.url}
                        alt="TasteMatch app on the App Store"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : w.name === "QuickTrade" ? (
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/60 to-background">
                      <img
                        src={quicktradeScreenshot.url}
                        alt="QuickTrade app on the App Store"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/60 to-background p-8">
                      <div className="absolute inset-x-8 top-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        <span>{w.name.toLowerCase()}.app</span>
                        <span className="text-primary">live</span>
                      </div>
                      <div className="flex h-full flex-col justify-end">
                        <div className="font-sans text-6xl font-bold leading-none text-foreground/90">{w.name}</div>
                        <div className="mt-4 h-px w-16 bg-primary" />
                        <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          {w.tag}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="font-sans text-3xl font-semibold md:text-4xl">{w.name}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-foreground/90">{w.summary}</p>
                  <dl className="mt-8 space-y-6">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                        Who it&rsquo;s for
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.audience}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                        Problem it solves
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Built with</dt>
                      <dd className="mt-3 flex flex-wrap gap-2">
                        {w.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] text-foreground/80"
                          >
                            {t}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Ian Dixon",
      role: "Digital, Creative & Tech Sector Growth Specialist",
      quote:
        "James is a talented, creative, and curious Product Manager. All the qualities needed to successfully deliver on product development. His tech knowledge and hands-on approach made working with him a genuine pleasure.",
    },
    {
      name: "Paul Dodd",
      role: "Fractional Head of Marketing for AI Safety / EA + mission-driven tech",
      quote:
        "I worked with James on a couple of projects at Nova and was always thoroughly impressed by his thorough and pragmatic approach to not just building great products, but successful businesses. A rare find, with the commercial and technical understanding, and skills needed, to excel in the tech startup environment!",
    },
    {
      name: "Chris Alcock",
      role: "Experienced Technology Leader",
      quote:
        "James is a passionate, committed and organised product manager, who is like an information sponge, always learning, always looking to expand his skills. A valuable trait. It was a pleasure working with him. He is a valuable addition to any product team.",
    },
    {
      name: "Liam Burns",
      role: "Lead Product Manager",
      quote:
        "James has a wonderful trait in that he's not afraid to ask questions. He wouldn't assume, he'd take ownership of his work and make you laugh along the way. It was great to hear his perspective and to see him integrate so well into the team. He'd be a great asset to any company.",
    },
    {
      name: "Richard Dean",
      role: "Product Leader | Coach",
      quote:
        'I worked with and managed James for around a year, he is a hardworking and passionate member of the team. James is curious about the reason "why?" in all things. This curiosity allows him to gain a deep understanding of the needs of the businesses and shareholders he supports. James picks up new skills quickly and applies them in his work immediately and adeptly. James is enthusiastic and friendly, he would be a great fit in many teams. James is a skilled Product Manager with great potential.',
    },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel n="01">Testimonials</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-tight md:text-5xl">
            What people say about working with me.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition hover:border-primary/60">
                <div className="mb-6 font-sans text-4xl leading-none text-primary/30">&ldquo;</div>
                <p className="flex-1 text-base leading-relaxed text-foreground/90">{t.quote}</p>
                <div className="mt-8 border-t border-border pt-6">
                  <div className="font-sans text-lg font-semibold">{t.name}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceStrip() {
  const items = [
    {
      metric: "30%",
      label: "conversion lift",
      body: "Regatta Group. Ran structured A/B tests across product pages that pushed CVR up by as much as 30 percent, across fifteen sites and three brands.",
    },
    {
      metric: "14",
      label: "Software products shipped",
      body: "Shipped across B2C, B2B, SaaS, finance and eCommerce. Also includes software across both web and native applications, balancing brand needs against tight deadlines.",
    },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel n="02">Recent numbers</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-tight">
            Outcomes from the last few years in permanent product roles.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.metric} delay={i * 0.08}>
              <div className="border-t border-border pt-6">
                <div className="font-sans text-6xl font-bold text-primary">{it.metric}</div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {it.label}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-foreground/85">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      name: "Fractional PM",
      length: "Ongoing",
      body: "I embed with your team, own a product area, run the ceremonies and unblock delivery. Think of it as a senior PM on tap.",
      for: "Teams that need product leadership now, not in three months.",
    },
    {
      name: "Zero to One Build",
      length: "Project based",
      body: "I take a product from nothing to a shipped MVP, using AI tooling to compress the timeline. Discovery, design partners, build and launch, delivered end to end.",
      for: "Companies validating a new bet outside the core roadmap.",
    },
  ];
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel n="04">How we can work together</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-tight md:text-5xl">
            Two ways to hire me, sized to what you actually need.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition hover:border-primary/60">
                <div className="flex items-center justify-end">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {s.length}
                  </span>
                </div>
                <h3 className="mt-6 font-sans text-3xl font-semibold">{s.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">{s.body}</p>
                <div className="mt-8 border-t border-border pt-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Good fit for
                  </div>
                  <p className="mt-2 text-sm text-foreground/80">{s.for}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const tools = ["Claude Code", "Antigravity", "Jira", "Confluence", "Figma", "Notion", "GA4", "Mixpanel"];
  return (
    <section id="about" className="border-y border-border/60 bg-secondary/20 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel n="05">About</SectionLabel>
          <h2 className="mt-6 font-sans text-4xl font-semibold leading-tight">
            Shipped across every stage, from discovery to the App Store.
          </h2>
        </div>
        <div className="space-y-6 md:col-span-8">
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/90">
              I&rsquo;ve worked across B2C, B2B, SaaS, fintech and e-commerce. Group Product Owner at Regatta, Product
              Owner on the mobile app at Interactive Investor, and Product Manager at Nova, a venture builder in
              Liverpool where I ran two agile teams at once.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Since the AI tooling caught up, I&rsquo;ve been building solo. Two native iOS apps and one web platform,
              shipped end to end. I know what it takes to move a real product forward because I&rsquo;m doing it every
              week.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Based in Manchester. Certified Scrum Product Owner. Available remote across the UK, and on site when
              it&rsquo;s the right call.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 border-t border-border pt-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Tools I reach for
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[11px] text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel n="06">Contact</SectionLabel>
          <h2 className="mt-8 font-sans text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tight">
            Got a product you&rsquo;re trying to move?
            <br />
            <span className="italic text-primary">Let&rsquo;s talk.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <Reveal>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Email</div>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 block break-all font-sans text-2xl font-medium text-foreground transition hover:text-primary md:text-3xl"
              >
                {EMAIL}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Phone</div>
              <a
                href={`tel:${PHONE_HREF}`}
                className="mt-3 block font-sans text-2xl font-medium text-foreground transition hover:text-primary md:text-3xl"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-16 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Based in Manchester. Available in the North West and remote. I usually reply within a working day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
        <Wordmark />
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          &copy; {new Date().getFullYear()} James Hutchinson. All rights reserved.
        </div>
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <a href={`mailto:${EMAIL}`} className="transition hover:text-foreground">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/jameshutchinson92/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Testimonials />
        <ExperienceStrip />
        <Pillars />
        <WorkSection />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
