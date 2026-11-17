import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import quicktradeScreenshot from "@/assets/quicktrade-screenshot.jpg";
import tastematchScreenshot from "@/assets/tastematch-screenshot.jpg";
import vocoHero from "@/assets/voco-hero.jpg";
import jhLogo from "@/assets/jh-logo.png";
import feedbackBrainDashboard from "@/assets/feedback-brain-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "James Hutchinson, Product Manager | JH Product Studio" },
      {
        name: "description",
        content:
          "Product manager shipping across B2B, B2C, SaaS and fintech. I work with engineering, design, marketing and QA to keep products on track and everyone aligned.",
      },
      { property: "og:title", content: "James Hutchinson, Product Manager | JH Product Studio" },
      {
        property: "og:description",
        content:
          "Product manager shipping across B2B, B2C, SaaS and fintech. I work with engineering, design, marketing and QA to keep products on track and everyone aligned.",
      },
      { property: "og:url", content: "https://jhproductstudio.co.uk/" },
    ],
    links: [{ rel: "canonical", href: "https://jhproductstudio.co.uk/" }],
  }),
  component: Home,
});

const EMAIL = "james@jhproductstudio.co.uk";
const PHONE_DISPLAY = "07875 104 273";
const PHONE_HREF = "+447875104273";

const nav = [
  { label: "Outcomes", href: "#outcomes" },
  { label: "Work", href: "#work" },
  { label: "AI", href: "#ai" },
  { label: "How I work", href: "#services" },
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
      <img src={jhLogo} alt="JH Product Studio" className="h-20 w-auto md:h-[6.25rem]" />
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
          delivering
          <br />
          <span className="italic text-primary">measurable results.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          I&rsquo;m James, a Product Manager and Product Owner based in the North West. I lead agile delivery with
          engineering teams across e-commerce and investing, and I build AI-powered products of my own.
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

type Decision = { title: string; body: string };

type Work = {
  name: string;
  category: string;
  tag: string;
  summary: string;
  audience: string;
  problem: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  href?: string;
  linkLabel?: string;
  deepDive?: {
    heading: string;
    intro: string;
    decisions: Decision[];
    flow: string;
    stack: { name: string; role: string }[];
  };
};

const work: Work[] = [
  {
    name: "Feedback Brain",
    category: "SaaS",
    tag: "B2B SaaS, web, live with Free and Pro plans",
    summary:
      "A product prioritisation platform that turns scattered customer feedback into scored, ranked product decisions, built by a product manager for product managers.",
    audience:
      "Product managers and small product teams who collect feedback from support, email and interviews but have no time to tag it, weigh it and decide what to build first.",
    problem:
      "Feedback lives in spreadsheets and inboxes, so prioritisation ends up driven by whoever shouted last. Feedback Brain tags and scores each item with AI, learns the context of your website and analytics, and ranks themes by frequency and impact so the next thing to build is obvious.",
    tech: ["React", "Supabase", "Gemini 2.5 Flash", "Firecrawl", "Stripe"],
    image: feedbackBrainDashboard,
    imageAlt: "Feedback Brain dashboard showing prioritised customer feedback",
    href: "https://feedback-brain.com/",
    linkLabel: "Open the Feedback Brain website",
    deepDive: {
      heading: "Product and technical decisions behind it",
      intro:
        "The decisions that shaped Feedback Brain, including what the AI is trusted to do, what code does instead, and what I left out on purpose.",
      decisions: [
        {
          title: "AI judges each item, code does the ranking",
          body: "The model assigns a 1 to 5 impact score, sentiment, tags and a summary for each piece of feedback. Everything after that is plain code: a database trigger keeps a running weighted average per theme, and priority is frequency multiplied by average impact. Keeping the ranking deterministic means results are explainable and cheap to recompute.",
        },
        {
          title: "Structured output, not free text",
          body: "Every analysis is forced through a strict schema (summary, 1 to 4 tags, sentiment, integer impact, reasoning), and the database rejects anything outside it. The AI can be wrong, but it can never break the product with a malformed answer.",
        },
        {
          title: "Context changes the score",
          body: "The product crawls up to ten pages of the customer's site, and can read an analytics screenshot with a vision model. High traffic or high bounce rate pages push the impact score up, and low traffic areas pull it down. Feedback is judged against where users actually struggle, not in isolation.",
        },
        {
          title: "Data separation enforced in the database",
          body: "Every table carries a user ID with row level security, so one customer can never read another's feedback, even through a direct query. Plan limits (websites and feedback items) are also enforced in the database, not just hidden in the interface.",
        },
        {
          title: "Free and Pro plans with real billing",
          body: "Two tiers with different limits, and subscription billing built end to end on Stripe: checkout, customer portal and webhooks for upgrades and cancellations. Pricing was set to be low friction for individual product managers.",
        },
        {
          title: "What I chose not to build yet",
          body: "No Jira, Slack or Zendesk integrations, no live analytics sync, no team workspaces and no emailed digests. Version one proves the single-user loop of feedback in, a ranked decision out, before adding integration cost.",
        },
      ],
      flow: "Browser (React) → secure serverless function → AI model → Postgres database → dashboard",
      stack: [
        {
          name: "React, Vite and Tailwind",
          role: "The web app and dashboard. TanStack Query handles data fetching, and the CSV and Excel import is parsed in the browser.",
        },
        {
          name: "Supabase Postgres",
          role: "Stores feedback, themes, website context and subscriptions. Triggers update theme statistics, and row level security separates each customer's data.",
        },
        {
          name: "Supabase Auth and Storage",
          role: "Handles sign-in and sessions, and keeps uploaded screenshots in per-user folders.",
        },
        {
          name: "Supabase Edge Functions",
          role: "Serverless functions that run the AI analysis, weekly digest, website scan and billing logic, so no secrets reach the browser.",
        },
        {
          name: "Gemini 2.5 Flash",
          role: "The AI model, reached through an AI gateway. It tags and scores feedback, reads analytics screenshots with vision, and writes the weekly digest.",
        },
        {
          name: "Firecrawl API",
          role: "Crawls up to ten pages of a customer's site (two levels deep) so the AI understands what the product actually does.",
        },
        {
          name: "Stripe",
          role: "Checkout, customer portal and subscription webhooks, with signature verification so only genuine Stripe events change a plan.",
        },
      ],
    },
  },
  {
    name: "TasteMatch",
    category: "Consumer app",
    tag: "B2C, iOS, live on the App Store",
    summary: "An AI menu scanner that tells you exactly what to order, based on a taste profile it learns over time.",
    audience:
      "Anyone who eats out and freezes at a forty item menu, especially people with allergies or strong food preferences.",
    problem:
      "People either pick something safe they have had before or gamble and regret it. TasteMatch learns your diet, allergens and spice tolerance, then ranks every dish with a match score, wildcards and dishes to skip.",
    tech: ["Expo", "React Native", "tRPC", "Supabase", "RevenueCat"],
    image: tastematchScreenshot,
    imageAlt: "TasteMatch app on the App Store",
    href: "https://apps.apple.com/gb/app/tastematch-menu-scanner/id6758268491",
    linkLabel: "Open TasteMatch on the App Store",
  },
  {
    name: "QuickTrade",
    category: "Mobile app",
    tag: "B2B, iOS + Web, live on the App Store",
    summary:
      "A job management app for independent tradespeople, with a public booking link that automates the flow from enquiry to a calendar blocked job.",
    audience: "Self employed tradespeople juggling leads from voicemail, WhatsApp and Facebook without a system.",
    problem:
      "Tradespeople lose work because callbacks slip. QuickTrade gives each tradesperson a personal booking link. Customers submit a job, the tradesperson gets a push notification, and the calendar blocks the time automatically so nothing double books.",
    tech: ["React Native", "Vite + React", "Supabase", "Clerk", "Expo Push", "EAS"],
    image: quicktradeScreenshot,
    imageAlt: "QuickTrade app on the App Store",
    href: "https://apps.apple.com/us/app/quicktrade-uk/id6760757208",
    linkLabel: "Open QuickTrade on the App Store",
  },
  {
    name: "Voco",
    category: "Web platform",
    tag: "B2B, Web platform",
    summary:
      "A conversational language learning platform where an AI tutor adapts to your level, topics and pace in real time.",
    audience: "Language learners who want practical speaking practice without booking a human tutor.",
    problem:
      "Most learners plateau at intermediate because speaking is scary. Voco removes the friction with an AI tutor that never judges, adapts to the user's level, shows progress over time and shapes each session around their interests.",
    tech: ["React", "Hono", "Firestore", "Claude", "ElevenLabs", "Deepgram"],
    image: vocoHero,
    imageAlt: "Voco language learning platform",
    href: "https://www.speakwithvoco.com/",
    linkLabel: "Open the Voco website",
  },
];

function WorkSection() {
  return (
    <section id="work" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel n="03">Selected work</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-tight md:text-5xl">
            Four products I took from a blank page to shipped, using AI tooling end to end.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-24">
          {work.map((w, i) => {
            return (
              <Reveal key={w.name} delay={0.05}>
                <article className="grid gap-10 md:grid-cols-12">
                  <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <a
                      href={w.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={w.linkLabel}
                      className="relative block overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/60 to-background transition hover:border-primary/60"
                    >
                      <img src={w.image} alt={w.imageAlt} className="h-full w-full object-contain" />
                    </a>
                  </div>

                  <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <span className="inline-block rounded-full border border-primary/50 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                      {w.category}
                    </span>
                    <h3 className="mt-4 font-sans text-3xl font-semibold md:text-4xl">{w.name}</h3>
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

                {w.deepDive && (
                  <div className="mt-14 rounded-2xl border border-border bg-secondary/20 p-8 md:p-10">
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                      Behind the product
                    </div>
                    <h4 className="mt-3 font-sans text-2xl font-semibold md:text-3xl">{w.deepDive.heading}</h4>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {w.deepDive.intro}
                    </p>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                      {w.deepDive.decisions.map((d) => (
                        <div key={d.title} className="rounded-xl border border-border bg-card p-6">
                          <h5 className="font-sans text-lg font-semibold leading-snug">{d.title}</h5>
                          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{d.body}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-14 border-t border-border pt-10">
                      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                        Under the hood
                      </div>
                      <h4 className="mt-3 font-sans text-2xl font-semibold">What each service does</h4>
                      <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                        {w.deepDive.flow}
                      </p>
                      <dl className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
                        {w.deepDive.stack.map((t) => (
                          <div key={t.name} className="border-l border-primary/40 pl-4">
                            <dt className="font-sans text-base font-semibold">{t.name}</dt>
                            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.role}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
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
      body: "Regatta Group. Ran a programme of A/B tests on product pages across up to fifteen sites and three brands. One test lifted conversion from product page to completed purchase from 2.3% to 3.0%, a 30% relative improvement.",
    },
    {
      metric: "14",
      label: "Software products shipped",
      body: "Shipped across B2C, B2B, finance and eCommerce. Also includes software across both web and native applications, balancing brand needs against tight deadlines.",
    },
  ];
  return (
    <section id="outcomes" className="border-y border-border/60 bg-secondary/20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel n="02">Outcomes</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-tight">
            Outcomes from the last few years in product roles.
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

        <Reveal>
          <div className="mt-20 rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Case study</div>
            <h3 className="mt-3 max-w-3xl font-sans text-2xl font-semibold leading-tight md:text-3xl">
              Product page experiments at Regatta Group
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A programme of experiments to raise the conversion rate from viewing a product display page to
              completing a transaction, run across Regatta Group&rsquo;s sites. Tests ran on all or some of the
              fifteen sites, depending on which region each one was relevant for.
            </p>

            <div className="mt-10 grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Product page to purchase
                </div>
                <div className="mt-4 flex items-baseline gap-3 font-sans font-bold">
                  <span className="text-4xl text-foreground/60">2.3%</span>
                  <span aria-hidden className="text-2xl text-primary">
                    &rarr;
                  </span>
                  <span className="text-5xl text-primary">3.0%</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">A 30% relative increase in conversion.</p>
              </div>

              <dl className="space-y-6 md:col-span-8">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">The insight</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    On mobile, the most important product information was sitting below the fold. Most visitors
                    never saw it and left.
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">The test</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    I rearranged the product page so the most relevant features appeared first. It ran as a 50/50
                    A/B test for six weeks.
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                    What I had to manage
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Stock availability, so the products in the test stayed in stock for the full six weeks, and
                    traffic levels, so the test would collect enough data to reach a statistically valid result.
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                    Other experiments in the programme
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="text-foreground/90">Video alongside images.</span> A zero to one improvement,
                    as many products only had photos.{" "}
                    <span className="text-foreground/90">Image thumbnails below the main image.</span> Visitors
                    could preview every image at a glance, without clicking left and right through the gallery.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BuildingWithAI() {
  const pipeline = [
    { step: "Listen", tool: "Deepgram", d: "Live speech to text, shown as the learner speaks." },
    { step: "Repair", tool: "Claude Haiku 4.5", d: "Fixes mishearings so the tutor replies to what they meant." },
    { step: "Think", tool: "Claude Sonnet 5.5", d: "The tutor's brain: learner profile plus live topic research." },
    { step: "Speak", tool: "ElevenLabs", d: "Human-sounding voices: 4 per language, 5 languages." },
    { step: "Review", tool: "Claude Sonnet 4.6", d: "After the session: mistake feedback, built for accuracy." },
  ];
  const decisions = [
    { t: "Fast where it feels live, accurate where it teaches", d: "Quick models for the live transcript, a slower and more accurate one for feedback." },
    { t: "Forgiving by design", d: "Small errors are tolerated mid-conversation, so learners stay motivated." },
    { t: "A learner profile that improves itself", d: "Strengths, weak spots and interests feed back into every session." },
    { t: "Grounded in research, not guesswork", d: "Language learning psychology I researched is retrieved by the tutor in the moment." },
    { t: "Analytics I built myself", d: "A custom admin panel for funnels, friction, feature use and conversation length, alongside Hotjar." },
  ];
  const process = [
    { t: "Talk to users, then check the data", d: "Customer calls and messages, compared with funnels and my own walkthroughs." },
    { t: "Mock it up first", d: "Claude Opus mocks up each feature on the live product before anything is built." },
    { t: "Specify, then plan", d: "User stories and acceptance criteria, then an implementation plan for the existing codebase." },
    { t: "One master document per project", d: "Every change and the reason for it, so each new agent starts with full context." },
    { t: "QA after every change", d: "Claude tests desktop and mobile, then I test on staging before it reaches GitHub." },
    { t: "Local, staging, live", d: "Releases tracked in GitHub, so I can roll back when needed." },
  ];
  return (
    <section id="ai" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel n="04">Building with AI</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-tight md:text-5xl">
            How I design AI into products, and how I build them with AI agents.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            I use AI as a thought partner, for rapid mockups and for implementation, and I keep the final say on what
            gets built.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-border pt-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Case study</div>
            <h3 className="mt-3 max-w-3xl font-sans text-3xl font-semibold md:text-4xl">Voco: an AI conversational language learning platform based on psychology</h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              What happens in one conversation, and the choices behind it.
            </p>
            <div className="mt-8 grid gap-x-6 gap-y-6 md:grid-cols-5">
              {pipeline.map((p, i) => (
                <div key={p.step} className="border-l-2 border-primary/60 pl-4">
                  <div className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-1 font-sans text-lg font-semibold">{p.step}</div>
                  <div className="font-mono text-[11px] text-foreground/70">{p.tool}</div>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
            <ul className="mt-10 grid gap-x-12 gap-y-5 md:grid-cols-2">
              {decisions.map((d) => (
                <li key={d.t} className="text-sm leading-snug">
                  <span className="font-semibold text-foreground">{d.t}.</span>{" "}
                  <span className="text-muted-foreground">{d.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-border pt-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              How I ship with AI agents
            </div>
            <h3 className="mt-3 max-w-2xl font-sans text-2xl font-semibold md:text-3xl">
              AI agents move fast. I review every mockup and make the final call.
            </h3>
            <ul className="mt-8 grid gap-x-12 gap-y-5 md:grid-cols-2">
              {process.map((p, i) => (
                <li key={p.t} className="flex gap-4 text-sm leading-snug">
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="font-semibold text-foreground">{p.t}.</span>{" "}
                    <span className="text-muted-foreground">{p.d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const ways = [
    {
      tag: "Dev, UX, marketing, content, QA",
      name: "Work with the whole team",
      body: "Most of my week is spent with the people building and selling the product. Engineers, designers, marketing, content and QA all see different risks, so I try to get those views into the same conversation early, while changing course is still cheap.",
    },
    {
      tag: "Roadmap, scope, dates",
      name: "On track and in scope",
      body: "I hold the plan, the priorities and the trade offs that come with them. If something is going to slip or grow beyond what we agreed, the people who need to know hear it from me the week it is at risk, not the week it is due.",
    },
    {
      tag: "Stakeholders, updates, reviews",
      name: "Everyone knows where things stand",
      body: "I keep stakeholders updated in plain English, so nobody has to chase a status report and nobody learns something important at a review. Keeping people aligned is mostly just talking to them often enough.",
    },
  ];
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel n="05">How I work</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-tight md:text-5xl">
            I keep the team, the plan and the stakeholders in step.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The last few years have been spent sitting between engineers, design, marketing, content and QA,
            turning a rough idea into something shipped. The job is rarely the roadmap on its own. It is keeping
            everyone pointed at the same thing, and being honest when it moves.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ways.map((w, i) => (
            <Reveal key={w.name} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition hover:border-primary/60">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/70">
                  {w.tag}
                </div>
                <h3 className="mt-5 font-sans text-2xl font-semibold leading-snug">{w.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkingWithEngineers() {
  const practices = [
    {
      t: "Working out how, together",
      d: "I sit with developers to talk through how something could be done, so the plan is shaped by what is actually possible.",
    },
    {
      t: "Learning about the data and backend",
      d: "I learn how the data and backend side of the product works, so I can ask better questions and understand what a change really involves.",
    },
    {
      t: "Learning their frameworks",
      d: "I get to know the frameworks each team uses, so I can follow technical discussions and speak the same language.",
    },
    {
      t: "Weighing the trade-offs",
      d: "I weigh up the pros and cons of different approaches against deadlines, current functionality, risk and what is already planned, then agree the route with the team.",
    },
  ];
  const roles = [
    {
      org: "Nova",
      when: "Product Manager, 2021 to 2022",
      body: "Ran two agile development teams at the same time, acting as product manager, product owner and scrum master. Worked with non-technical founders and liaised with third party vendors on integration projects.",
    },
    {
      org: "Interactive Investor",
      when: "Product Owner, 2023",
      body: "Coordinated releases to the mobile app across the full development lifecycle, alongside UX, development and marketing teams.",
    },
    {
      org: "Regatta Group",
      when: "Group Product Owner, 2024 to 2026",
      body: "Led delivery across 15 e-commerce sites and three brands, working with engineering, UX, marketing and merchandising.",
    },
  ];
  return (
    <section id="engineering" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel n="06">Working with engineers</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-sans text-4xl font-semibold leading-tight md:text-5xl">
            I work with developers every day, not just at handover.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            In every role at Nova, Interactive Investor and Regatta, I worked directly with software engineers in Agile
            Scrum teams, running two week sprints. These are the habits that make that work.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {practices.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 transition hover:border-primary/60">
                <div className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-sans text-xl font-semibold">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r.org} delay={i * 0.08}>
              <div>
                <div className="font-sans text-lg font-semibold">{r.org}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{r.when}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            On my own products I go a step further and build directly with Claude Code and Antigravity, so I am close to
            the code as well as the conversation.
          </p>
        </Reveal>
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
          <SectionLabel n="07">About</SectionLabel>
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
          <SectionLabel n="08">Contact</SectionLabel>
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
        <BuildingWithAI />
        <Services />
        <WorkingWithEngineers />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
