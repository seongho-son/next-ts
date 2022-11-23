export interface IdName {
  id: number
  name: string
}

export interface Blog extends IdName {
  intro: string
  categories: IdName[]
  location: string
  address: string
  thumbnail: string
  images: string[]
  closeAt: string
}
