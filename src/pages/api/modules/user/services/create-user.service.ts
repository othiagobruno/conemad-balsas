import { PrismaService } from '../../../providers/prisma/prisma.service'
import { PrismaClient } from '@prisma/client'
import { CreateUserDto } from '../interfaces/dtos/create-user.dto'
import bcrypt from 'bcryptjs'

export class CreateUserService {
  private prisma: PrismaClient = PrismaService

  async execute(data: CreateUserDto) {
    const checkUser = await this.prisma.user.findFirst({
      where: { email: data.email },
    })

    if (checkUser) {
      throw new Error('User already exists')
    }

    const newPassword = await bcrypt.hash(data.password, 10)

    const result = await this.prisma.user.create({
      data: {
        ...data,
        password: newPassword,
      },
    })

    return result
  }
}
