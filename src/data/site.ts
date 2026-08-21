// Edit this file to personalize the site. Nothing else needs to change
// for basic content updates — components just read from here.

export const profile = {
  // TODO: confirm/replace with your preferred display name
  name: 'Farouk Ashraf',
  tagline: 'Full-stack developer building production SaaS and mobile apps for the Egyptian market',
  email: 'fifoashraf991@gmail.com',
  github: 'https://github.com/FaroukAshraf991',
  linkedin: 'https://www.linkedin.com/in/farouk-ashraf-3ba272330/',
  // TODO: add a link to a hosted resume PDF (e.g. in /public/resume.pdf) once it's ready
  resumeUrl: '',
}

export type Project = {
  slug: string
  name: string
  headline: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  // Real screenshot path (in /public/screenshots/) — takes priority over
  // the gradient placeholder below when set. See PORTFOLIO_GUIDE.md §5.
  screenshot?: string
  // Gradient used for the placeholder thumbnail until a real screenshot
  // is dropped into /public/screenshots/<slug>.png — see PORTFOLIO_GUIDE.md §5.
  gradient: string
  accentEmoji: string
}

export const projects: Project[] = [
  {
    slug: 'rollsquad',
    name: 'RollSquad',
    headline: 'Real-time coordination for friends on the road.',
    description:
      "A cross-platform mobile app that lets friend groups share live location, send walkie-talkie-style voice messages, and coordinate while driving — built Arabic-first with full RTL support for the MENA market. Includes end-to-end encrypted voice/chat, background location with staleness indicators on a live map, and a deep-link squad-invite flow.",
    tags: ['React Native', 'Expo', 'Supabase', 'PostGIS', 'Realtime', 'E2E Encryption', 'i18n'],
    githubUrl: 'https://github.com/FaroukAshraf991/rollSquad',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
    accentEmoji: '📍',
  },
  {
    slug: 'mansy',
    name: "Barber's Dashboard",
    headline: 'WhatsApp-native booking, built for solo barbers.',
    description:
      'A booking SaaS designed around how independent barbers in Egypt actually work: a public booking link shared straight from Instagram/WhatsApp, and an owner dashboard for managing services, availability, clients, and billing. Evolved from a single-tenant MVP into a full multi-tenant SaaS with subscription tiers, feature-gating, and an admin operator portal.',
    tags: ['Next.js', 'React', 'Supabase', 'Multi-tenant SaaS', 'RLS', 'Tailwind CSS'],
    githubUrl: 'https://github.com/FaroukAshraf991/dashboard',
    liveUrl: 'https://dashboard-ruby-six-73.vercel.app/barber-3746e7',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #22c55e 100%)',
    accentEmoji: '💈',
  },
  {
    slug: 'stepgarage',
    name: 'StepGarage — Workshop Manager',
    headline: 'Service history and receipts for Egyptian auto workshops.',
    description:
      'A multi-tenant garage management system that tracks customers, vehicles, and full service history with running cost totals, printable receipts, and printable vehicle reports. Includes an Egyptian-plate display component and a bilingual (Arabic/English) interface built mobile-first.',
    tags: ['Next.js', 'React', 'Supabase', 'RLS', 'Tailwind CSS', 'PDF Generation'],
    githubUrl: 'https://github.com/FaroukAshraf991/StepGarage',
    liveUrl: 'https://manage-workshop.vercel.app',
    gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
    accentEmoji: '🔧',
  },
  {
    slug: 'glimmer',
    name: 'Glimmer',
    headline: 'A light for low moments.',
    description:
      'A mobile mental-wellbeing companion — not a therapist or chatbot — built around a simple loop: Rescue (breathing exercises, AI-guided talk-it-out, small suggested actions), Reflection (mood logging), and Momentum (tracking small wins). Crisis resources are always reachable without logging in, with a distinctive "deep dusk" visual design.',
    tags: ['React Native', 'Expo', 'Supabase', 'Groq / Llama 3.3', 'Product Design'],
    githubUrl: 'https://github.com/FaroukAshraf991/glimmer',
    liveUrl: 'https://getglimmer.vercel.app',
    screenshot: 'screenshots/glimmer.png',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
    accentEmoji: '✨',
  },
  {
    slug: 'mapy',
    name: 'Mapy',
    headline: 'Private navigation, no paid APIs.',
    description:
      'A Flutter navigation app built on MapLibre GL, OSRM, and Nominatim instead of Google/Mapbox — full turn-by-turn routing, geocoding search, saved locations synced via Supabase, and a 3D navigation engine with auto-bearing and tilt. Built to prove real navigation UX doesn\'t require a paid API bill.',
    tags: ['Flutter', 'MapLibre GL', 'OSRM', 'Supabase', 'Geolocation'],
    githubUrl: 'https://github.com/FaroukAshraf991/mapy',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 100%)',
    accentEmoji: '🧭',
  },
  {
    slug: 'sip-with-nagdi',
    name: 'Sip with Nagdi',
    headline: 'Bilingual e-commerce for specialty coffee gear.',
    description:
      'A storefront selling coffee equipment (Hario, Fellow, La Marzocco, and more) to Egyptian customers, with a full admin dashboard for products, discounts, and orders, and a bilingual EN/AR customer experience.',
    tags: ['Next.js', 'React', 'Supabase', 'Zustand', 'E-commerce'],
    githubUrl: 'https://github.com/FaroukAshraf991/sip-with-nagdi',
    liveUrl: 'https://sipwithnagdi.vercel.app',
    screenshot: 'screenshots/sip-with-nagdi.png',
    gradient: 'linear-gradient(135deg, #92400e 0%, #451a03 100%)',
    accentEmoji: '☕',
  },
]

export const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  Mobile: ['React Native', 'Expo', 'Flutter', 'Dart'],
  Backend: ['Supabase', 'PostgreSQL', 'Postgres RLS', 'PostGIS', 'Edge Functions'],
  'Product & Infra': ['Realtime systems', 'i18n / RTL', 'Multi-tenant SaaS', 'CI/CD', 'Vercel'],
}
