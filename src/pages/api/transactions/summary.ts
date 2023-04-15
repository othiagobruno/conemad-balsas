import { use, Middleware } from 'next-api-route-middleware'
import {
  AuthMiddleware,
  IAuthReq,
} from '../modules/auth/middleware/auth.middleware'
import { SummaryService } from '../modules/transactions/services/summary.service'

const summaryService = new SummaryService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const result = await summaryService.execute(req.user.id)
      res.status(200).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
