import { PrismaService } from "@/pages/api/providers/prisma/prisma.service";

export class GetTransactionsService {
  private prisma = PrismaService;

  async execute(user_id: string) {
    const result = await this.prisma.transaction.findMany({
      where: {
        user_id,
      },
    });
    return result;
  }
}
