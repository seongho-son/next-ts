export const titleFormat = (text: string) =>
  text.split('title(')[1] ? text.split('title(')[1].split(')')[0] : ''

export const subjectFormat = (text: string) =>
  text.split('subject(')[1] ? text.split('subject(')[1].split(')')[0] : ''

export const thumbnailFormat = (text: string) =>
  text.split('](/image/')[1] ? text.split('](/image/')[1].split(')')[0] : ''

export const contentFormat = (text: string) => text.split('---').slice(2).join()
