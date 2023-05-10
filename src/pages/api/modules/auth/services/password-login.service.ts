import { PrismaService } from '../../../providers/prisma/prisma.service'
import { PasswordLoginDto } from '../interfaces/dtos/password-login.dto'
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'

export class PasswordLoginService {
  private prisma = PrismaService

  async execute(data: PasswordLoginDto) {
    const user = await this.prisma.user.findFirst({
      where: { email: data.email },
    })

    if (!user) {
      throw new Error('User not found')
    }

    const passwordMatch = await compare(data.password, user.password)

    if (!passwordMatch) {
      throw new Error('Invalid password')
    }

    user.password = undefined as any as string

    const access_token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET as string,
      { expiresIn: '1y' }
    )

    user.premium = true

    return {
      access_token,
      user,
    }
  }
}
