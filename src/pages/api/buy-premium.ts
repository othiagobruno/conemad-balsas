import { use, Middleware } from 'next-api-route-middleware'
import {
  AuthMiddleware,
  IAuthReq,
} from './modules/auth/middleware/auth.middleware'
import { BuyPremiumService } from './modules/user/services/buy-premium.service'

const buyPremiumService = new BuyPremiumService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const user = await buyPremiumService.execute(req.user.id)
      res.status(200).json(user)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
