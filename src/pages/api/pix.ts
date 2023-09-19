import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const valor = req.query.valor

    console.log(valor)

    const result = await fetch(
      `https://gerarqrcodepix.com.br/api/v1?nome=CONEMAD+-+MA&cidade=Balsas&valor=${valor}&saida=br&chave=07815192000133`
    )

    const value = await result.json()

    return res.status(200).json(value)
  }
}

export default handler
