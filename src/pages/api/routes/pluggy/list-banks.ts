import { use, Middleware } from 'next-api-route-middleware'
import { BankType, PluggyService } from '../../providers/pluggy/pluggy.service'
import {
  AuthMiddleware,
  IAuthReq,
} from '../../modules/auth/middleware/auth.middleware'

const pluggyService = new PluggyService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const type = req.query.type as BankType | BankType[]
      const result = await pluggyService.listBanks(type)
      res.status(200).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
