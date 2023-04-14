import type { NextApiRequest, NextApiResponse } from 'next'
import { PasswordLoginService } from './modules/auth/services/password-login.service'
import { PasswordLoginDto } from './modules/auth/interfaces/dtos/password-login.dto'
import { IAuth } from './modules/auth/interfaces/model/auth.model'

const passwordLoginService = new PasswordLoginService()

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
      const data = req.body as PasswordLoginDto
      const user = await passwordLoginService.execute(data)
      res.status(201).json(user)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}
