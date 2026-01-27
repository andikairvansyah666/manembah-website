export type PropertyHomes = {
  name: string
  slug: string
  location: string
  detailLocation: string
  rate: string
  beds: number
  baths: number
  area: number
  images: PropertyImage[]
  description: string
}

interface PropertyImage {
  src: string;
}
