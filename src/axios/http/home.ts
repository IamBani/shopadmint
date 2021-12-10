import createAxios from '@/axios'

export function test(t={}):Promise<any> {
  return createAxios().get(t)
}
  