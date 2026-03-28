export type CategorySlug =
  | "technology"
  | "fashion"
  | "automotive"
  | "food"
  | "home"
  | "beauty"
  | "travel";

export interface Category {
  slug: CategorySlug;
  name: string;
  emoji: string;
}

export interface Company {
  name: string;
  country: string;
  countryFlag: string;
  category: CategorySlug;
  description: string;
  website: string;
}
