import { use, Middleware } from 'next-api-route-middleware'
import { PluggyService } from '../../../providers/pluggy/pluggy.service'
import {
  AuthMiddleware,
  IAuthReq,
} from '../../../modules/auth/middleware/auth.middleware'

const pluggyService = new PluggyService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const itemId = req.query.id as string

      const result = await pluggyService.listTransactions(itemId)
      return res.status(200).json(result)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
