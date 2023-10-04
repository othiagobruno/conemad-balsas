import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaService } from './providers/prisma.service'

const prisma = PrismaService

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const id = req.query.id as string

    const sub = await prisma.subscriptions.findFirst({
      where: {
        id: id,
      },
    })

    return res.status(200).json(sub)
  }
}

export default handler
