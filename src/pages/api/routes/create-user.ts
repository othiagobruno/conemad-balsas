import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@prisma/client'
import { CreateUserService } from '../modules/user/services/create-user.service'
import { CreateUserDto } from '../modules/user/interfaces/dtos/create-user.dto'

const createUserService = new CreateUserService()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | User
    | {
        error: string
      }
  >
) {
  if (req.method === 'POST') {
    try {
      const data = req.body as CreateUserDto
      const user = await createUserService.execute(data)
      res.status(201).json(user)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}
