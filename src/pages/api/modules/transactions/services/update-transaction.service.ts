import { PrismaService } from '../../../providers/prisma/prisma.service'
import { UpdateTransactionDTO } from '../interfaces/dtos/update-transaction.dto'

export class UpdateTransactionService {
  private prisma = PrismaService

  async execute(id: string, data: UpdateTransactionDTO) {
    const isRecurrent = data.type === 'RECURRENT'

    const transaction = await this.prisma.transaction.update({
      where: { id },
      data:
        isRecurrent && data.current_date
          ? {
              category_id: data.category_id,
              installments: data.installments,
              is_expense: data.is_expense,
              title: data.title,
              paid: data.paid,
              exeptions: {
                create: {
                  date: data.current_date,
                  amount: data.amount,
                },
              },
            }
          : {
              amount: data.amount,
              category_id: data.category_id,
              installments: data.installments,
              is_expense: data.is_expense,
              title: data.title,
              paid: data.paid,
            },
    })

    return transaction
  }
}
