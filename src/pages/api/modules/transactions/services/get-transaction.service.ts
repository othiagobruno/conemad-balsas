import { PrismaService } from '@/pages/api/providers/prisma/prisma.service'
import { Category, Exeptions, Transaction } from '@prisma/client'
import { isSameMonth, isSameYear } from 'date-fns'

type TransactionList = (Transaction & {
  category: Category
  exeptions: Exeptions[]
})[]

export class GetTransactionsService {
  private prisma = PrismaService

  async execute(date: Date, userId: string) {
    const transactions = await this.prisma.transaction.findMany({
      where: { user_id: userId },
      include: {
        category: true,
        exeptions: {
          orderBy: {
            id: 'desc',
          },
        },
      },
    })

    const groupedByMonth = transactions
      .filter(
        (transaction) =>
          (!!isSameMonth(date, transaction.date) &&
            !!isSameYear(date, transaction.date)) ||
          transaction.type === 'RECURRENT'
      )
      .map((transaction) => ({
        ...transaction,
        amount: getAmountFromRecurrentTransaction(date, [transaction]),
      }))

    return groupedByMonth
  }
}

const getAmountFromRecurrentTransaction = (
  date: Date,
  transactions: TransactionList
) => {
  let amout = 0
  for (const transaction of transactions) {
    if (transaction.type === 'RECURRENT') {
      const exeption = transaction.exeptions.find((exeption) =>
        isSameMonth(date, exeption.date)
      )

      if (exeption) {
        amout += exeption.amount
      } else {
        amout += transaction.amount
      }
    } else {
      amout += transaction.amount
    }
  }

  return amout
}
