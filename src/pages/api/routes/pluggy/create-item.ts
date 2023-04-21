import { use, Middleware } from 'next-api-route-middleware'
import { PluggyService } from '../../providers/pluggy/pluggy.service'
import {
  AuthMiddleware,
  IAuthReq,
} from '../../modules/auth/middleware/auth.middleware'
import { ICreateItemPluggyDTO } from '../../providers/pluggy/pluggy'

const pluggyService = new PluggyService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { bank_id, data } = req.body as ICreateItemPluggyDTO
      const result = await pluggyService.createItem(bank_id, data)

      res.status(200).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
