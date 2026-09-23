const APP_HEALTH_CONFIG = Object.freeze({
  anchor: Object.freeze({
    projectId: "app-4784890d-36ad-4350-9894-98e9cc30c31e",
    publicKey: "ahk_pub_7c48fabf379142912a42cb6774a2c7bc555d890f5809b59f5db5bde02c4b6554",
  }),
  calorie: Object.freeze({
    projectId: "app-a2a82816-4bb4-4bea-b5e7-7e982172e79c",
    publicKey: "ahk_pub_36a9474d23773b3586e5488918b62d5acbd78150d7ce1f5971bfa560e4df404a",
  }),
  kith: Object.freeze({
    projectId: "app-de5dafb3-3d95-4128-9237-995811f3562a",
    publicKey: "ahk_pub_5500981d8665601e6971008e5d598002950cb89d35b0b19076fa15b22384dd41",
  }),
  setline: Object.freeze({
    projectId: "app-59c90aa8-3749-483d-b813-ba49ea699f18",
    publicKey: "ahk_pub_35d2981dfd952d8c2649871054c150d96208fb70493217b2126461fe177e61b9",
  }),
});

export function appHealthConfigFor(productId) {
  return APP_HEALTH_CONFIG[productId] ?? null;
}
