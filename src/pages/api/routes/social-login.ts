import type { NextApiRequest, NextApiResponse } from 'next'
import { SocialLoginService } from '../modules/auth/services/social-login.service'
import { IAuth } from '../modules/auth/interfaces/model/auth.model'
import { LoginCredentials } from '../providers/firebase/firebase.service'

const socialLoginService = new SocialLoginService()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | IAuth
    | {
        error: string
      }
  >
) {
  if (req.method === 'POST') {
    try {
      const data = req.body as LoginCredentials
      const user = await socialLoginService.execute(data)
      res.status(201).json(user)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}
