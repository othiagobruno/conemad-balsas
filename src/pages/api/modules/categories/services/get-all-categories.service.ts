import { PrismaService } from '../../../providers/prisma/prisma.service'

export class GetAllCategoriesService {
  private prisma = PrismaService

  async execute(user_id: string) {
    const result = await this.prisma.category.findMany({
      where: {
        OR: [
          {
            user_id: {
              isSet: false,
            },
          },
          {
            user_id,
          },
        ],
      },
    })

    return result
  }
}
