export interface IQuoteBrapi {
  stocks?: Stock[]
}

export interface Stock {
  stock?: string
  name?: string
  close?: number
  change?: number
  volume?: number
  market_cap?: number | null
  logo?: string
  sector?: null | string
}
