import { use, Middleware } from 'next-api-route-middleware'
import { PluggyService } from '../../providers/pluggy/pluggy.service'
import {
  AuthMiddleware,
  IAuthReq,
} from '../../modules/auth/middleware/auth.middleware'

const pluggyService = new PluggyService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const result = await pluggyService.listAccounts(
        // 'a6e21e24-abac-4df7-a124-14645e30047e'
        'c4050f61-9d50-4cca-b9ec-08779738b51d'
      )
      res.status(200).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
