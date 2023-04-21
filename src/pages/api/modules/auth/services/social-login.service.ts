import {
  FirebaseService,
  LoginCredentials,
} from '@/pages/api/providers/firebase/firebase.service'
import { PrismaService } from '@/pages/api/providers/prisma/prisma.service'
import jwt from 'jsonwebtoken'

export class SocialLoginService {
  private prisma = PrismaService
  private firebase = new FirebaseService()

  async execute(data: LoginCredentials) {
    const user = await this.firebase.signInWithCredential(data)

    let userExists = await this.prisma.user.findFirst({
      where: { auth_provider_uid: user.auth_provider_uid },
    })

    if (!userExists) {
      userExists = await this.prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          auth_provider: user.auth_provider,
          auth_provider_uid: user.auth_provider_uid,
          password: '',
        },
      })
    }

    const access_token = jwt.sign(
      { id: userExists.id, name: userExists.name },
      process.env.JWT_SECRET,
      { expiresIn: '1y' }
    )

    userExists.premium = true

    return {
      access_token,
      user: userExists,
    }
  }
}
