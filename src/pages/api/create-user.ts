import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateUserDto } from './modules/user/interfaces/dtos/create-user.dto'
import { User } from '@prisma/client'
import { CreateUserService } from './modules/user/services/create-user.service'

const createUserService = new CreateUserService()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  if (req.method === 'POST') {
    try {
      const data = req.body as CreateUserDto
      const user = await createUserService.execute(data)
      res.status(201).json(user)
    } catch (error: any) {
      res.status(400).json({ error: error.message } as any)
    }
  }
}
