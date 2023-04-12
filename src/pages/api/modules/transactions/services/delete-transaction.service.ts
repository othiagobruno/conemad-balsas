import { PrismaService } from '../../..//providers/prisma/prisma.service'

export class DeleteTransactionService {
  private prisma = PrismaService

  async execute(id: string) {
    const transaction = await this.prisma.transaction.delete({
      where: {
        id,
      },
    })

    return transaction
  }
}
