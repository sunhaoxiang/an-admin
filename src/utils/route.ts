import type { MyRouterObject } from '@/types/router'

export function searchRoute(pathname: string, routes: MyRouterObject[]): MyRouterObject {
  let result: MyRouterObject = {}
  for (const route of routes) {
    if (route.path === pathname)
      return route

    if (route.children) {
      const res = searchRoute(pathname, route.children)
      if (Object.keys(res).length > 0)
        result = res
    }
  }

  return result
}

export function normalizeRoute () {

}
