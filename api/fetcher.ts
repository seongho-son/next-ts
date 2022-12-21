import { SERVER_URL } from 'infra/constant'

export const getFetch = async (path: string) => {
  return await fetch(`${SERVER_URL}${path}`, {
    method: 'GET',
  })
    .then((res: Response) => res)
    .then((res: Response) => res.json())
}

export const postFetch = async (path: string, params: object) => {
  return await fetch(`${SERVER_URL}${path}`, {
    body: JSON.stringify(params),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res: Response) => res)
    .then((res: Response) => res.json())
}
