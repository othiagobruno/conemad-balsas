import axios from 'axios'
import { useRouter } from 'next/router'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// GET https://gerarqrcodepix.com.br/api/v1
// params: {
//     nome: 'Ad Madureira Balsas',
//     cidade: 'Balsas',
//     valor: valor,
//     saida: 'br',
//     chave: '62120711364',
//   },

export const useSubscription = () => {
  const { push } = useRouter()

  const createSub = async (data: ICreateSub) => {
    const res = await api.post('/cadastro', data)

    if (res.status === 200) {
      push({
        pathname: '/success',
        query: res.data,
      })
    }
  }

  return {
    createSub,
  }
}

export interface ICreateSub {
  nome: string
  telefone: string
  cpf: string
  cep: string
  endereco: string
  cidade: string
  estado: string
  cargo_atual: string
  cargo_pretendido: string
  valor: number
  campo: string
  regional: string
  pastor: string
}
