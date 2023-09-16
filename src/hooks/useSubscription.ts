import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const useSubscription = () => {
  const { push } = useRouter()
  const [pix, setPix] = useState('')

  const generatePix = async (valor: number) => {
    try {
      const res = await api.get('https://gerarqrcodepix.com.br/api/v1', {
        params: {
          nome: 'CONEMAD - MA',
          cidade: 'Balsas',
          valor: valor,
          saida: 'br',
          chave: '07815192000133',
        },
      })
      setPix(res.data?.brcode)
    } catch (error) {
      //
    }
  }

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
    generatePix,
    createSub,
    pix,
  }
}

export interface ICreateSub {
  id?: string
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
