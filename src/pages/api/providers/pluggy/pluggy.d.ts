export interface ICreateItemPluggyDTO {
  bank_id: number
  data: {
    agency?: string
    account?: string
    password?: string
    phrase?: string
    cpf?: string // Ailos Cartões
    token?: string // Banco Inter | Bradesco
    user?: string // Caixa Econômica Federal
  }
}
