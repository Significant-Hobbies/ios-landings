import type { SiteConfig } from "../../src/lib/types";

export const site: SiteConfig = {
  name: "Calorie",
  url: "https://calorie.significanthobbies.com",
  tagline: "A little log for feeling good.",
  headline: ["A little log", "for feeling good."],
  lede: "Log the bowl. See the timing. Food, water, medicine, and weight stay on your iPhone or iPad unless you choose private Cloudflare sync.",
  kicker: "Private. Local-first.",
  summary:
    "A private, local-first food, water, and weight journal with transparent timing guidance. Optional Google or Apple sign-in can add private Cloudflare sync.",
  status: "Internal TestFlight beta. Not publicly distributed.",
  platforms: ["iPhone", "iPad"],
  themeColor: "#47743a",
  mark: "/images/brand/mark.png",
  socialImage: "/images/brand/social.png",
  tokens: {
    paper: "#f7faf3",
    field: "#e7f0dc",
    ink: "#1c2418",
    inkSoft: "#5a6b52",
    inkFaint: "rgba(28, 36, 24, 0.14)",
    accent: "#47743a",
    accentDark: "#2f5228",
    accentSoft: "#8fb87a",
    lanternA: "#47743a",
    lanternB: "#d4a017",
    lanternC: "#c45a48",
    blush: "#eef5e8",
    inkOnDark: "#f7faf3",
    inkOnAccent: "#ffffff"
  },
  colorScheme: "light",
  hero: {
    image: "/images/screens/today.png",
    alt: "Calorie Today on iPhone, with the day’s log and timing guidance",
    caption: "Log what you ate. The timing is just math you can see."
  },
  gallery: [
    { src: "/images/screens/today.png", alt: "Calorie Today" },
    { src: "/images/screens/quick-log.png", alt: "Calorie quick log" },
    { src: "/images/screens/foods.png", alt: "Calorie foods" },
    { src: "/images/screens/progress.png", alt: "Calorie progress" },
    { src: "/images/screens/you.png", alt: "Calorie You settings" }
  ],
  applicationCategory: "HealthApplication",
  availability: "unreleased",
  betaNote: "The native journal is available to invited internal testers. There is no public TestFlight or App Store link yet.",
  tension: {
    statement: "A calorie total is not a day.",
    title: "Show the working.",
    copy: "Calorie turns four macros, water, medicine, and weight into timing you can check. It is not a coach and not medical advice."
  },
  chaptersKicker: "One quiet loop",
  chaptersTitle: "Log it. See what the day is doing.",
  chaptersLede: "Today, a fast log, and progress that does not scold.",
  chapters: [
    {
      name: "Today",
      title: "The day is the product.",
      copy: "Food, water, and medicine for this date. Timing estimates sit next to the inputs that made them.",
      image: "/images/screens/today.png",
      alt: "Calorie Today"
    },
    {
      name: "Log",
      title: "One hand, after lunch.",
      copy: "A familiar food, a one-off, or a quick amount. The journal is built to be used immediately after eating.",
      image: "/images/screens/quick-log.png",
      alt: "Calorie quick log"
    },
    {
      name: "Progress",
      title: "Trends, not a verdict.",
      copy: "Seven and thirty days, side by side, with the sample size visible. No streak scoreboard.",
      image: "/images/screens/progress.png",
      alt: "Calorie progress"
    }
  ],
  fit: {
    kicker: "An honest fit",
    title: "A journal. Not a diet.",
    yes: "Calorie may fit if you want a private iPhone or iPad log with timing you can audit.",
    no: "It is not medical care, not a barcode scanner, and not a social feed. It will not prescribe a deficit."
  },
  privacy: {
    kicker: "Private by default",
    title: "The journal stays yours.",
    copy: "The default journal lives on the device. Optional sign-in syncs a private copy to Cloudflare D1 that only you can read. This marketing page is static."
  },
  faqs: [
    {
      question: "Do I need an account?",
      answer: "No. The native journal works on this device without one. Sign in with Apple is optional private sync."
    },
    {
      question: "Where do I actually use it?",
      answer: "In the native iPhone or iPad app. This website is only the public product page."
    },
    {
      question: "Is it medical advice?",
      answer: "No. Timing suggestions are estimates from the numbers you enter. They are not diagnosis or treatment."
    },
    {
      question: "Is the iPhone app on the App Store?",
      answer: "Not yet. This site will not show Apple’s badge until a live apps.apple.com listing exists."
    }
  ],
  founder: {
    quote: "I wanted the next meal written down before I had to think, and the timing to show its work.",
    credit: "— Sarthak Agrawal, creator of Calorie",
    note: "An independent journal from Significant Hobbies."
  },
  closingTitle: ["Log the bowl.", "Keep it yours."],
  footerFinePrint: "A food journal, not medical care. © 2026 Sarthak Agrawal.",
  capabilities: [
    "Today: food, water, medicine, and timing for this date",
    "Foods: reusable items per 100 g or per unit",
    "Progress: 7- and 30-day trends without streak scoring"
  ],
  boundaries: [
    "No social feed",
    "Not medical advice",
    "Default data is local-first; optional private cloud sync",
    "No App Store listing yet"
  ],
  lastUpdated: "2026-08-21",
  legal: {
    privacy: {
      title: "Your journal stays yours.",
      lede: "How Calorie handles local journal data, optional private cloud sync, and deletion.",
      sections: [
        {
          title: "What the app stores",
          body: "Foods, entries, water, medicine, weight, and profile fields you enter. The default journal is on the device. Optional signed-in mode stores a private copy in Cloudflare D1."
        },
        {
          title: "What we collect",
          body: "Without an account, the developer does not receive your journal. Signed-in sync is scoped to your user. This marketing page does not run analytics."
        },
        {
          title: "Effective date",
          body: "Last updated 17 August 2026."
        }
      ]
    },
    support: {
      title: "Support, without a maze.",
      lede: "The fastest way to report a problem in the journal.",
      sections: [
        {
          title: "What to include",
          body: "Say whether you were on Today, the log sheet, Foods, or Progress, and whether you were local-only or signed in. Do not send food logs with someone else’s private details."
        }
      ]
    },
    terms: {
      title: "Simple terms.",
      lede: "Personal use of the Calorie journal.",
      sections: [
        {
          title: "Not medical care",
          body: "Calorie records what you enter and shows estimates. It does not diagnose or treat."
        },
        { title: "Changes", body: "Last updated 17 August 2026." }
      ]
    },
    accessibility: {
      title: "Access is part of the journal.",
      lede: "The iPhone and iPad app uses native accessibility throughout the journal.",
      sections: [
        {
          title: "Current support",
          body: "Native Dynamic Type, VoiceOver labels, comfortable touch targets, and status that does not rely on color alone."
        }
      ]
    },
    testflight: {
      title: "The native beta is private.",
      lede: "Calorie has an internal TestFlight build, but no public invitation link. This page will not invent one.",
      testing: "Invited testers can log a familiar food on iPhone or iPad and confirm Today updates, first locally and then with optional sync.",
      notIncluded: "A public TestFlight invitation, App Store listing, and barcode scanning are not in this beta.",
      sections: []
    }
  },
  requiredHomeCopy: ["A little log", "private", "journal"],
  prohibitedClaims: ["diagnose", "guaranteed", "available on the app store"]
};
