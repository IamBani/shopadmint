import createAxios from '@/axios'
import { ContentTypeEnum } from '@/enums/httpEnum'

export function login(t={}):Promise<any> {
  return createAxios({
    baseURL: '/login',
    headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
}).post({data:t})
}