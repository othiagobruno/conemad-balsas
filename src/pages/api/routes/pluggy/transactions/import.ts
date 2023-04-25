import { use, Middleware } from 'next-api-route-middleware'
import { PluggyService } from '../../../providers/pluggy/pluggy.service'
import {
  AuthMiddleware,
  IAuthReq,
} from '../../../modules/auth/middleware/auth.middleware'
import { ImportTransactionService } from '../../../modules/transactions/services/import-transactions.service'
import { TransactionType } from '@prisma/client'

const pluggyService = new PluggyService()
const importTransactionService = new ImportTransactionService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const token = req.body.itemId as string

      const accounts = await pluggyService.listAccounts(token)

      for (const account of accounts.results) {
        const result = await pluggyService.listTransactions(account.id)

        // somente contas no cartão de crédito
        for (const transaction of result.results) {
          await importTransactionService.execute({
            amount: Math.round(Math.abs(transaction.amount * 100)),
            title: transaction.description,
            date: new Date(transaction.date),
            category_id: '85d4c01b-9d1a-47c8-84c6-8df7a295e820',
            user_id: req.user.id,
            is_expense: transaction.type === 'DEBIT',
            type: TransactionType.FIXED,
            external_id: transaction.id,
            external_token: token,
          })
        }
      }

      res.status(201).json('success')
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)
