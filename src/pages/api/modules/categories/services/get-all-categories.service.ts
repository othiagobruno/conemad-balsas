import { PrismaService } from "../../../providers/prisma/prisma.service";

export class GetAllCategoriesService {
  private prisma = PrismaService;

  async execute(user_id: string) {
    const result = await this.prisma.category.findMany({
      where: {
        AND: [{ user_id: null }, { user_id }],
      },
    });
    return result;
  }
}
