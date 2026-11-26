// Everything you'd want to edit lives here.
import verizonLogo from "./assets/logos/verizon.svg";
import timesproLogo from "./assets/logos/timespro.png";
import ltmLogo from "./assets/logos/ltm.png";
import wiproLogo from "./assets/logos/wipro.png";
import awsSaaBadge from "./assets/badges/aws-saa.png";
import awsDvaBadge from "./assets/badges/aws-dva.png";

export const site = {
  name: "Soumallya Hazra",
  shortName: "Soumallya",
  role: "Software Engineer",
  location: "India",
  email: "soumallyahazra2217@gmail.com",
  // The separate, project-focused portfolio site
  portfolioUrl: "https://mallo3.github.io/home",
};

export const hero = {
  greeting: "Hey, I'm Soumallya.",
  rotating: [
    "I love riding.",
    "I build cool websites.",
    "I like to travel too.",
  ],
  blurb:
    "Software engineer at an MNC, mostly building backend systems for e-commerce. Chill — it's not my resume wala website. 😎",
};

export const about = {
  paragraphs: [
    "I'm a software engineer who spends most of the day on the backend: storing customer data, running offers and gamification, and processing events for large e-commerce platforms.",
    "Outside work I tinker with frontends, solve algorithm problems for fun, and plan the next trip (usually around food).",
  ],
  facts: [
    { label: "Currently", value: "Verizon" },
    { label: "Previously", value: "TimesPro · LTM · Wipro" },
    { label: "Focus", value: "Backend · Cloud · Commerce" },
  ],
};

// Newest first. `role`, `period` and `points` are optional — blanks are hidden.
// Fill in your titles and dates, e.g. period: "2023 — 2024".
export const experience = [
  {
    company: "Verizon",
    logo: verizonLogo,
    url: "https://www.verizon.com",
    role: "",
    period: "Present",
    current: true,
    points: [],
  },
  {
    company: "TimesPro",
    logo: timesproLogo,
    url: "https://timespro.com",
    role: "",
    period: "",
    points: [],
  },
  {
    company: "LTM",
    logo: ltmLogo,
    logoFit: "cover", // square logo: fill the tile
    url: "https://www.ltimindtree.com",
    role: "",
    period: "",
    points: [],
  },
  {
    company: "Wipro",
    logo: wiproLogo,
    logoFit: "cover",
    url: "https://www.wipro.com",
    role: "",
    period: "",
    points: [],
  },
];

// From https://www.credly.com/users/mallo3/badges
export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issued: "Aug 2026",
    expires: "Aug 2029",
    image: awsSaaBadge,
    url: "https://www.credly.com/badges/92384dbd-d2c0-434b-b11c-e0a898fe3549",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    issued: "Aug 2026",
    expires: "Aug 2029",
    image: awsDvaBadge,
    url: "https://www.credly.com/badges/1770b5da-497e-4213-ab10-cf803359af57",
  },
];
export const credlyProfile = "https://www.credly.com/users/mallo3/badges";

export const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "SQL"] },
  { group: "Cloud & Backend", items: ["AWS", "REST APIs", "Event processing"] },
  { group: "Frontend", items: ["React", "HTML", "CSS"] },
  { group: "Platforms", items: ["Salesforce Commerce Cloud", "Git"] },
  { group: "Fundamentals", items: ["Data structures", "Algorithms"] },
];

export const work = [
  {
    title: "Commerce backend",
    tag: "Backend",
    description:
      "Customer data storage, offers, gamification and event processing for an e-commerce web application.",
  },
  {
    title: "Salesforce Commerce Cloud",
    tag: "E-commerce",
    description:
      "E-commerce platform development using Salesforce Commerce Cloud, aka Demandware.",
  },
  {
    title: "Portfolio website",
    tag: "Frontend",
    description: "A separate portfolio site showcasing projects. You're looking at its chill sibling.",
    link: "https://mallo3.github.io/home",
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/mallo3", icon: "github" },
  { name: "Facebook", url: "https://facebook.com/profile.php?id=100009813616128", icon: "facebook" },
  // { name: "LinkedIn", url: "https://linkedin.com/in/your-handle", icon: "linkedin" },
  // { name: "X", url: "https://x.com/your-handle", icon: "x" },
];
