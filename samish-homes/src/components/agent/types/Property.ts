export interface Property {
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
  status: string;
  documentUrl?: string; // ⬅️ Optional URL for attached doc
}
