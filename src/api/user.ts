import { axios } from '@/utils'
import type { LoginData, LoginRes, UserInfoRes } from '@/types/user'

export async function userLoginApi(data: LoginData): Promise<LoginRes> {
  return axios({
    url: '/user/login',
    method: 'post',
    data,
  })
}

export async function userInfoApi(): Promise<UserInfoRes> {
  return axios({
    url: '/user/info',
    method: 'get',
  })
}
