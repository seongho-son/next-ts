export interface IdName {
  id: number
  name: string
}

export interface Image {
  id: number
  url: string
}

export type Category = IdName

export interface Blog extends IdName {
  subject: string
  body: string
  categories: Category[]
  images: Image[]
  createdAt: string
  thumbnail: string
  updatedAt: string
  deletedAt: string
}
