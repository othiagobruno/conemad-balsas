import { PluggyClient } from 'pluggy-sdk'

export class PluggyService {
  private pluggy = new PluggyClient({
    clientId: 'f28797b8-2331-45e8-867a-43599aabe9f0',
    clientSecret: '6a746905-2f8e-4876-9f71-a51afbfa57c7',
  })

  createItem(connectorId: number, credentials: any) {
    return this.pluggy.createItem(connectorId, credentials)
  }

  listAccounts(itemId: string) {
    return this.pluggy.fetchAllTransactions(itemId)
  }

  async listBanks(type: BankType | BankType[] = 'PERSONAL_BANK') {
    const banks = await this.pluggy.fetchConnectors({
      countries: ['BR'],
      types: Array.isArray(type) ? type : [type],
    })

    return banks.results
      .map((bank) => ({
        id: bank.id,
        name: bank.name,
        logo: bank.imageUrl,
        type:
          bank.type === 'PERSONAL_BANK' ? 'Conta Corrente' : 'Investimentos',
      }))
      .filter((bank) => allowBankId.includes(bank.id))
  }

  createApiKey() {
    return this.pluggy.createConnectToken()
  }
}

export type BankType = 'PERSONAL_BANK' | 'INVESTMENT'

const allowBankId = [212, 211, 215, 203, 219, 201, 238, 206, 208]
