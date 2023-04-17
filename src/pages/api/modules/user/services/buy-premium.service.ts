import { PrismaService } from '@/pages/api/providers/prisma/prisma.service'
import { PrismaClient, User } from '@prisma/client'
import { addBusinessDays } from 'date-fns'

export class BuyPremiumService {
  private prisma: PrismaClient = PrismaService

  async execute(userId: string): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        premium: true,
        free_trial_ends: addBusinessDays(new Date(), 3),
      },
    })

    delete user.password
    return user
  }
}
