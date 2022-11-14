import { POSTMAN_SERVER_URL } from 'infra/constant'
import useSWR from 'swr'
import { getFetch } from 'api/fetcher'
import qs from 'query-string'
import { Academies } from 'infra/type'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSWRBundle = <T>(url: string, params?: Record<string, any>) => {
  const wholeUrl = params ? url + '?' + qs.stringify(params) : url

  const { data, error } = useSWR<T>(
    `${POSTMAN_SERVER_URL}/${wholeUrl}`,
    getFetch,
  )

  return {
    data,
    error,
  }
}

export const useAcademies = () => useSWRBundle<Academies[]>(`/academies`)
