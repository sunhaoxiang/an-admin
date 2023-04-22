export interface LoginData {
  email: string
  passwd: string
  captcha: string
}

export interface LoginRes {
  token: string
  _id: string
  email: string
}

export interface UserInfoRes {
  _id: string
  role: string
  email: string
  avatar: string
}
