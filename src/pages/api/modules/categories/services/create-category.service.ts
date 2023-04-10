import { PrismaService } from "@/pages/api/providers/prisma/prisma.service";
import { CreateCategoryDto } from "../interfaces/dtos/create-category.dto";

export class CreateCategoryService {
  private prisma = PrismaService;

  async execute(data: CreateCategoryDto) {
    const result = await this.prisma.category.create({ data });
    return result;
  }
}
