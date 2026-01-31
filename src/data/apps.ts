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
    id: 'olel',
    name: 'olel',
    icon: '/images/Icon_olel_light.png',
    tagline: 'Simple Note App',
    description: 'A simple and intuitive note-taking application designed for ease of use.',
    features: [
      'Simple and clean interface',
      'Easy organization',
      'Quick note creation',
    ],
    tags: ['iOS', 'Note', 'Productivity'],
    privacyPolicyPath: '/olel/privacy-policy',
    termsOfUsePath: '/olel/terms-of-use',
    termsOfSalePath: '/olel/terms-of-sale',
  },
  {
    id: 'zosho',
    name: 'Zosho',
    icon: '📚',
    tagline: '蔵書管理',
    description: 'Your personal book collection manager. Keep track of all your books in one place.',
    features: [
      'Book catalog management',
      'Reading progress tracking',
      'Collection organization',
    ],
    tags: ['iOS', 'Books', 'Utility'],
    privacyPolicyPath: '/zosho/privacy-policy',
    termsOfUsePath: '/zosho/terms-of-use',
    termsOfSalePath: '/zosho/terms-of-sale',
  },
  {
    id: 'ontape',
    name: 'OnTape',
    icon: '🎙️',
    tagline: 'Lofi Recorder',
    description: 'A lo-fi style recorder for capturing audio with a vintage aesthetic.',
    features: [
      'Lo-fi audio recording',
      'Vintage tape effects',
      'Simple controls',
    ],
    tags: ['iOS', 'Audio', 'Creative'],
    privacyPolicyPath: '/ontape/privacy-policy',
    termsOfUsePath: '/ontape/terms-of-use',
    termsOfSalePath: '/ontape/terms-of-sale',
  },
  {
    id: 'cashcrew',
    name: 'CashCrew',
    icon: '💰',
    tagline: '将来のお金の動きがわかる家計簿',
    description: 'A household budget app that helps you visualize your future financial flow.',
    features: [
      'Future cash flow visualization',
      'Budget planning',
      'Expense tracking',
    ],
    tags: ['iOS', 'Finance', 'Utility'],
    privacyPolicyPath: '/cashcrew/privacy-policy',
    termsOfUsePath: '/cashcrew/terms-of-use',
    termsOfSalePath: '/cashcrew/terms-of-sale',
  },
];
