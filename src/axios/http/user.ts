import createAxios from '@/axios'

export function user(t={}):Promise<any> {
  return createAxios(
    { baseURL: '/user', }
  ).get(t)
}
  