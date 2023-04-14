'use client'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { themeApp } from '@/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={themeApp}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  )
}
