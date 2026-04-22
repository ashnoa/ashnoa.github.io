export interface App {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  appStoreUrl?: string;
  privacyPolicyPath: string;
  termsOfUsePath: string;
  termsOfSalePath: string;
}

export const apps: App[] = [
  {
    id: "olel",
    name: "olel",
    icon: "/images/Icon_olel_light.png",
    tagline: "Simple Note App",
    description:
      "A simple and intuitive note-taking application designed for ease of use.",
    features: [
      "Simple and clean interface",
      "Easy organization",
      "Quick note creation",
    ],
    tags: ["iOS", "Note", "Productivity"],
    appStoreUrl: "https://apps.apple.com/us/app/olel-simple-note-app/id6739726367?itscg=30200&itsct=apps_box_link&mttnsubad=6739726367",
    privacyPolicyPath: "/olel/privacy-policy",
    termsOfUsePath: "/olel/terms-of-use",
    termsOfSalePath: "/olel/terms-of-sale",
  },
  {
    id: "zosho",
    name: "Zosho",
    icon: "/images/icon_zosho.png",
    tagline: "蔵書管理",
    description:
      "Your personal book collection manager. Keep track of all your books in one place.",
    features: [
      "Book catalog management with NDC",
      "Easy book registration by barcode reading",
      "Check your book statistics",
    ],
    tags: ["iOS", "Books", "Utility"],
    appStoreUrl: "https://apps.apple.com/jp/app/zosho-%E8%94%B5%E6%9B%B8%E7%AE%A1%E7%90%86/id6743356136?itscg=30200&itsct=apps_box_link&mttnsubad=6743356136",
    privacyPolicyPath: "/zosho/privacy-policy",
    termsOfUsePath: "/zosho/terms-of-use",
    termsOfSalePath: "/zosho/terms-of-sale",
  },
  {
    id: "ontape",
    name: "OnTape",
    icon: "/images/icon_ontape.png",
    tagline: "Lofi Recorder",
    description:
      "A lo-fi style recorder for capturing audio with a vintage aesthetic.",
    features: [
      "Lo-fi audio recording",
      "Vintage tape effects",
      "Simple controls",
    ],
    tags: ["iOS", "Audio", "Creative"],
    appStoreUrl: "https://apps.apple.com/us/app/ontape-lofi-recorder/id6749952929?itscg=30200&itsct=apps_box_link&mttnsubad=6749952929",
    privacyPolicyPath: "/ontape/privacy-policy",
    termsOfUsePath: "/ontape/terms-of-use",
    termsOfSalePath: "/ontape/terms-of-sale",
  },
  {
    id: "cashcrew",
    name: "CashCrew",
    icon: "/images/icon_cashcrew.png",
    tagline: "将来のお金の動きがわかる家計簿",
    description:
      "A household budget app that helps you visualize your future financial flow.",
    features: [
      "Future cash flow visualization",
      "Budget planning",
      "Expense tracking",
    ],
    tags: ["iOS", "Finance", "Utility"],
    appStoreUrl: "https://apps.apple.com/jp/app/cashcrew-%E5%B0%86%E6%9D%A5%E3%81%AE%E3%81%8A%E9%87%91%E3%81%AE%E5%8B%95%E3%81%8D%E3%81%8C%E3%82%8F%E3%81%8B%E3%82%8B%E5%AE%B6%E8%A8%88%E7%B0%BF/id6757076645?itscg=30200&itsct=apps_box_link&mttnsubad=6757076645",
    privacyPolicyPath: "/cashcrew/privacy-policy",
    termsOfUsePath: "/cashcrew/terms-of-use",
    termsOfSalePath: "/cashcrew/terms-of-sale",
  },
  {
    id: "barnal",
    name: "Barnal",
    icon: "/images/icon_barnal.png",
    tagline: "Menu bar journal",
    description: "A simple menu bar journal for macOS.",
    features: [
      "Write instantly from the menu bar",
      "Automatic daily notes",
      "Smart autosave",
      "Your files, your folder",
      "Optional new note each day",
    ],
    tags: ["macOS", "Productivity", "Utility"],
    appStoreUrl: "https://apps.apple.com/us/app/barnal-menu-bar-journal/id6758489324?mt=12",
    privacyPolicyPath: "/barnal/privacy-policy",
    termsOfUsePath: "/barnal/terms-of-use",
    termsOfSalePath: "/barnal/terms-of-sale",
  },
  {
    id: "dia",
    name: "dia",
    icon: "/images/icon_dia.png",
    tagline: "Guitar Chord Diagram",
    description:
      "An interactive app for creating, viewing, and listening to guitar chord diagrams. Explore 3,000+ preset voicings, hear chords with realistic audio, and learn music theory with visual interval labels.",
    features: [
      "3,000+ preset chord voicings",
      "Interactive chord diagram editor",
      "Realistic guitar audio playback",
      "Music theory interval/degree display",
      "Custom tuning support",
      "Left-handed mode",
    ],
    tags: ["iOS", "Music", "Education"],
    privacyPolicyPath: "/dia/privacy-policy",
    termsOfUsePath: "/dia/terms-of-use",
    termsOfSalePath: "/dia/terms-of-sale",
  },
];
