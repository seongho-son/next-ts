export const getFetch = async (url: string) => {
  return await fetch(url)
    .then((res) => res)
    .then((res) => res.json())
}
