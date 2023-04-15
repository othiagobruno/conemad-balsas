/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaService } from '@/pages/api/providers/prisma/prisma.service'
import { GetTransactionsService } from './get-transaction.service'

export class SummaryService {
  private prisma = PrismaService
  private getTransactionsService = new GetTransactionsService()

  async execute(userId: string) {
    const date = new Date()

    const transactions = await this.getTransactionsService.execute(date, userId)

    const summary = transactions.reduce(
      (acc, transaction) => {
        if (transaction.is_expense) {
          acc.income += transaction.amount
        } else {
          acc.expense += transaction.amount
        }
        return acc
      },
      { income: 0, expense: 0 }
    )

    const groupedByCategory = transactions.reduce((acc: any, transaction) => {
      const { category } = transaction
      if (category) {
        const { name } = category
        if (!acc[name]) {
          if (!transaction.is_expense) {
            acc[name] = { income: transaction.amount, expense: 0, category }
          } else {
            acc[name] = { income: 0, expense: transaction.amount, category }
          }
        } else {
          if (!transaction.is_expense) {
            acc[name].income += transaction.amount
          } else {
            acc[name].expense += transaction.amount
          }
        }
      }
      return acc
    }, {})

    return { summary, grouped_by_category: groupedByCategory }
  }
}
