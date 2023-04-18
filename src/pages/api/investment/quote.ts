import type { NextApiRequest, NextApiResponse } from 'next'
import { BrapiService } from '../providers/brapi/brapi.service'

const brapiService = new BrapiService()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const result = await brapiService.quotes()
      res.status(200).json(result.stocks ?? [])
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}
