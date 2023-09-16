import { PrismaService } from '@/pages/api/providers/prisma.service'
import { PrismaClient } from '@prisma/client'
import { CreateSubsDTO } from '../dtos/CreateSubs.dto'

export class UserService {
  private prisma: PrismaClient = PrismaService

  async execute(data: CreateSubsDTO) {
    const checkUser = await this.prisma.subscriptions.findFirst({
      where: { cpf: data.cpf },
    })

    if (checkUser) {
      throw new Error('CPF já cadastrado')
    }

    const result = await this.prisma.subscriptions.create({
      data,
    })
    return result
  }
}
