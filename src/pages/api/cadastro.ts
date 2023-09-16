import { NextApiRequest, NextApiResponse } from 'next'
import { UserService } from './modules/subscriptions/services/subs.service'
import { CreateSubsDTO } from './modules/subscriptions/dtos/CreateSubs.dto'

const userService = new UserService()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const body = req.body as CreateSubsDTO
    const result = await userService.execute(body)
    return res.status(200).json(result)
  }
}

export default handler
