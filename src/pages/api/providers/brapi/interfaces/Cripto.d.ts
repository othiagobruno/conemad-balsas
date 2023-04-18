export interface CriptoBrapi {
  coins?: Coin[]
}

export interface Coin {
  currency?: Currency
  currencyRateFromUSD?: number
  coinName?: string
  coin?: string
  regularMarketChange?: number
  regularMarketPrice?: number
  regularMarketChangePercent?: number
  regularMarketDayLow?: number
  regularMarketDayHigh?: number
  regularMarketDayRange?: string
  regularMarketVolume?: number
  marketCap?: number
  regularMarketTime?: number
  coinImageUrl?: string
}

export enum Currency {
  Brl = 'BRL',
}
