import { PrismaService } from "@/pages/api/providers/prisma/prisma.service";
import { UpdateTransactionDTO } from "../interfaces/dtos/update-transaction.dto";

export class UpdateTransactionService {
  private prisma = PrismaService;

  async execute(id: string, data: UpdateTransactionDTO) {
    const transaction = await this.prisma.transaction.update({
      where: { id },
      data,
    });

    return transaction;
  }
}
