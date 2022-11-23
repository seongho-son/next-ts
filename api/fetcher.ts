import { POSTMAN_SERVER_URL } from 'infra/constant'

export const getFetch = async (url: string) => {
  return await fetch(`${POSTMAN_SERVER_URL}/${url}`)
    .then((res) => res)
    .then((res) => res.json())
}
