import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function readJsonFile<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

function readCollection<T>(collectionName: string): T[] {
  const dir = path.join(contentDir, collectionName);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJsonFile<T>(path.join(dir, f)));
}

// Types
export interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  edition: string;
  eventDate: string;
  infoCards: { icon: string; title: string; description: string }[];
}

export interface RouteContent {
  name: string;
  distance: string;
  description: string;
  startLocation: string;
  mapEmbedUrl: string;
  highlights: { text: string }[];
}

export interface FAQContent {
  question: string;
  answer: string;
  order: number;
}

export interface SponsorContent {
  name: string;
  logo: string;
  website: string;
  tier: "hoofdsponsor" | "sponsor" | "partner";
  order: number;
}

export interface BoardMemberContent {
  name: string;
  role: string;
  photo: string;
  order: number;
}

export interface VolunteerGroupContent {
  name: string;
  description: string;
  icon: string;
  order: number;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  kvk: string;
}

// Getters
export function getHomeContent(): HomeContent {
  return readJsonFile<HomeContent>(
    path.join(contentDir, "home", "index.json")
  );
}

export function getSiteSettings(): SiteSettings {
  return readJsonFile<SiteSettings>(
    path.join(contentDir, "settings", "index.json")
  );
}

export function getRoutes(): RouteContent[] {
  return readCollection<RouteContent>("routes");
}

export function getFAQs(): FAQContent[] {
  return readCollection<FAQContent>("faq").sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getSponsors(): SponsorContent[] {
  return readCollection<SponsorContent>("sponsors").sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getBoardMembers(): BoardMemberContent[] {
  return readCollection<BoardMemberContent>("organisatie").sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getVolunteerGroups(): VolunteerGroupContent[] {
  return readCollection<VolunteerGroupContent>("vrijwilligers").sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}
