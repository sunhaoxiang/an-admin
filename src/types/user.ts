export interface LoginData {
  email: string
  passwd: string
  captcha: string
}

export interface LoginRes {
  _id: string
  token: string
  email: string
}

export interface UserInfoRes {
  _id: string
  role: string
  email: string
  avatar: string
}
