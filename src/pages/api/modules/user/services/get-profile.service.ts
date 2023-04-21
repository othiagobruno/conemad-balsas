import { PrismaService } from '../../../providers/prisma/prisma.service'

export class ProfileService {
  private prisma = PrismaService

  async execute(id: string) {
    const user = await this.prisma.user.findFirst({
      where: { id },
    })

    if (!user) {
      throw new Error('User not found')
    }

    delete user.password

    user.premium = true

    return user
  }
}
