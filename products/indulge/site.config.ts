import type { SiteConfig } from "../../src/lib/types";

export const site: SiteConfig = {
  name: "Indulge",
  url: "https://indulge.significanthobbies.com",
  tagline: "Enjoy on purpose.",
  headline: ["Enjoy on", "purpose."],
  lede: "Trade the time you lose for more of the life you want—gently, privately, and one choice at a time.",
  kicker: "Keep the pleasure.",
  summary:
    "A private, local-first iPhone app for keeping the pleasures you choose, reclaiming time that runs longer than intended, and making room for more of the life you want.",
  status: "Invite-only TestFlight beta preparation",
  platforms: ["iPhone"],
  themeColor: "#e1f0fc",
  mark: "/images/brand/indulge-mark-128.jpg",
  socialImage: "/images/brand/indulge-social.jpg",
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
    alt: "The Indulge Life screen, with a character resting in a soft blue room",
    caption: "Your Life room changes with the choices you make."
  },
  gallery: [
    { src: "/images/screens/onboarding.jpg", alt: "Indulge onboarding on iPhone" },
    { src: "/images/screens/life.jpg", alt: "Indulge Life room on iPhone" },
    { src: "/images/screens/trade.jpg", alt: "Indulge Trade screen on iPhone" },
    { src: "/images/screens/focus.jpg", alt: "Indulge scene entry on iPhone" },
    { src: "/images/screens/history.jpg", alt: "Indulge History on iPhone" }
  ],
  applicationCategory: "LifestyleApplication",
  availability: "unreleased",
  betaNote: "Invite-only iPhone testing is underway. No account required.",
  tension: {
    statement: "You can enjoy something and still want your time back.",
    title: "No shame. No hard stop.",
    copy: "Indulge is for the in-between: when scrolling, watching, gaming, or another pleasure is genuinely welcome—until it runs longer than you meant."
  },
  chaptersKicker: "One continuous loop",
  chaptersTitle: "A fuller life assembles around you.",
  chaptersLede: "Indulge connects the moment you notice with the thing you want to make room for. Three simple spaces hold that story.",
  chapters: [
    {
      name: "Life",
      title: "See what you’re making room for.",
      copy: "Your room becomes a quiet picture of the creativity, movement, people, and rest you want more of.",
      image: "/images/screens/life.jpg",
      alt: "Indulge Life screen showing a blue living room assembled around a seated character"
    },
    {
      name: "Trade",
      title: "Make one honest trade.",
      copy: "Keep the pleasure you chose. Reclaim a small pocket of the time that tends to disappear, then give it somewhere to go.",
      image: "/images/screens/trade.jpg",
      alt: "Indulge Trade screen showing an intentional time exchange"
    },
    {
      name: "History",
      title: "Notice what changes.",
      copy: "Look back at the choices you actually made, without streaks, shame, or a scoreboard for your life.",
      image: "/images/screens/history.jpg",
      alt: "Indulge History screen showing completed trades"
    }
  ],
  fit: {
    kicker: "A gentle fit",
    title: "Made for reflection. Not restriction.",
    yes: "Indulge may fit if you want to notice patterns, choose a small trade, and return to something meaningful without blocking apps or chasing a streak.",
    no: "It is not medical care, addiction treatment, or Screen Time enforcement. If a habit is causing serious harm, qualified professional support is the right next step."
  },
  privacy: {
    kicker: "Private by default",
    title: "Your inner life stays yours.",
    copy: "The iPhone app has no Indulge account, no advertising SDK, and no analytics in the journal path. Your profile, trades, and history stay inside Apple’s app and private-storage boundary. This marketing site is static and does not run analytics."
  },
  faqs: [
    {
      question: "Does Indulge block apps or use Screen Time?",
      answer: "No. This beta does not request Screen Time authorization or enforce limits. It helps you reflect and make an explicit trade."
    },
    {
      question: "Do I need an account or internet connection?",
      answer: "No account is required, and the core experience works offline. Optional Apple Intelligence features are available only on supported devices."
    },
    {
      question: "Where is my data stored?",
      answer: "Your profile, trades, and history are local-first. Supported signed builds may use your private iCloud database; TestFlight may provide Apple-managed beta diagnostics under Apple’s terms."
    },
    {
      question: "Is Indulge on the App Store?",
      answer: "Not yet. This site will not show Apple’s App Store badge until a live apps.apple.com listing exists."
    },
    {
      question: "Can I join now?",
      answer: "We are preparing the invite-only TestFlight beta. The verified Apple enrollment link will appear on the TestFlight page when it is ready."
    }
  ],
  founder: {
    quote: "I wanted a gentler answer than quitting everything or pretending lost time does not matter.",
    credit: "— Sarthak Agrawal, creator of Indulge",
    note: "Indulge is an independent app from Significant Hobbies, built around one belief: pleasure and intention can live in the same room."
  },
  closingTitle: ["Keep what you love.", "Make room for more."],
  footerFinePrint: "A private reflection app, not medical care. © 2026 Sarthak Agrawal.",
  capabilities: [
    "Life: a personal visual room shaped by the life directions you choose",
    "Trade: one explicit exchange between automatic time and chosen time",
    "History: a quiet record of completed choices without streak scoring"
  ],
  boundaries: [
    "No Indulge account",
    "The iPhone app has no advertising, cross-app tracking, or analytics in the journal path",
    "No Screen Time authorization or app blocking in the current beta",
    "Not medical care or addiction treatment",
    "Core data is local-first; supported signed builds may use private iCloud storage"
  ],
  lastUpdated: "2026-08-17",
  legal: {
    privacy: {
      title: "Your inner life stays yours.",
      lede: "Indulge is a private, local-first iPhone app. This policy explains the current TestFlight build in plain language.",
      sections: [
        {
          title: "What the app stores",
          body: "Indulge stores your onboarding choices, active trade, completed history, and optional generated card using Apple’s app storage. Supported signed builds may synchronize that private data through your iCloud account."
        },
        {
          title: "What the app collects",
          body: "The iPhone app does not operate an account system, advertising SDK, or analytics in the journal path. The developer does not receive your profile, trades, notes, or history."
        },
        {
          title: "This website",
          body: "This marketing site is a static page set. It does not run an analytics script and cannot see your journal."
        },
        {
          title: "Apple services and TestFlight",
          body: "On supported devices, optional Image Playground can create a bounded future-life card. The app’s core experience and manual choices remain available without it. When you install a beta through TestFlight, Apple may process beta diagnostics and feedback under Apple’s own terms and privacy policy."
        },
        {
          title: "Retention and deletion",
          body: "Your data remains until you remove it in the app or delete the app. “Delete all Indulge data” removes the app’s records and asks private iCloud sync to remove synchronized copies when that capability is active. There is no Indulge account or developer-operated profile server."
        },
        {
          title: "Your choices",
          body: "You may leave optional onboarding questions unanswered. The current build does not request Screen Time authorization, and the core experience does not require network access."
        },
        {
          title: "Changes and contact",
          body: "If a future version adds active sync, accounts, or server processing, this policy and the App Store privacy disclosure will be updated before that version is distributed. Questions can be sent through the support page."
        },
        { title: "Effective date", body: "Last updated 17 August 2026." }
      ]
    },
    support: {
      title: "Support, without a maze.",
      lede: "Indulge is in an early, invite-only TestFlight beta. Here is the fastest way to understand a problem and report it clearly.",
      sections: [
        {
          title: "Before reporting a problem",
          body: "Confirm that you are using the newest TestFlight build, then relaunch Indulge once. If a visual detail looks wrong, check whether Larger Text, VoiceOver, or Reduce Motion is enabled and include that in your report."
        },
        {
          title: "What to include",
          body: "Tell us which area you were using—Onboarding, Life, Trade, or History—what you expected, and what happened instead. A screenshot is useful when it does not reveal private information."
        },
        {
          title: "Send feedback",
          body: "Use TestFlight’s built-in Send Beta Feedback action. It keeps feedback tied to the exact beta build and can include Apple-managed diagnostic context. Do not include sensitive personal information."
        },
        {
          title: "Safety",
          body: "Indulge is a reflective wellbeing tool, not medical care or addiction treatment. If a habit is causing serious harm or immediate risk, seek qualified local professional or emergency support."
        }
      ]
    },
    terms: {
      title: "Simple beta terms.",
      lede: "These terms apply to the invite-only Indulge TestFlight beta. By installing the beta, you agree to use it as pre-release software.",
      sections: [
        {
          title: "Beta software",
          body: "Indulge is under active development. Features may change, data may need to be reset between builds, and the beta may contain defects. Keep any information you cannot afford to lose somewhere else."
        },
        {
          title: "Personal use",
          body: "You may use the beta for personal evaluation through Apple TestFlight. Do not redistribute the app, attempt to bypass its signing, or use it to violate another person’s rights."
        },
        {
          title: "No medical service",
          body: "Indulge offers reflection and journaling tools. It does not diagnose, treat, or prevent a medical condition, and it is not a replacement for professional advice or emergency help."
        },
        {
          title: "Your content",
          body: "Your entries remain yours. The current app stores them locally and does not provide the developer with a server-side copy."
        },
        {
          title: "Apple terms",
          body: "Your access to the beta is also governed by the agreements and rules that apply to Apple TestFlight and your Apple account."
        },
        { title: "Changes", body: "Last updated 17 August 2026." }
      ]
    },
    accessibility: {
      title: "Access is part of the experience.",
      lede: "Indulge is being built with Apple’s native accessibility tools, not as a separate mode.",
      sections: [
        {
          title: "Current support",
          body: "The beta is designed for VoiceOver, Dynamic Type, Reduce Motion, keyboard focus on iPad, and sufficient color contrast. Core choices use text labels and do not depend on color alone."
        },
        {
          title: "What we test",
          body: "We test the principal flows in the iOS Simulator, including larger text and reduced motion. TestFlight feedback is especially valuable for combinations of settings and assistive technology that differ from our simulator coverage."
        },
        {
          title: "Report a barrier",
          body: "Use TestFlight’s Send Beta Feedback action and begin the message with Accessibility. Include the screen, setting, and intended action. Please omit private journal content from screenshots."
        },
        {
          title: "Known boundary",
          body: "The website and app are works in progress. If a barrier prevents you from completing a core flow, treat it as a defect and report it through the support page."
        }
      ]
    },
    testflight: {
      title: "The beta is taking shape.",
      lede: "Indulge is moving through invite-only TestFlight testing. We will only link to Apple after the enrollment URL is verified.",
      testing: "Complete the visual onboarding, explore the Life room, make and finish a small Trade, and confirm that History reflects your choice after relaunching.",
      notIncluded: "Screen Time authorization and automatic activity history are not included. Optional Apple Intelligence and Image Playground features only appear on supported devices.",
      sections: []
    }
  },
  requiredHomeCopy: ["Enjoy on", "purpose", "private", "TestFlight"],
  prohibitedClaims: ["available on the app store"]
};
