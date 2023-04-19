import type { ReactNode } from 'react'

export interface MetaObject {
  auth?: boolean
  title?: string
  key?: string
  icon?: ReactNode
  index?: number
}

export interface MyRouterObject {
  element?: ReactNode
  path?: string
  meta?: MetaObject
  children?: MyRouterObject[]
}
