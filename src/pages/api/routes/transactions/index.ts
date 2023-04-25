import { use, Middleware } from 'next-api-route-middleware'
import {
  AuthMiddleware,
  IAuthReq,
} from '../../modules/auth/middleware/auth.middleware'
import { CreateTransactionService } from '../../modules/transactions/services/create-transaction.service'
import { GetTransactionsService } from '../../modules/transactions/services/get-transaction.service'
import { CreateTransactionDto } from '../../modules/transactions/interfaces/dtos/create-transaction.dto'
import { isDate } from 'date-fns'

const createTransactionService = new CreateTransactionService()
const getTransactionsService = new GetTransactionsService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const date = new Date((req.query.date as string) || new Date().toString())

      console.log(date, isDate(date))

      const result = await getTransactionsService.execute(date, req.user.id)

      console.log(result)

      res.status(200).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body as CreateTransactionDto
      const result = await createTransactionService.execute({
        ...data,
        user_id: req.user.id,
      })
      res.status(201).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
