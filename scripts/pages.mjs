export const ACCOUNT_ID = "7d048325699a5acddb44d3be31cf6ba9";

/** Product id → Cloudflare Pages project. Calorie stays on its Worker. */
export const PRODUCT_PAGES = {
  kith: {
    project: "kith",
    domain: "kith.significanthobbies.com"
  },
  setline: {
    project: "setline",
    domain: "setline.significanthobbies.com"
  },
  anchor: {
    project: "anchor-landing",
    domain: "anchor.significanthobbies.com"
  },
  motion: {
    project: "motion",
    domain: "motion.significanthobbies.com"
  },
  indulge: {
    project: "indulge",
    domain: "indulge.significanthobbies.com"
  }
};

export const PRODUCT_IDS = Object.keys(PRODUCT_PAGES);
