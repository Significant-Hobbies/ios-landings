export type Chapter = { name: string; title: string; copy: string; image: string; alt: string };
export type Faq = { question: string; answer: string };
export type LegalSection = { title: string; body: string };
export type LegalPage = { title: string; lede: string; sections: LegalSection[] };
export type SiteConfig = {
  name: string; url: string; tagline: string; headline: [string, string]; lede: string; kicker: string;
  summary: string; status: string; platforms: string[]; themeColor: string; mark: string; socialImage: string;
  tokens: { paper: string; field: string; ink: string; inkSoft: string; inkFaint: string; accent: string; accentDark: string; accentSoft: string; lanternA: string; lanternB: string; lanternC: string; blush: string; inkOnDark: string; inkOnAccent?: string };
  colorScheme: "light" | "dark";
  hero: { image: string; alt: string; caption: string };
  gallery: { src: string; alt: string }[];
  applicationCategory: string;
  availability: "unreleased" | "testflight" | "app-store";
  appStoreUrl?: string; appStoreId?: string; betaNote: string;
  tension: { statement: string; title: string; copy: string };
  chaptersKicker: string; chaptersTitle: string; chaptersLede: string; chapters: Chapter[];
  fit: { kicker: string; title: string; yes: string; no: string };
  privacy: { kicker: string; title: string; copy: string };
  faqs: Faq[]; founder: { quote: string; credit: string; note: string }; closingTitle: [string, string];
  footerFinePrint: string; capabilities: string[]; boundaries: string[]; lastUpdated: string;
  legal: { privacy: LegalPage; support: LegalPage; terms: LegalPage; accessibility: LegalPage; testflight: LegalPage & { testing: string; notIncluded: string } };
  requiredHomeCopy: string[]; prohibitedClaims: string[];
};

