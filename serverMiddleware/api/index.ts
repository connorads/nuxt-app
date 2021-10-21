import { ServerMiddleware } from '@nuxt/types'

const myServerMiddleware: ServerMiddleware = function (req, res, next) {
  res.end("hello world")
}

export default myServerMiddleware
