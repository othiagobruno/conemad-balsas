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
  const [loading, setLoading] = useState(false)

  const generatePix = async (valor: number) => {
    try {
      const res = await api.get('pix', { params: { valor: valor } })
      setPix(res.data?.brcode)
    } catch (error) {
      //
    }
  }

  const createSub = async (data: ICreateSub) => {
    try {
      setLoading(true)
      const res = await api.post('/cadastro', data)
      if (res.status === 200) {
        push({
          pathname: '/success',
          query: res.data,
        })
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  return {
    generatePix,
    createSub,
    pix,
    loading,
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
  valor: number
  campo: string
  regional: string
  pastor: string
}
