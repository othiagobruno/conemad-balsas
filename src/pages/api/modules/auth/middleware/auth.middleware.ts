import { User } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { NextApiRequest } from 'next'
import { Middleware } from 'next-api-route-middleware'

export type IAuthReq = NextApiRequest & {
  user: User
}

export const AuthMiddleware = (): Middleware => {
  return async function (req: any, res, next) {
    try {
      const access_token = req.headers.authorization?.split(' ')?.[1]

      if (access_token) {
        const checkToken = jwt.verify(access_token, process.env.JWT_SECRET)
        const decoded = jwt.decode(access_token)

        if (checkToken) {
          req.user = decoded
          next()
        }
      } else {
        res.status(401).send({ message: 'Unauthorized.' })
      }
    } catch (error) {
      res.status(406).send({ message: 'Invalid JWT' })
    }
  }
}
