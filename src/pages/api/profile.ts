import { use, Middleware } from 'next-api-route-middleware'
import { ProfileService } from './modules/user/services/get-profile.service'
import {
  AuthMiddleware,
  IAuthReq,
} from './modules/auth/middleware/auth.middleware'
import { UpdateUserService } from './modules/user/services/update-user.service'

const profileService = new ProfileService()
const updateProfileService = new UpdateUserService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'PUT') {
    try {
      const user = await updateProfileService.execute(req.user.id, req.body)
      res.status(200).json(user)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }

  if (req.method === 'GET') {
    try {
      const user = await profileService.execute(req.user.id)
      res.status(200).json(user)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
