import axios from 'axios'

export const apiCep = axios.create({
  baseURL: 'https://ws.apicep.com/cep',
})

export const viaCepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws',
})

export const useCep = () => {
  //

  //
  const getByCep = async (cep: string) => {
    try {
      const formattedCep = String(cep).replace('-', '')

      const viaCep = await findViaCep(formattedCep)
      if (viaCep?.cep) {
        return {
          address: viaCep.logradouro,
          city: viaCep.localidade,
          district: viaCep.bairro,
          state: viaCep.uf,
          code: viaCep.cep,
          ok: true,
          status: 200,
          statusText: 'OK',
        } as ICepResult
      }

      const apiCepValeu = await apiGetCep(formattedCep)
      if (apiCepValeu?.code) {
        return {
          address: apiCepValeu.address,
          city: apiCepValeu.city,
          district: apiCepValeu.district,
          state: apiCepValeu.state,
          code: apiCepValeu.code,
          ok: true,
          status: 200,
          statusText: 'OK',
        } as ICepResult
      }
      return null
    } catch (error) {
      //
    }
  }

  const findViaCep = async (cep: string) => {
    try {
      const result = await viaCepApi.get<IViaCepResult>(`/${cep}/json`)
      if (result.status === 200) {
        return result.data
      }
      return null
    } catch (error) {
      return null
    }
  }

  const apiGetCep = async (cep: string) => {
    try {
      const result = await apiCep.get<ICepResult>(`/${cep}.json`)
      if (result.data.status === 200) {
        return result.data
      }
      return null
    } catch (error) {
      return null
    }
  }

  return { getByCep }
}

export class ICepResult {
  status: number
  ok: boolean
  code: string
  state: string
  city: string
  district: string
  address: string
  statusText: string
}

export interface IViaCepResult {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}
