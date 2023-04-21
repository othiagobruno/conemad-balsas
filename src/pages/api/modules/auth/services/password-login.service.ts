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

    delete user.password

    const access_token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1y' }
    )

    user.premium = true

    return {
      access_token,
      user,
    }
  }
}
