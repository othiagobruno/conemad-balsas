import { PrismaService } from '../../../providers/prisma/prisma.service'
import { CreateTransactionDto } from '../interfaces/dtos/create-transaction.dto'

export class ImportTransactionService {
  private prisma = PrismaService

  async execute(data: CreateTransactionDto) {
    const findByExternalId = await this.prisma.transaction.findFirst({
      where: { external_id: data.external_id },
    })

    if (findByExternalId) return findByExternalId

    return await this.prisma.transaction.create({ data })
  }
}
