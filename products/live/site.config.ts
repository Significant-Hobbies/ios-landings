import type { SiteConfig } from "../../src/lib/types";

export const site: SiteConfig = {
  name: "Live",
  url: "https://live.significanthobbies.com",
  tagline: "A list for the life you still want to live.",
  headline: ["Do not just", "plan a life."],
  lede: "Keep the places, hobbies, side quests, and experiences you still want to make real. Then choose one small next move.",
  kicker: "A lifelong list. Made to be lived.",
  summary: "A web app for keeping a lifelong catalog of things you want to experience and turning someday into a practical next step.",
  status: "Available on the web.",
  platforms: ["Web"],
  themeColor: "#ffec4f",
  mark: "/images/brand/mark.png",
  socialImage: "/images/brand/mark.png",
  tokens: {
    paper: "#fffdf4",
    field: "#fff4a3",
    ink: "#211f17",
    inkSoft: "#5e5947",
    inkFaint: "rgba(33, 31, 23, 0.14)",
    accent: "#ffec4f",
    accentDark: "#d1af00",
    accentSoft: "#fff5a8",
    lanternA: "#ffec4f",
    lanternB: "#77bdf2",
    lanternC: "#ef8976",
    blush: "#fff8cf",
    inkOnDark: "#fffdf4",
    inkOnAccent: "#211f17"
  },
  colorScheme: "light",
  hero: {
    image: "/images/screens/today.png",
    alt: "Live on a phone, inviting the owner to choose one thing to do",
    caption: "Keep the list. Pick one thing. Go live it."
  },
  gallery: [
    { src: "/images/screens/today.png", alt: "Live home on a phone" },
    { src: "/images/screens/discover.png", alt: "Live hobby discovery quiz" }
  ],
  applicationCategory: "LifestyleApplication",
  availability: "web-app",
  appUrl: "https://significanthobbies.com/live-more",
  appCtaLabel: "Open Live",
  betaNote: "Live is the web continuation of the existing Significant Hobbies product.",
  tension: {
    statement: "Someday is easy to collect and easy to forget.",
    title: "Keep a list that can move.",
    copy: "Live holds the long horizon and the small next step together, without turning the things you care about into another productivity score."
  },
  chaptersKicker: "One living loop",
  chaptersTitle: "Keep. Choose. Go.",
  chaptersLede: "A broad catalog stays useful because Live always brings you back to one possible next move.",
  chapters: [
    {
      name: "Keep",
      title: "Give someday a real home.",
      copy: "Collect experiences, hobbies, side quests, and longer life plans in one private catalog.",
      image: "/images/screens/today.png",
      alt: "Live home on a phone"
    },
    {
      name: "Discover",
      title: "Find possibilities beyond the obvious.",
      copy: "Browse a large authored catalog or use the short hobby finder when you want a fresh direction.",
      image: "/images/screens/discover.png",
      alt: "Live hobby discovery quiz"
    }
  ],
  fit: {
    kicker: "An honest fit",
    title: "A life list. Not a task manager.",
    yes: "Live may fit if you want one long-lived place for possibilities and a gentle push toward actually trying one.",
    no: "It is not a daily task list, social feed, travel marketplace, or promise that every saved idea will happen."
  },
  privacy: {
    kicker: "Private first",
    title: "Your plans begin as yours.",
    copy: "Signed-out work stays in this browser. Account-backed records stay private unless you explicitly publish an eligible Live item. Journal writing is not part of Live."
  },
  faqs: [
    {
      question: "Is Live a bucket list app?",
      answer: "Yes, and a little more: it also holds hobbies, side quests, timelines, and the small steps that make a possibility easier to begin."
    },
    {
      question: "Does Live have an iPhone app?",
      answer: "No. Live is deliberately web-only. Its landing page uses real mobile web captures because the web app works on a phone."
    },
    {
      question: "Do I need an account?",
      answer: "No. You can begin locally in the browser. An account is needed for cross-device access and explicit public sharing."
    }
  ],
  founder: {
    quote: "I wanted a place for the things I still mean to do, without pretending they are all tasks for this week.",
    credit: "— Sarthak Agrawal, creator of Live",
    note: "Live is one focused product from Significant Hobbies."
  },
  closingTitle: ["Keep the list.", "Go have the life."],
  footerFinePrint: "A lifelong possibility catalog from Significant Hobbies. © 2026 Sarthak Agrawal.",
  capabilities: [
    "Private bucket lists and life plans",
    "Hobby and experience discovery",
    "Side quests and small next steps"
  ],
  boundaries: [
    "Web-only",
    "No task-management scoreboard",
    "No automatic public sharing",
    "Journal and Habits are separate products"
  ],
  lastUpdated: "2026-08-20",
  legal: {
    privacy: {
      title: "Your plans begin as yours.",
      lede: "How Live handles local plans, account data, and explicit publication.",
      sections: [
        { title: "Local use", body: "Signed-out records remain in this browser local store." },
        { title: "Account use", body: "Signed-in records belong to your private Significant Hobbies account. Only eligible items you explicitly select can become public." },
        { title: "Effective date", body: "Last updated 20 August 2026." }
      ]
    },
    support: {
      title: "Support for Live.",
      lede: "Describe the screen and behavior without sharing sensitive plan text.",
      sections: [{ title: "What to include", body: "Include the route, device, browser, and a neutral example of the affected item." }]
    },
    terms: {
      title: "Simple terms.",
      lede: "Personal use of the Live web application.",
      sections: [{ title: "Your responsibility", body: "Keep access to your device and account secure, and export records you need before clearing local storage." }]
    },
    accessibility: {
      title: "A life list should stay reachable.",
      lede: "Live targets WCAG 2.2 AA on the web.",
      sections: [{ title: "Current support", body: "Keyboard navigation, visible focus, reduced motion, sufficient contrast, and labels that do not rely on color alone." }]
    },
    testflight: {
      title: "Live is web-only.",
      lede: "There is no Live TestFlight build.",
      testing: "Open the web app in a current browser and try the private local flow.",
      notIncluded: "A native Live application is not planned.",
      sections: []
    }
  },
  requiredHomeCopy: ["Do not just", "lifelong", "Live"],
  prohibitedClaims: ["native app", "available on the app store", "guaranteed"]
};
