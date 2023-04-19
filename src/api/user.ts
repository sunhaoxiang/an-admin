import { axios } from '@/utils'
import type { LoginData, LoginRes } from '@/types/user'

export async function userLoginApi(data: LoginData): Promise<LoginRes> {
  return axios({
    url: '/user/login',
    method: 'post',
    data,
  })
}
