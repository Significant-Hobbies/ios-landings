import type { SiteConfig } from "../../src/lib/types";

export const site: SiteConfig = {
  name: "Habits",
  url: "https://habits.significanthobbies.com",
  tagline: "Keep what helps. Trade what does not.",
  headline: ["Keep what helps.", "Trade what does not."],
  lede: "Keep the pleasure you choose. Trade a small pocket of automatic time for more of the life you want, without shame or a scoreboard.",
  kicker: "A kinder habit loop.",
  summary:
    "A local-first native app for useful practices and conscious trades, without scores, points, or shame loops.",
  status: "Native app in preparation.",
  platforms: ["iPhone", "iPad"],
  themeColor: "#e1f0fc",
  mark: "/images/brand/mark.jpg",
  socialImage: "/images/brand/social.jpg",
  tokens: {
    paper: "#fffaf5",
    field: "#e1f0fc",
    ink: "#0c1c38",
    inkSoft: "#263653",
    inkFaint: "rgba(12, 28, 56, 0.15)",
    accent: "#db293b",
    accentDark: "#ad182c",
    accentSoft: "#ff98a7",
    lanternA: "#db293b",
    lanternB: "#fff7cf",
    lanternC: "#78a889",
    blush: "#f4d9dd",
    inkOnDark: "#fffaf5",
    inkOnAccent: "#fffaf5"
  },
  colorScheme: "light",
  hero: {
    image: "/images/screens/life.jpg",
    alt: "The Habits Life screen, with a character resting in a soft blue room",
    caption: "Your Life room changes with the choices you make."
  },
  gallery: [
    { src: "/images/screens/life.jpg", alt: "Habits Life room on iPhone" },
    { src: "/images/screens/trade.jpg", alt: "Habits Trade screen on iPhone" },
    { src: "/images/screens/history.jpg", alt: "Habits History on iPhone" }
  ],
  applicationCategory: "LifestyleApplication",
  availability: "unreleased",
  betaNote: "The existing Indulge client will become Habits and keep its trade and replacement history.",
  tension: {
    statement: "You can enjoy something and still want your time back.",
    title: "No shame. No hard stop.",
    copy: "Habits begins with the conscious-trade loop proven in Indulge: notice when pleasure stops feeling chosen and give a small piece of that time somewhere better to go."
  },
  chaptersKicker: "One continuous loop",
  chaptersTitle: "Notice. Trade. Remember.",
  chaptersLede: "The first Habits build preserves the complete Indulge loop and its history. Recurring practice check-ins come later.",
  chapters: [
    {
      name: "Life",
      title: "See what you are making room for.",
      copy: "Your room becomes a quiet picture of the creativity, movement, people, and rest you want more of.",
      image: "/images/screens/life.jpg",
      alt: "Habits Life room on iPhone"
    },
    {
      name: "Trade",
      title: "Make one honest exchange.",
      copy: "Keep the pleasure you chose. Redirect only a small pocket of time that started running on its own.",
      image: "/images/screens/trade.jpg",
      alt: "Habits Trade screen on iPhone"
    },
    {
      name: "History",
      title: "Remember the choices you made.",
      copy: "Completed trades remain visible without turning the record into points, streaks, or a verdict on the day.",
      image: "/images/screens/history.jpg",
      alt: "Habits History on iPhone"
    }
  ],
  fit: {
    kicker: "An honest fit",
    title: "Reflection. Not restriction.",
    yes: "Habits may fit if you want to keep intentional pleasure and make one small replacement when time stops feeling chosen.",
    no: "It is not medical care, addiction treatment, Screen Time enforcement, or a productivity score."
  },
  privacy: {
    kicker: "Private by default",
    title: "Your patterns belong to you.",
    copy: "The native app has no Habits account, advertising SDK, or analytics in its personal flow. Profiles, trades, and history stay in Apple’s local and private-storage boundary."
  },
  faqs: [
    {
      question: "Do I need an account?",
      answer: "No. The native app works locally without a Habits account."
    },
    {
      question: "Does Habits keep streaks?",
      answer: "No. Trades and their outcomes are recorded without a consistency score or missed-day punishment."
    },
    {
      question: "What happened to Indulge?",
      answer: "It became the conscious-trade part of Habits. The bundle identifier and data stores stay the same so existing history survives."
    },
    {
      question: "Is there a standalone App Store app?",
      answer: "Not yet. The existing native client is being renamed and broadened before a new build is distributed."
    }
  ],
  founder: {
    quote: "I wanted practices to feel like something I could return to, not a scoreboard I had already lost.",
    credit: "— Sarthak Agrawal, creator of Habits",
    note: "A focused personal app from Significant Hobbies."
  },
  closingTitle: ["Keep what helps.", "Trade what does not."],
  footerFinePrint: "A private, non-scoring behavior loop from Significant Hobbies. © 2026 Sarthak Agrawal.",
  capabilities: [
    "One active conscious trade",
    "Three humane completion outcomes",
    "Preserved replacement and trade history"
  ],
  boundaries: [
    "Recurring practice check-ins are not in the first native build",
    "No public feed or competition",
    "Native local-first storage is being preserved",
    "No standalone App Store listing yet"
  ],
  lastUpdated: "2026-08-20",
  legal: {
    privacy: {
      title: "Your patterns stay private.",
      lede: "How Habits handles local profiles, trades, history, and deletion.",
      sections: [
        {
          title: "What Habits stores",
          body: "Your optional onboarding profile, active trade, completed trades, reflections, privacy-lock preference, and optional generated card."
        },
        {
          title: "Where it lives",
          body: "The app is local-first. Supported signed builds may also use your private iCloud database; there is no Habits account server."
        },
        {
          title: "Effective date",
          body: "Last updated 20 August 2026."
        }
      ]
    },
    support: {
      title: "Support, without exposing your practices.",
      lede: "Report the behavior with a neutral example.",
      sections: [
        {
          title: "What to include",
          body: "Say whether the issue affected Life, Trade, or History and use a neutral example instead of sharing a sensitive pattern."
        }
      ]
    },
    terms: {
      title: "Simple terms.",
      lede: "Personal use of the Habits native preview.",
      sections: [
        { title: "No outcome promise", body: "Habits records the trades you make. It does not guarantee a behavior or health outcome." },
        { title: "Changes", body: "Last updated 20 August 2026." }
      ]
    },
    accessibility: {
      title: "A private habit tool should stay reachable.",
      lede: "The native app supports Apple accessibility settings.",
      sections: [
        {
          title: "Current support",
          body: "Dynamic Type, VoiceOver, Reduce Motion, increased contrast, and state labels that do not rely on color alone."
        }
      ]
    },
    testflight: {
      title: "Habits is not on TestFlight yet.",
      lede: "The current Indulge build is being evolved into Habits before distribution.",
      testing: "Use the local simulator build to review Life, Trade, History, data deletion, and preserved records while the rename is prepared.",
      notIncluded: "A standalone App Store or public TestFlight build is not currently available.",
      sections: []
    }
  },
  requiredHomeCopy: ["Keep what helps", "trade", "Habits"],
  prohibitedClaims: ["guaranteed", "perfect streak", "available on the app store"]
};
