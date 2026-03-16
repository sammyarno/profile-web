// import baileys from '@/assets/images/baileys-home.jpg';
import creant from '@/assets/images/creant-home.jpg';
// import egaGarmentAdmin from '@/assets/images/egagarment-admin-home.jpg';
import egaGarment from '@/assets/images/egagarment-home.jpg';
// import klotifaiAdmin from '@/assets/images/klotifai-admin-home.jpg';
// import klotifaiBio from '@/assets/images/klotifai-bio-home.jpg';
// import klotifai from '@/assets/images/klotifai-home.jpg';
// import tanakayu from '@/assets/images/tanakayu-home.jpg';
import tomatoBricks from '@/assets/images/tomato-home.jpg';
// import ultimaxma from '@/assets/images/ultimaxma-home.jpg';
import tutorAja from '@/assets/images/tutor-home.jpg';

export const colorMap = {
  cuerank: 'border-cuerank',
  creant: 'border-creant',
  tomatobricks: 'border-tomatobricks',
  tutoraja: 'border-tutoraja',
  'ega-garment': 'border-egagarment',
  'baileys-playhouse': 'border-baileys',
  'ega-garment-admin': 'border-egagarmentadmin',
  'klotifai-admin': 'border-klotifaiadmin',
  'klotifai-store': 'border-klotifai',
  'klotifai-bio': 'border-klotifaibio',
  tanakayu: 'border-tanakayu',
  'ultimaxma-portal': 'border-ultimaxma',
} as const;

export type IColorKey = keyof typeof colorMap;

const portfolios = [
  {
    id: 'cuerank',
    year: 2026,
    // preview: cuerank,
    name: 'CueRank',
    description:
      'CueRank is a billiards ranking platform for Indonesia/SEA region. The web application features a dual-Elo rating system for 9-ball and 10-ball, QR-based matchmaking, live scoreboard, tier progression, and a mobile-first PWA design.',
    url: 'https://cuerank.com',
    themeColor: '#10B981',
    skills: ['Next.js', 'Typescript', 'Tailwind CSS', 'Supabase', 'shadcn/ui'],
  },
  {
    id: 'baileys-playhouse',
    year: 2026,
    // preview: baileys,
    name: "Bailey's Playhouse",
    description:
      "Bailey's Playhouse is a cage-free pet hotel and daycare platform for dogs in BSD, Indonesia. The web application provides a booking system for pet owners and an admin dashboard for managing dogs, bookings, pricing, and calendar.",
    url: 'https://baileysplayhouse.com',
    themeColor: '#4CAF50',
    skills: ['Next.js', 'Typescript', 'Tailwind CSS', 'Supabase', 'shadcn/ui'],
  },
  {
    id: 'klotifai-bio',
    year: 2026,
    // preview: klotifaiBio,
    name: 'Klotifai Bio',
    description:
      "Klotifai Bio is a premium bio-link landing page for the Klotifai men's fashion brand. The page showcases trust signals, testimonials, and directs customers to shop on Shopee, TikTok, and Tokopedia.",
    url: 'https://bio.klotifai.com',
    themeColor: '#1E88E5',
    skills: ['React', 'Typescript', 'Tailwind CSS', 'Vite', 'Embla Carousel'],
  },
  {
    id: 'ega-garment-admin',
    year: 2025,
    // preview: egaGarmentAdmin,
    name: 'Ega Garment Admin',
    description:
      'Ega Garment Admin is a production management system for a garment factory in Indonesia. The web application provides order management, quality control inspections, operator dashboards, and master data administration.',
    url: 'https://system.egagarment.com',
    themeColor: '#adacac',
    skills: ['React', 'Typescript', 'Tailwind CSS', 'Supabase', 'TanStack', 'shadcn/ui'],
  },
  {
    id: 'klotifai-admin',
    year: 2025,
    // preview: klotifaiAdmin,
    name: 'Klotifai Admin',
    description:
      'Klotifai Admin is an e-commerce dashboard for managing the Klotifai online clothing store. The web application provides product, order, customer, promotion, inventory, and payment management with audit logging.',
    url: 'https://klotifai-admin-web.vercel.app',
    themeColor: '#adacac',
    skills: ['Next.js', 'Typescript', 'Tailwind CSS', 'Supabase', 'shadcn/ui', 'TanStack'],
  },
  {
    id: 'klotifai-store',
    year: 2025,
    // preview: klotifai,
    name: 'Klotifai Store',
    description:
      "Klotifai is an Indonesian men's fashion e-commerce store specializing in premium casual shirts. The web application provides product browsing, shopping cart, checkout with Xendit payments, and multi-language support.",
    url: 'https://klotifai.com',
    themeColor: '#ff6b35',
    skills: ['Next.js', 'Typescript', 'Tailwind CSS', 'Supabase', 'Zustand', 'Xendit', 'i18next'],
  },
  {
    id: 'tanakayu',
    year: 2025,
    // preview: tanakayu,
    name: 'Tanakayu',
    description:
      'Tanakayu is a community management platform for neighborhood administration in Indonesia. The web application provides announcements, event management, financial transparency, membership verification with QR codes, and role-based access control.',
    url: 'https://tanakayu.org',
    themeColor: '#1F3D2B',
    skills: ['Next.js', 'Typescript', 'Tailwind CSS', 'Supabase', 'Zustand', 'shadcn/ui'],
  },
  {
    id: 'ultimaxma-portal',
    year: 2025,
    // preview: ultimaxma,
    name: 'Ultimax Mitra Agung',
    description:
      'Ultimax Mitra Agung is an ISO 9001 certified post-tensioning parts manufacturer in Indonesia, exporting to 32+ countries. The web application provides a Company Profile, product catalog, and customer inquiry management.',
    url: 'https://beta.ultimaxma.com/',
    themeColor: '#d41111',
    skills: ['Next.js', 'Typescript', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 'tomatobricks',
    year: 2022,
    preview: tomatoBricks,
    name: 'Tomato Bricks',
    description:
      'Tomato Bricks is an Indonesian Property Agent focused in providing the best property solution for you. The web application provides Company Profile and Property Listing.',
    url: 'https://tomatobricks.com',
    themeColor: '#ae1a1f',
    skills: ['React', 'Javascript', 'SCSS', 'Express', 'mySQL'],
  },
  {
    id: 'ega-garment',
    year: 2022,
    preview: egaGarment,
    name: 'Ega Garment',
    description:
      'Ega Garment is a textile warehouse placed in Indonesia. The web application provides Company Profile and its products.',
    url: 'https://egagarment.com',
    themeColor: '#c62028',
    skills: ['React', 'Javascript', 'SCSS', 'Redux'],
  },
  {
    id: 'creant',
    year: 2021,
    preview: creant,
    name: 'CRÉANT Beauty',
    description:
      'CRÉANT Beauty is a beauty brand that focused on explore your inner natural beauty. The web application provides Company Profile and Online Shop.',
    url: 'https://creant.id',
    themeColor: '#c7b8d9',
    skills: ['React', 'Typescript', 'SCSS', 'Express', 'mySQL'],
  },
  {
    id: 'tutoraja',
    year: 2019,
    preview: tutorAja,
    name: 'Tutor Aja',
    description:
      'Tutor Aja is an Indonesian on-demand learning course for universities. The web application provides Company Profile and Course booking.',
    url: 'https://tutoraja.com',
    themeColor: '#f4983d',
    skills: ['React', 'Javascript', 'SCSS', 'Express', 'mySQL'],
  },
];

export default portfolios;
