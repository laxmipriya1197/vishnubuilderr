import { House, Ruler, Hammer, Sparkles, Building2, Building, FileText, Landmark, BriefcaseBusiness } from 'lucide-react';
import type { Page } from '../types';

export const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About us', page: 'about' },
  { label: 'Construction', page: 'construction' },
  { label: 'Real estate', page: 'real-estate' },
  { label: 'Contact us', page: 'contact' },
];

export const heroSlides = [
  { eyebrow: 'One trusted partner', title: ['Homes that feel like', 'they were made for you.'], body: 'Thoughtful construction, considered interiors, and property guidance — all shaped around the life you want to build.', accent: 'var(--orange)', image: '/images/hero-1.png' },
  { eyebrow: 'Built with purpose', title: ['Good spaces begin', 'with good thinking.'], body: 'From the first sketch to the final finish, we bring clarity, craft, and care to every detail of your project.', accent: '#7fb3a3', image: '/images/hero-2.png' },
  { eyebrow: 'A better way to build', title: ['Your next chapter', 'starts at home.'], body: 'Create a home you are proud of, or find the right place to grow — with a team that stays by your side.', accent: '#d9a05b', image: '/images/hero-3.png' },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const constructionServices = [
  { icon: House, title: 'Residential construction', text: 'End-to-end homes, built around your budget, brief, and everyday life.' },
  { icon: Building2, title: 'Commercial construction', text: 'Tailored commercial spaces, offices, and retail structures built to high standards.' },
  { icon: Ruler, title: 'Architectural works', text: 'Thoughtful plans that make the most of your land, light, and lifestyle.' },
  { icon: Hammer, title: 'Structural engineering', text: 'Strong foundations and reliable execution for lasting peace of mind.' },
  { icon: Sparkles, title: 'Interior designs', text: 'Warm, personal interiors with the right balance of function and feeling.' },
  { icon: Building, title: 'Top quality renovations', text: 'Give existing spaces a new purpose with careful, considered upgrades.' },
  { icon: FileText, title: 'Project consulting', text: 'Clear advice for decisions, budgets, approvals, and project coordination.' },
];

export const realEstateServices = [
  { icon: Landmark, title: 'Buy & sell property', text: 'Make your next property move with clear advice and local knowledge.' },
  { icon: BriefcaseBusiness, title: 'Real estate investments', text: 'Find opportunities that suit your goals, timeline, and confidence level.' },
  { icon: Sparkles, title: 'Marketing & management', text: 'Present your property well and keep the process moving smoothly.' },
  { icon: House, title: 'Property management', text: 'Practical support that protects your property and your peace of mind.' },
];

export const testimonials = [
  {
    name: 'Viji',
    role: 'Commercial Building',
    quote: 'I have approached Vishnu builder for my commercial building, They guided me with proper civil guidelines and the quality deliver is 100% awesome, I definitely recommend if you have Idea for construction',
    rating: 5,
  },
  {
    name: 'Aravind',
    role: 'Engineering & Interiors',
    quote: 'Mr.Engineer Vishnu exceeded expectations with a perfect blend of exceptional engineering and outstanding interior work. His attention to detail, problem-solving, and aesthetic sense resulted in a seamless and impressive project. Highly recommend for a comprehensive and top-notch service.',
    rating: 5,
  },
  {
    name: 'Pavi Natraj',
    role: 'Home Building Project',
    quote: "Everything was simple and beyond my expectations when working with Vishnu Builder. The quality and level of service were excellent. Give them a call if you're searching for a qualified builder with excellent communication skills, honesty, and integrity.",
    rating: 5,
  },
  {
    name: 'Indhumathi',
    role: 'Residential Build',
    quote: "Absolutely amazing. Can't thank you enough for all the hard work from an amazing team. So pleased with the build. Highly professional and such a friendly bunch. Would recommend to anyone who needs building work.",
    rating: 5,
  },
  {
    name: 'Vignesh',
    role: 'Home Alteration Work',
    quote: 'Very good and supportive team, done alteration work for my home, was great to interact and directly visit the sites on regular basis. Will comeback for another project soon',
    rating: 5,
  },
  {
    name: 'Gokul K',
    role: 'Plot Planning & Design',
    quote: 'A clear explanation of project and plans from Vishnu Builders they give the perfect plan for our plots.',
    rating: 5,
  },
];

export const coimbatoreLocations = [
  'Saravanampatti',
  'Kalapatti',
  'Peelamedu',
  'Vadavalli',
  'Vilankurichi',
  'Singanallur',
  'Thudiyalur',
  'Kovaipudur',
  'Neelambur',
  'Ondipudur',
  'Ramanathapuram',
  'Saibaba Colony',
  'R.S. Puram',
  'Race Course',
  'Sivanandhapuram',
  'Ganapathy',
  'Kavundampalayam',
  'Pannimadai',
  'Vellakinar',
  'Edayarpalayam',
  'P.N. Pudur',
  'Veerakeralam',
  'Vedapatti',
  'Perur',
  'Podanur',
  'Sundarapuram',
  'Kuniyamuthur',
  'Madukkarai',
  'Echanari',
  'Vellalore',
  'Neelikonampalayam',
  'Uppilipalayam',
  'Sowripalayam',
  'Avarampalayam',
  'Cheran Ma Nagar',
  'Kovilpalayam',
  'Narasimhanaickenpalayam',
  'Periyanaickenpalayam',
  'Irugur',
  'Sulur',
  'Karumathampatti',
  'Thondamuthur',
  'Mettupalayam Road',
  'Trichy Road',
  'Avinashi Road',
  'Karamadai',
  'Malumichampatti',
  'Thirumalayampalayam',
  'Eachanari',
  'Neelambur Road',
  'Location not mentioned / Other',
];

