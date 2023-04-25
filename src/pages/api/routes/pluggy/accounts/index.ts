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
      const result = await pluggyService.listAccounts(
        '2851964d-69e0-4c45-a048-ab1571a7f9b1'
      )
      return res.status(200).json(result)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
