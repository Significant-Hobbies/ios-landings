export type Chapter = {
  name: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
};

export type Faq = { question: string; answer: string };
export type LegalSection = { title: string; body: string };
export type LegalPage = { title: string; lede: string; sections: LegalSection[] };

export type SiteConfig = {
  name: string;
  url: string;
  tagline: string;
  headline: [string, string];
  lede: string;
  kicker: string;
  summary: string;
  status: string;
  platforms: string[];
  themeColor: string;
  mark: string;
  socialImage: string;
  tokens: {
    paper: string;
    field: string;
    ink: string;
    inkSoft: string;
    inkFaint: string;
    accent: string;
    accentDark: string;
    accentSoft: string;
    lanternA: string;
    lanternB: string;
    lanternC: string;
    blush: string;
    inkOnDark: string;
    inkOnAccent?: string;
  };
  colorScheme: "light" | "dark";
  hero: { image: string; alt: string; caption: string };
  gallery: { src: string; alt: string }[];
  applicationCategory: string;
  availability: "unreleased" | "testflight" | "app-store" | "web-app";
  appStoreUrl?: string;
  appStoreId?: string;
  appUrl?: string;
  appCtaLabel?: string;
  betaNote: string;
  tension: { statement: string; title: string; copy: string };
  chaptersKicker: string;
  chaptersTitle: string;
  chaptersLede: string;
  chapters: Chapter[];
  fit: { kicker: string; title: string; yes: string; no: string };
  privacy: { kicker: string; title: string; copy: string };
  faqs: Faq[];
  founder: { quote: string; credit: string; note: string };
  closingTitle: [string, string];
  footerFinePrint: string;
  capabilities: string[];
  boundaries: string[];
  /**
   * Override the generic "When to use this" lines in llms.txt. Without this a
   * product gets boilerplate derived from its tagline, which tells an agent
   * nothing it could not read off the page. State what the product is actually
   * good for and what it is not.
   */
  agentFit?: { bestFit: string[]; notAFit: string[] };
  /** Local commands worth exposing to an agent, rendered as a `## CLI` block. */
  agentCli?: string[];
  lastUpdated: string;
  legal: {
    privacy: LegalPage;
    support: LegalPage;
    terms: LegalPage;
    accessibility: LegalPage;
    testflight: LegalPage & { testing: string; notIncluded: string };
  };
  requiredHomeCopy: string[];
  prohibitedClaims: string[];
};
