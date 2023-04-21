import { use, Middleware } from 'next-api-route-middleware'
import { PluggyService } from '../../providers/pluggy/pluggy.service'
import {
  AuthMiddleware,
  IAuthReq,
} from '../../modules/auth/middleware/auth.middleware'

const pluggyService = new PluggyService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const result = await pluggyService.createApiKey()
      res.status(201).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
