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
  tagline: "Park the distraction. Keep the session.",
  headline: ["Park the pull.", "Keep the session."],
  lede: "A focus timer for Mac, iPhone and Apple Watch that files the interruption in one keystroke instead of losing the work.",
  kicker: "Local-first focus.",
  summary: "A local-first focus timer for Mac, iPhone and Apple Watch that parks distractions instead of losing the session, and shows what actually costs you your focus.",
  status: "Invite-only TestFlight and Mac beta preparation",
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
  hero: { image: "/images/screens/session.png", alt: "Anchor session with remaining time and lock-a-distraction", caption: "One goal, one ring, one obvious thing to press when something pulls." },
  gallery: [
    { src: "/images/screens/session.png", alt: "Anchor running a focus session" },
    { src: "/images/screens/resume-capture.png", alt: "Anchor asking what pulled you away" },
    { src: "/images/screens/insights.png", alt: "Anchor insights on focus and interruptions" },
    { src: "/images/screens/mini-timer.png", alt: "Anchor compact timer" }
  ],
  applicationCategory: "ProductivityApplication",
  availability: "unreleased",
  betaNote: "Everything stays on your devices. Not listed on the App Store yet.",
  tension: { statement: "Timers assume starting is the hard part.", title: "The hard part is the Slack ping.", copy: "Anchor files the interruption, names your goal and remaining time, and hands you back the session." },
  chaptersKicker: "One session",
  chaptersTitle: "Keep the thread.",
  chaptersLede: "Start, park, resume, then see what actually cost you the hour.",
  chapters: [
    { name: "Session", title: "Stay with the goal.", copy: "A cobalt ring, a named goal, and one control when something pulls.", image: "/images/screens/session.png", alt: "Anchor session" },
    { name: "Resume", title: "Name what pulled.", copy: "Coming back captures the interruption. “Nothing, just a break” is one key away.", image: "/images/screens/resume-capture.png", alt: "Anchor resume capture" },
    { name: "Insights", title: "See the losses too.", copy: "World-came-to-you versus you-went-to-it. One is settings. The other is habit.", image: "/images/screens/insights.png", alt: "Anchor insights" }
  ],
  fit: { kicker: "An honest fit", title: "A timer that takes interruptions seriously.", yes: "Anchor fits if you already sit down to work and lose the thread to a ping or a tab.", no: "It is not a website blocker, a social productivity feed, or an App Store listing yet." },
  privacy: { kicker: "On your devices", title: "Focus data stays with you.", copy: "Anchor stores sessions locally. Supported signed builds may use private iCloud. There is no Anchor account server." },
  faqs: [
    { question: "Do I need an account?", answer: "No. Sessions live on the device." },
    { question: "Is it on the App Store?", answer: "Not yet. This site will not show Apple’s App Store badge until a live apps.apple.com page exists." },
    { question: "Which devices?", answer: "Mac, iPhone, and Apple Watch. The landing uses real captures from those apps." }
  ],
  founder: { quote: "I wanted the interruption filed before I had agreed to it.", credit: "— Sarthak Agrawal, creator of Anchor", note: "An independent app from Significant Hobbies." },
  closingTitle: ["Park the distraction.", "Finish the hour."],
  footerFinePrint: "A focus timer, not a blocker. © 2026 Sarthak Agrawal.",
  capabilities: ["Session: named goal and remaining time", "Parking: one-keystroke interruption log", "Insights: source of lost focus"],
  boundaries: ["No Anchor account", "No advertising SDK", "Not a website blocker", "Not listed on the App Store yet"],
  lastUpdated: "2026-08-22",
  legal: {
    privacy: { title: "Your sessions stay on your devices.", lede: "Anchor has no servers, no account system and no analytics. There is no data for us to collect, because none of it ever reaches us.", sections: [
      { title: "What Anchor stores", body: "Anchor stores the focus sessions you run and the distractions you write down: the goal, the intended and actual length, timestamps, the note you typed, and a category. This is written to a database on your device." },
      { title: "On your device", body: "The database lives in Anchor’s own container on your Mac, iPhone or Apple Watch." },
      { title: "In your iCloud, if you use it", body: "When you’re signed in to iCloud, Anchor syncs through Apple’s CloudKit into your private database. That data is held in your Apple account under Apple’s terms. We cannot see it, and we have no way to request it." },
      { title: "Nowhere else", body: "Anchor has no backend. It does not send your sessions, notes, categories, usage or device information to us or to any third party." },
      { title: "What Anchor does not do", body: "No accounts, sign-ups, logins or email collection. No analytics, telemetry, crash reporting or usage measurement. No advertising, no advertising identifiers, no tracking across apps or websites. No third-party SDKs — Anchor is built only on Apple’s frameworks. No selling or sharing of data; there is none to sell or share." },
      { title: "Apple Intelligence", body: "Anchor uses Apple’s on-device foundation model to group goals into themes and sort distractions into categories, and to write an optional one-paragraph summary of a period. This runs entirely on your device through Apple’s Foundation Models framework. Your notes are not sent to Apple, to us, or to any cloud model. Where Apple Intelligence is unavailable — an ineligible device, the feature switched off, or on Apple Watch, where Apple ships no on-device model — Anchor falls back to built-in keyword rules that also run locally." },
      { title: "The MCP server", body: "Anchor includes an optional local MCP server so an AI client on your own machine can query your focus history. It runs on your computer, reads the same local database, and is started only by a client you have configured yourself. Anchor does not transmit anything to run it. If you connect it to an AI client that itself sends data to a cloud service, that transfer is governed by that client’s privacy policy, not this one." },
      { title: "Export", body: "You can export your history to Excel, CSV or JSON at any time. Exported files go wherever you save them, and are then yours to handle." },
      { title: "Deleting your data", body: "Deleting the app removes its local database. To remove synced copies, delete Anchor’s data from iCloud in your device settings. Because we hold nothing, there is no deletion request to send us." },
      { title: "Children", body: "Anchor is not directed at children under 13 and collects no personal information from anyone, of any age." },
      { title: "Changes", body: "If this policy changes, the revised version will be posted here with a new date. Anchor’s posture — no collection, no servers — is a design decision, not a temporary state." },
      { title: "Contact", body: "Questions: hello@significanthobbies.com." },
      { title: "Effective date", body: "Last updated 22 August 2026." }
    ]},
    support: { title: "Support, without a maze.", lede: "Email hello@significanthobbies.com and you’ll get a reply from the person who built it.", sections: [
      { title: "Does Anchor block apps or websites?", body: "No. Apple’s Screen Time blocking APIs exist only on iPhone and iPad — there is no macOS equivalent — so a blocker would work on half your devices and quietly fail on the rest. Anchor takes the other approach: capture the distraction in one keystroke and hand you back your goal. It also records honestly when a distraction won, which is what makes the analytics worth reading." },
      { title: "Why does resuming ask me a question?", body: "Because a pause is usually an interruption you would otherwise never log. Answering takes a few words, and declining with “Nothing — just a break” (or the Escape key) takes one keypress." },
      { title: "My timer kept counting while my Mac was asleep. Is that a bug?", body: "No — that’s deliberate. Anchor measures elapsed time from the clock rather than by ticking, so a session stays accurate across sleep, quitting the app, and syncing between devices. Time you spend paused is always excluded." },
      { title: "My distractions are being categorised oddly.", body: "Tap the category icon on any item in Parked to correct it. A category you set by hand is locked, and will never be overwritten by the on-device model." },
      { title: "It says Apple Intelligence isn’t available.", body: "Apple Intelligence needs a supported device with the feature switched on in Settings, and the model may still be downloading. Anchor works fully without it — grouping falls back to built-in rules, and the optional written summary is simply hidden rather than faked. Apple Watch never has it, so anything captured there is refined by your iPhone or Mac once it syncs." },
      { title: "My devices aren’t syncing.", body: "Sync uses your own private iCloud database. Check that the same Apple Account is signed in on both devices and that iCloud Drive is on. If iCloud is unavailable, Anchor keeps working against a local database rather than refusing to start a timer." },
      { title: "How do I get my data out?", body: "Insights → Export gives you an Excel workbook, CSV or JSON. Anchor also ships a local MCP server so an AI client on your machine can query your history directly; see the instructions in Settings." },
      { title: "Reporting a bug", body: "Email what you did, what you expected, and what happened, plus your OS version. Please don’t include your distraction notes unless they’re relevant — they’re your business." }
    ]},
    terms: { title: "Simple beta terms.", lede: "Pre-release software for personal evaluation.", sections: [
      { title: "Beta software", body: "Features may change. Keep anything you cannot lose somewhere else." },
      { title: "Changes", body: "Last updated 17 August 2026." }
    ]},
    accessibility: { title: "Access is part of the experience.", lede: "Native Apple accessibility, not a separate mode.", sections: [
      { title: "Current support", body: "VoiceOver, Dynamic Type, and Reduce Motion are tested on the principal flows." }
    ]},
    testflight: { title: "The beta is taking shape.", lede: "We only link to Apple after the enrollment URL is verified.", testing: "Start a session, park a distraction, resume, and open Insights.", notIncluded: "A notarized Mac download and an App Store listing are not ready.", sections: [] }
  },
  requiredHomeCopy: [],
  prohibitedClaims: ["available on the app store"]
};
export const links = {
  home: `${site.url}/`, privacy: `${site.url}/privacy/`, support: `${site.url}/support/`,
  terms: `${site.url}/terms/`, accessibility: `${site.url}/accessibility/`, testflight: `${site.url}/testflight/`
};
