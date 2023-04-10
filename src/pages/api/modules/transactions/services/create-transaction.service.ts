import { PrismaService } from "../../../providers/prisma/prisma.service";
import { CreateTransactionDto } from "../interfaces/dtos/create-transaction.dto";

export class CreateTransactionService {
  private prisma = PrismaService;

  async execute(data: CreateTransactionDto) {
    const result = await this.prisma.transaction.create({ data });
    return result;
  }
}
