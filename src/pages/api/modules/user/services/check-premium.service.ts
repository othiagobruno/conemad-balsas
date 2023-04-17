import { PrismaService } from '@/pages/api/providers/prisma/prisma.service'
import { PrismaClient } from '@prisma/client'
import { addBusinessDays } from 'date-fns'

export class CheckPremiumService {
  private prisma: PrismaClient = PrismaService

  async execute(userId: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    })

    if (user?.free_trial_ends < addBusinessDays(new Date(), 1)) {
      await this.prisma.user.update({
        where: { id: userId },
        data: {
          premium: false,
          free_trial_ends: null,
        },
      })

      return false
    }

    return user?.premium || false
  }
}
