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
  browserdaddy: Object.freeze({
    projectId: "app-7d828d30-f44d-4628-9663-d3f87eada8d3",
    publicKey: "ahk_pub_42216c0ca7f202cd386c7e2fd953cf0053b00ba55e35d042d26d771ff3b776d2",
  }),
  contextdaddy: Object.freeze({
    projectId: "app-2136b619-369a-4a5a-8f0f-6644b2be9e23",
    publicKey: "ahk_pub_a77558c571c9d02410f778d894e4b60237a3af14eb0339ddadf7c5ad6083722d",
  }),
  performancedaddy: Object.freeze({
    projectId: "app-0353c754-9016-4d8a-86cc-34577cf20895",
    publicKey: "ahk_pub_6f35554244952944cbd1bfc24d87190639c3b9786ee7180117a01f4220aba245",
  }),
  motion: Object.freeze({
    projectId: "app-5f75a787-65e1-462a-a5c8-4799bda0025a",
    publicKey: "ahk_pub_331dd5b3fe1413a10cf5f613248bb136350e943c368bcf1e0dcfa9d31e52bc3d",
  }),
  indulge: Object.freeze({
    projectId: "app-f5f71a17-e02f-4862-ba46-9b46a1ba3fbd",
    publicKey: "ahk_pub_c1dc4c49d868cf1fcaf3b9b37987e2184cc0884103704d885356293bc311b7d2",
  }),
});

export function appHealthConfigFor(productId) {
  return APP_HEALTH_CONFIG[productId] ?? null;
}
