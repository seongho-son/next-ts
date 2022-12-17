export interface IdName {
  id: number
  name: string
}

export interface Blog extends IdName {
  subject: string
  content: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}
