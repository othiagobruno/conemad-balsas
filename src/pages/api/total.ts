import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaService } from './providers/prisma.service'

const prisma = PrismaService

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const subs = await prisma.subscriptions.findMany()

    const somaValor = subs.reduce((acc, cur) => acc + cur.valor, 0)

    const porCidade = subs.reduce((acc: any, cur: any) => {
      if (!acc[cur.cidade]) {
        acc[cur.cidade] = 0
      }
      acc[cur.cidade] += cur.valor
      return acc
    }, {})

    const porCampo = subs.reduce((acc: any, cur: any) => {
      if (!acc[cur.campo]) {
        acc[cur.campo] = 0
      }
      acc[cur.campo] += cur.valor
      return acc
    }, {})

    return res.status(200).json({
      total: toCurrency(somaValor),
      quantidade: subs.length,
      porCidade: Object.keys(porCidade)
        .map((key) => ({
          cidade: key,
          total: toCurrency(porCidade[key]),
        }))
        .sort((a, b) => currencyToNumber(b.total) - currencyToNumber(a.total)),
      porCampo: Object.keys(porCampo)
        .map((key) => ({
          campo: key,
          total: toCurrency(porCampo[key]),
        }))
        .sort((a, b) => currencyToNumber(b.total) - currencyToNumber(a.total)),
    })
  }
}

const toCurrency = (value: number) => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

const currencyToNumber = (value: string) => {
  return Number(value.replace(/[^0-9-]+/g, ''))
}

export default handler
