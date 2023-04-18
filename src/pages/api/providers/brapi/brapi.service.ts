import axios from 'axios'
import { IQuoteBrapi } from './interfaces/IQuote'
import { CriptoBrapi } from './interfaces/Cripto'

export class BrapiService {
  private readonly api = axios.create({
    baseURL: 'https://brapi.dev/api',
  })

  async quotes() {
    const { data } = await this.api.get<IQuoteBrapi>('/quote/list', {
      params: { sortOrder: 'desc', limit: 45 },
    })
    return data
  }

  async cripto() {
    const { data } = await this.api.get<CriptoBrapi>('/v2/crypto', {
      params: {
        currency: 'brl',
        coin: 'BTC,ETH,XRP,BCH,USDT,LTC,ADA,BNB,DOGE,USDC,UNI,ETC,BSV,TRX,THETA,NEO,MIOTA,DAI,ATOM,XTZ,ALGO,AVAX,FTT,ICP,QTUM,DCR,LSK,SC,OMG,REP,SNX,COMP,ENJ,CELO,AAVE,NEAR,CHZ,SKL,MANA,CRV,UMA,SNX,ICX,STX,ST',
      },
    })
    return data
  }
}
