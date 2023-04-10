import { PrismaService } from "../../../providers/prisma/prisma.service";

export class GetAllCategoriesService {
  private prisma = PrismaService;

  async execute() {
    const result = await this.prisma.category.findMany();
    return result;
  }
}
