import type { SiteConfig } from "../../src/lib/types";

export const site: SiteConfig = {
  name: "Journal",
  url: "https://journal.significanthobbies.com",
  tagline: "A private page for the day.",
  headline: ["Write the day", "while it is yours."],
  lede: "A quiet morning or evening page for what happened, what mattered, and what you want to remember. No feed. No score.",
  kicker: "Private. Reflective. Yours.",
  summary:
    "A private, local-first daily journal with morning and evening writing, recent-entry navigation, and optional links to the plans you are living.",
  status: "Native app in preparation.",
  platforms: ["iPhone", "iPad"],
  themeColor: "#8d70ad",
  mark: "/images/brand/mark.png",
  socialImage: "/images/brand/mark.png",
  tokens: {
    paper: "#faf8f1",
    field: "#e8def0",
    ink: "#2e2732",
    inkSoft: "#655b6d",
    inkFaint: "rgba(46, 39, 50, 0.14)",
    accent: "#8d70ad",
    accentDark: "#684c85",
    accentSoft: "#c9b5dc",
    lanternA: "#9c7dbc",
    lanternB: "#e3b95d",
    lanternC: "#cf8aa5",
    blush: "#f0e7f3",
    inkOnDark: "#faf8f1",
    inkOnAccent: "#ffffff"
  },
  colorScheme: "light",
  hero: {
    image: "/images/screens/today.png",
    alt: "Journal on a phone, open to today’s private evening entry",
    caption: "One page for today. The words stay private."
  },
  gallery: [
    { src: "/images/screens/today.png", alt: "Journal open to today" },
    { src: "/images/screens/archive.png", alt: "Journal recent entries" },
    { src: "/images/screens/writing.png", alt: "Journal writing surface" }
  ],
  applicationCategory: "LifestyleApplication",
  availability: "unreleased",
  betaNote: "The captures show the current split preview while the existing native client is reduced to Journal.",
  tension: {
    statement: "A day can disappear before you name it.",
    title: "Keep the honest version.",
    copy: "Journal gives the day one private place to land. It does not turn reflection into content, a streak, or a performance."
  },
  chaptersKicker: "One quiet ritual",
  chaptersTitle: "Arrive. Write. Remember.",
  chaptersLede: "The current page leads. Earlier writing stays close enough to return to without becoming a dashboard.",
  chapters: [
    {
      name: "Today",
      title: "Begin where the day is.",
      copy: "A morning or evening prompt opens a substantial writing surface. Save when the thought is true enough.",
      image: "/images/screens/today.png",
      alt: "Journal open to today"
    },
    {
      name: "Remember",
      title: "Earlier words stay findable.",
      copy: "Move through recent dates and reopen the entry without mixing it into habits, scores, or a public timeline.",
      image: "/images/screens/archive.png",
      alt: "Journal recent entries"
    },
    {
      name: "Connect",
      title: "Relate a page to what you are living.",
      copy: "An entry can point to one of your Live plans when that context helps. The writing remains private.",
      image: "/images/screens/writing.png",
      alt: "Journal writing surface"
    }
  ],
  fit: {
    kicker: "An honest fit",
    title: "A journal. Not an audience.",
    yes: "Journal may fit if you want a private daily page with just enough structure to begin and enough history to return.",
    no: "It is not a social feed, publishing platform, mood score, or streak-driven writing challenge."
  },
  privacy: {
    kicker: "Private by design",
    title: "Your writing is not a public surface.",
    copy: "Signed-out writing remains in this browser’s local store. Signed-in entries belong to your private Significant Hobbies account. Journal has no publication control because entries cannot be published."
  },
  faqs: [
    {
      question: "Do I need an account?",
      answer: "No. You can begin locally in the browser. Signing in uses your private Significant Hobbies account storage."
    },
    {
      question: "Can anyone else see an entry?",
      answer: "No. Journal entries have no public visibility field or sharing flow."
    },
    {
      question: "Does Journal score consistency?",
      answer: "No. There are no journal streaks, points, or missed-day warnings."
    },
    {
      question: "Is there a standalone App Store app?",
      answer: "Not yet. The native client is being prepared, so this page shows no App Store or TestFlight badge."
    }
  ],
  founder: {
    quote: "I wanted one page where the day could be honest before it became a story I told myself later.",
    credit: "— Sarthak Agrawal, creator of Journal",
    note: "A focused personal app from Significant Hobbies."
  },
  closingTitle: ["Write it down.", "Keep it yours."],
  footerFinePrint: "A private daily journal from Significant Hobbies. © 2026 Sarthak Agrawal.",
  capabilities: [
    "Morning and evening writing for the current date",
    "Recent private entries and date navigation",
    "Optional private references to owned Live plans"
  ],
  boundaries: [
    "No public entries or social feed",
    "No streaks, points, or mood scoring",
    "Native local-first storage is being prepared",
    "No standalone App Store listing yet"
  ],
  lastUpdated: "2026-08-20",
  legal: {
    privacy: {
      title: "Your words stay private.",
      lede: "How Journal handles local writing, signed-in storage, and deletion.",
      sections: [
        {
          title: "What Journal stores",
          body: "The date, morning or evening period, the text you write, and an optional reference to one of your owned Live plans."
        },
        {
          title: "Where it lives",
          body: "Signed-out entries remain in this browser’s local IndexedDB store. Signed-in entries are private account records in Cloudflare D1."
        },
        {
          title: "Effective date",
          body: "Last updated 20 August 2026."
        }
      ]
    },
    support: {
      title: "Support, without sharing your journal.",
      lede: "Report the behavior without sending private entry text.",
      sections: [
        {
          title: "What to include",
          body: "Say which date and period you were using, whether you were signed in, and what the interface did. Replace private writing with a neutral example."
        }
      ]
    },
    terms: {
      title: "Simple terms.",
      lede: "Personal use of the Journal web preview.",
      sections: [
        { title: "Your responsibility", body: "Keep access to your device and account secure, and export anything you need before clearing browser storage." },
        { title: "Changes", body: "Last updated 20 August 2026." }
      ]
    },
    accessibility: {
      title: "Writing should stay reachable.",
      lede: "Journal targets WCAG 2.2 AA on the web.",
      sections: [
        {
          title: "Current support",
          body: "Keyboard navigation, visible focus, 44px targets, legible contrast, reduced motion, and labels that do not rely on color alone."
        }
      ]
    },
    testflight: {
      title: "Journal is not on TestFlight yet.",
      lede: "The existing native client is being reduced to Journal before distribution.",
      testing: "Use the current same-origin preview to review the split while the native client is prepared.",
      notIncluded: "A standalone App Store or public TestFlight build is not currently available.",
      sections: []
    }
  },
  requiredHomeCopy: ["Write the day", "private", "Journal"],
  prohibitedClaims: ["public journal", "guaranteed", "available on the app store"]
};
