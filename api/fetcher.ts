import { SERVER_URL } from 'infra/constant'

export const getFetch = async (path: string) => {
  return await fetch(`${SERVER_URL}${path}`)
    .then((res) => res)
    .then((res) => res.json())
}

export const postFetch = async (path: string, params: object) => {
  return await fetch(`${SERVER_URL}${path}`, {
    body: JSON.stringify(params),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res)
    .then((res) => res.json())
}