export const site: SiteConfig = {
  name: "Anchor",
  url: "https://anchor.significanthobbies.com",
  tagline: "Plan the day. Protect the present. Learn what moved it.",
  headline: ["Plan the day.", "Learn what moved it."],
  lede: "A private day planner and focus timer for Mac, iPhone and Apple Watch that compares the day you planned with the day you actually lived.",
  kicker: "Plan. Focus. Adapt.",
  summary: "A local-first day planner and focus timer for Mac, iPhone and Apple Watch that schedules the day, captures what pulled you away, and explains the gap between plan and reality.",
  status: "Invite-only TestFlight and private Mac beta",
  platforms: ["iPhone", "Mac", "Apple Watch"],
  themeColor: "#0a0c10",
  mark: "/images/brand/mark.png",
  socialImage: "/images/brand/social.png",
  tokens: {
    paper: "#0a0c10", field: "#141922", ink: "#edf1f7", inkSoft: "#94a0b3", inkFaint: "rgba(255,255,255,0.08)",
    accent: "#3b82f6", accentDark: "#2563eb", accentSoft: "#7dd3fc", lanternA: "#3b82f6", lanternB: "#7dd3fc", lanternC: "#fb7185",
    blush: "#1d2532", inkOnDark: "#edf1f7", inkOnAccent: "#edf1f7"
  },
  colorScheme: "dark",
  hero: { image: "/images/screens/session.webp", alt: "Anchor focus session with remaining time and interruption capture", caption: "The current block, one focus ring, and one obvious thing to press when reality moves." },
  gallery: [
    { src: "/images/screens/session.webp", alt: "Anchor running a focus session" },
    { src: "/images/screens/resume-capture.webp", alt: "Anchor asking what pulled you away" },
    { src: "/images/screens/insights.webp", alt: "Anchor history comparing focus and interruptions" },
    { src: "/images/screens/mini-timer.webp", alt: "Anchor compact timer" }
  ],
  applicationCategory: "ProductivityApplication",
  availability: "unreleased",
  betaNote: "Private beta. Distraction notes never enter the Hub, analytics, telemetry, or a cloud model.",
  tension: { statement: "A plan is only useful if it can survive reality.", title: "The gap is the useful part.", copy: "Anchor schedules the day, protects the current block, captures what changed, and gives that evidence back when you plan tomorrow." },
  chaptersKicker: "One daily loop",
  chaptersTitle: "Plan it. Live it. Learn.",
  chaptersLede: "Schedule the day, protect the current block, then review the difference without turning it into a score.",
  chapters: [
    { name: "Focus", title: "Protect the current block.", copy: "Anchor offers the current or next scheduled block, keeps time from the wall clock, and makes interruption capture immediate.", image: "/images/screens/session.webp", alt: "Anchor focus session" },
    { name: "Capture", title: "Name what moved the day.", copy: "Coming back captures the interruption. “Nothing, just a break” stays one key away.", image: "/images/screens/resume-capture.webp", alt: "Anchor resume capture" },
    { name: "History", title: "Compare the plan with reality.", copy: "Deliberate changes, internal pulls, external interruptions, human needs, estimation errors, and unknown gaps stay distinct.", image: "/images/screens/insights.webp", alt: "Anchor history and interruption evidence" }
  ],
  fit: { kicker: "An honest fit", title: "A planner that takes divergence seriously.", yes: "Anchor fits if you want one place to schedule the day, focus on the present block, and learn why the plan changed.", no: "It is not a website blocker, a social productivity feed, or a moral score for how closely you followed a plan." },
  privacy: { kicker: "Private by construction", title: "Your notes are not product telemetry.", copy: "Full Anchor data stays local or in your private iCloud database. Optional Hub sync sends only finished-session summaries and never distraction notes, plans, or behavior selections." },
  faqs: [
    { question: "Do I need an account?", answer: "No. Anchor is fully usable without one. A Significant Hobbies Hub account is optional and only adds finished-session summary visibility." },
    { question: "Is it on the App Store?", answer: "Not yet. This site will not show Apple’s App Store badge until a live apps.apple.com page exists." },
    { question: "Which devices?", answer: "Mac, iPhone, and Apple Watch. The landing uses real captures from those apps." }
  ],
  founder: { quote: "I wanted the interruption filed before I had agreed to it.", credit: "— Sarthak Agrawal, creator of Anchor", note: "An independent app from Significant Hobbies." },
  closingTitle: ["Protect the present.", "Adapt tomorrow."],
  footerFinePrint: "A private day planner and focus timer, not a blocker. © 2026 Sarthak Agrawal.",
  capabilities: ["Today: one-off and recurring plans", "Focus: wall-clock sessions and interruption capture", "Habits: patterns and concrete replacements", "History: planned-versus-lived review and export"],
  boundaries: ["No account required", "No distraction-note egress", "No analytics or advertising SDK", "Not a website blocker", "Not listed on the App Store yet"],
  lastUpdated: "2026-08-24",
  legal: {
    privacy: { title: "Your private notes are not our data.", lede: "Anchor is local-first, uses no analytics or advertising SDK, and never sends distraction notes to Significant Hobbies, a cloud model, or telemetry.", sections: [
      { title: "What Anchor stores", body: "Anchor stores your one-off and recurring plans, behavior selections and replacements, focus sessions, outcomes, and the distractions you write down. This is written to a database on your device." },
      { title: "On your device", body: "The database lives in Anchor’s own container on your Mac, iPhone or Apple Watch." },
      { title: "In your iCloud, if you use it", body: "When you’re signed in to iCloud, Anchor syncs through Apple’s CloudKit into your private database. That data is held in your Apple account under Apple’s terms. We cannot see it, and we have no way to request it." },
      { title: "Optional Significant Hobbies Hub", body: "Anchor works fully without an account. If you choose to connect the Significant Hobbies Hub, Anchor sends only a finished session’s goal, start and end times, focused duration, outcome, and interruption count to your Hub account. Plans, behavior selections, session notes, and distraction notes are excluded. Signing out stops future Hub sync." },
      { title: "Distraction notes", body: "Distraction text is never sent to Significant Hobbies, analytics, telemetry, or a model. If you enable iCloud, Apple may sync it only within your private CloudKit database so your own Anchor devices stay in step." },
      { title: "What Anchor does not do", body: "No analytics, telemetry, crash-reporting SDK, advertising, advertising identifier, or cross-app tracking. No selling or advertising use of data. The optional Hub connection is for your own finished-session summaries, not product analytics." },
      { title: "Apple Intelligence", body: "Anchor uses Apple’s on-device foundation model to group goals into themes and sort distractions into categories, and to write an optional one-paragraph summary of a period. This runs entirely on your device through Apple’s Foundation Models framework. Your notes are not sent to Apple, to us, or to any cloud model. Where Apple Intelligence is unavailable — an ineligible device, the feature switched off, or on Apple Watch, where Apple ships no on-device model — Anchor falls back to built-in keyword rules that also run locally." },
      { title: "The MCP server", body: "Anchor includes an optional local MCP server so an AI client on your own machine can query your focus history. It runs on your computer, reads the same local database, and is started only by a client you have configured yourself. Anchor does not transmit anything to run it. If you connect it to an AI client that itself sends data to a cloud service, that transfer is governed by that client’s privacy policy, not this one." },
      { title: "Export", body: "You can export your history to Excel, CSV or JSON at any time. Exported files go wherever you save them, and are then yours to handle." },
      { title: "Deleting your data", body: "Deleting the app removes its local database. To remove private CloudKit copies, delete Anchor’s data from iCloud in your device settings. If you connected the Hub, sign out to stop future sync and email hello@significanthobbies.com to request deletion of Hub account data and session summaries." },
      { title: "Children", body: "Anchor is not directed at children under 13. It has no advertising or analytics collection; the optional Hub connection is the only Anchor feature that uses account data." },
      { title: "Changes", body: "If this policy changes, the revised version will be posted here with a new date. Distraction-note privacy and the absence of analytics or advertising are product constraints, not temporary settings." },
      { title: "Contact", body: "Questions: hello@significanthobbies.com." },
      { title: "Effective date", body: "Last updated 24 August 2026." }
    ]},
    support: { title: "Support, without a maze.", lede: "Email hello@significanthobbies.com and you’ll get a reply from the person who built it.", sections: [
      { title: "Does Anchor block apps or websites?", body: "No. Apple’s Screen Time blocking APIs exist only on iPhone and iPad — there is no macOS equivalent — so a blocker would work on half your devices and quietly fail on the rest. Anchor takes the other approach: capture the distraction in one keystroke and hand you back your goal. It also records honestly when a distraction won, which is what makes the analytics worth reading." },
      { title: "Why does resuming ask me a question?", body: "Because a pause is usually an interruption you would otherwise never log. Answering takes a few words, and declining with “Nothing — just a break” (or the Escape key) takes one keypress." },
      { title: "My timer kept counting while my Mac was asleep. Is that a bug?", body: "No — that’s deliberate. Anchor measures elapsed time from the clock rather than by ticking, so a session stays accurate across sleep, quitting the app, and syncing between devices. Time you spend paused is always excluded." },
      { title: "My distractions are being categorised oddly.", body: "Tap the category icon on any item in Parked to correct it. A category you set by hand is locked, and will never be overwritten by the on-device model." },
      { title: "It says Apple Intelligence isn’t available.", body: "Apple Intelligence needs a supported device with the feature switched on in Settings, and the model may still be downloading. Anchor works fully without it — grouping falls back to built-in rules, and the optional written summary is simply hidden rather than faked. Apple Watch never has it, so anything captured there is refined by your iPhone or Mac once it syncs." },
      { title: "My devices aren’t syncing.", body: "Sync uses your own private iCloud database. Check that the same Apple Account is signed in on both devices and that iCloud Drive is on. If iCloud is unavailable, Anchor keeps working against a local database rather than refusing to start a timer." },
      { title: "How do I get my data out?", body: "History → Export gives you an Excel workbook, CSV or JSON. Anchor also ships a local MCP server so an AI client on your machine can query your history directly; see the instructions in Settings." },
      { title: "Reporting a bug", body: "Email what you did, what you expected, and what happened, plus your OS version. Please don’t include your distraction notes unless they’re relevant — they’re your business." }
    ]},
    terms: { title: "Simple beta terms.", lede: "Pre-release software for personal evaluation.", sections: [
      { title: "Beta software", body: "Features may change. Keep anything you cannot lose somewhere else." },
      { title: "Changes", body: "Last updated 17 August 2026." }
    ]},
    accessibility: { title: "Access is part of the experience.", lede: "Native Apple accessibility, not a separate mode.", sections: [
      { title: "Current support", body: "VoiceOver, Dynamic Type, and Reduce Motion are tested on the principal flows." }
    ]},
    testflight: { title: "The beta is taking shape.", lede: "We only link to Apple after the enrollment URL is verified.", testing: "Plan a day, start the current block, capture what moved it, and review the result in History.", notIncluded: "A notarized Mac download and a public App Store listing are not ready.", sections: [] }
  },
  requiredHomeCopy: [],
  prohibitedClaims: ["available on the app store"]
};
export const links = {
  home: `${site.url}/`, privacy: `${site.url}/privacy/`, support: `${site.url}/support/`,
  terms: `${site.url}/terms/`, accessibility: `${site.url}/accessibility/`, testflight: `${site.url}/testflight/`
};
