import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

const api = axios.create({
  baseURL: 'https://conemad-balsas.vercel.app/api',
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

  const getConfirm = async (id: string) => {
    try {
      const res = await api.get('/confirmar', { params: { id: id } })
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  return {
    generatePix,
    createSub,
    pix,
    loading,
    getConfirm,
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
